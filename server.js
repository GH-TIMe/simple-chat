const app = require("express")();

const cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const http = require("http").createServer(app);
const io = require("socket.io").listen(http);

const roomsArray = [
  [
    "test",
    new Map([
      ["users", new Map()],
      ["messages", []],
    ]),
  ],
  [
    "frontend",
    new Map([
      ["users", new Map()],
      ["messages", []],
    ]),
  ],
];

const rooms = new Map(roomsArray);
const port = process.env.PORT || 8888;

app.get("/rooms/:name", (req, res) => {
  const { name: roomID } = req.params;
  const obj = {
    users: [...rooms.get(roomID).get("users").values()],
    messages: rooms.get(roomID).get("messages"),
  };
  res.json(obj);
});

app.get("/rooms", (req, res) => {
  const names = [...rooms.keys()];
  res.json(names);
});

io.on("connection", (socket) => {
  socket.on("ROOM:JOIN", ({ roomID, userName }) => {
    socket.join(roomID);
    rooms.get(roomID).get("users").set(socket.id, userName);
    const users = [...rooms.get(roomID).get("users").values()];
    socket.to(roomID).emit("ROOM:SET_USERS", users);
  });

  socket.on("ROOM:SET_MESSAGE", ({ roomID, text, author }) => {
    rooms.get(roomID).get("messages").push({ text, author });
    const messages = rooms.get(roomID).get("messages");
    io.to(roomID).emit("ROOM:SET_MESSAGES", messages);
  });

  socket.on("disconnecting", () => {
    const userRooms = Object.keys(socket.rooms).filter(
      (item) => item !== socket.id
    );
    userRooms.forEach((roomID) => {
      rooms.get(roomID).get("users").delete(socket.id);
      const currUsers = [...rooms.get(roomID).get("users").values()];
      socket.to(roomID).emit("ROOM:SET_USERS", currUsers);
    });
  });

  socket.on("disconnect", () => {
    // socket.rooms === {}
  });
});

http.listen(port, (err) => {
  if (err) {
    throw Error(err);
  }

  console.log("SERVER STARTED!");
});

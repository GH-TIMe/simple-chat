import React, { useReducer, useEffect } from "react";
import { JoinBlock, Chat } from "./components";
import socket from "./socket";
import axios from "axios";
import { API_HOST } from "./server";

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ROOM": {
      return {
        ...state,
        roomID: action.payload,
      };
    }
    case "JOINED": {
      return {
        ...state,
        roomID: action.payload.roomID,
        userName: action.payload.userName,
        joined: true,
      };
    }
    case "SET_USERS": {
      return {
        ...state,
        users: action.payload,
      };
    }
    case "SET_MESSAGES": {
      return {
        ...state,
        messages: action.payload,
      };
    }
    case "SET_DATA": {
      return {
        ...state,
        users: action.payload.users,
        messages: action.payload.messages,
      };
    }
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    joined: false,
    roomID: null,
    userName: null,
    users: [],
    messages: [],
  });

  const onLogin = async (obj) => {
    dispatch({
      type: "JOINED",
      payload: obj,
    });
    socket.emit("ROOM:JOIN", obj);
    const { data } = await axios.get(`${API_HOST}/rooms/${obj.roomID}`);
    dispatch({
      type: "SET_DATA",
      payload: data,
    });
  };

  const sendMessage = (text) => {
    const message = {
      roomID: state.roomID,
      text,
      author: state.userName,
    };
    socket.emit("ROOM:SET_MESSAGE", message);
  };

  const setUsers = (users) => {
    dispatch({
      type: "SET_USERS",
      payload: users,
    });
  };

  const setMessage = (messages) => {
    dispatch({
      type: "SET_MESSAGES",
      payload: messages,
    });
  };

  const setRoom = (roomID) => {
    dispatch({
      type: "SET_ROOM",
      payload: roomID,
    });
  };

  useEffect(() => {
    socket.on("ROOM:SET_USERS", setUsers);
    socket.on("ROOM:SET_MESSAGES", setMessage);
  }, []);

  return (
    <div className="wrapper">
      {state.joined ? (
        <Chat {...state} handleSendMessage={sendMessage} setRoom={setRoom} />
      ) : (
        <JoinBlock onLogin={onLogin} />
      )}
    </div>
  );
};

export default App;

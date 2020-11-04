import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import socket from "../../socket";
import AutoSizeTextArea from "../AutoSizeTextArea";

import "./Chat.scss";

const Swither = ({ roomID, setRoom }) => {
  const [disable, setDisable] = useState(true);
  const switcher = useRef();
  const [activeRoom, setActiveRoom] = useState(roomID);

  const handleOutsideClick = (e) => {
    const path = e.path || (e.composedPath && e.composedPath());
    if (path) {
      if (!path.includes(switcher.current)) {
        setDisable(true);
      }
    }
  };

  const onSelectRoom = (room) => {
    if (room === activeRoom) {
      return;
    }

    socket.emit("ROOM:REJOIN", { oldRoom: activeRoom, newRoom: room });
    setRoom(room);
    setActiveRoom(room);
    setDisable(true);
  };

  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
  }, []);

  const handleClick = () => {
    setDisable(!disable);
  };

  const rooms = ["test", "frontend"];

  return (
    <div className="switcher" ref={switcher}>
      <h5 className="switcher__title">
        room:
        <div className="switcher__content">
          <span className="switcher__active-room" onClick={handleClick}>
            {activeRoom}
          </span>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="caret-down"
            className={classNames("switcher__icon", {
              active: !disable,
            })}
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            width="10"
          >
            <path
              fill="currentColor"
              d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
            ></path>
          </svg>
          <ul
            className={classNames("switcher__rooms", {
              disable: disable,
            })}
          >
            {rooms.map((room, index) => (
              <li
                className={classNames("switcher__room", {
                  active: activeRoom === room,
                })}
                onClick={() => onSelectRoom(room)}
                key={`${room}_${index}`}
              >
                {room}
              </li>
            ))}
          </ul>
        </div>
      </h5>
    </div>
  );
};

const Chat = ({
  users,
  messages,
  handleSendMessage,
  roomID,
  setRoom,
  userName,
}) => {
  const textAreaEl = useRef(null);
  const messageBlocks = useRef(null);
  const [sideBarStatus, setSideBarStatus] = useState(false);

  useEffect(() => {
    messageBlocks.current.scrollTop = messageBlocks.current.scrollHeight;
  }, [messages]);

  const sendMessage = () => {
    if (textAreaEl.current.value !== "") {
      handleSendMessage(getTextValue(textAreaEl));
    }
  };

  const getTextValue = () => textAreaEl.current.value;

  const handleSideBar = () => {
    setSideBarStatus(!sideBarStatus);
  };

  return (
    <div className="chat">
      <div className="chat__container">
        <div className="chat__content">
          <div
            className={classNames("chat__left-side", {
              active: sideBarStatus,
            })}
          >
            <div className="chat__left-side-container">
              <div className="sidebar__close">
                <svg
                  onClick={handleSideBar}
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="times"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  viewBox="0 0 352 512"
                >
                  <path
                    fill="currentColor"
                    d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                  ></path>
                </svg>
              </div>
              <Swither roomID={roomID} setRoom={setRoom} />
              <h4 className="chat__online">Users ({users.length}):</h4>
              <ul className="chat__users">
                {users.map((user, index) => (
                  <li className="chat__user" key={`${user}_${index}`}>
                    {user}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="chat__right-side">
            <div className="sidebar__open">
              <svg
                onClick={handleSideBar}
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="bars"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                ></path>
              </svg>
              <span>{userName}</span>
            </div>
            <ul className="chat__messages" ref={messageBlocks}>
              {messages.map(({ text, author }, index) => (
                <li className="chat__message" key={`${author}_${index}`}>
                  <div className="chat__bubble">
                    <p className="chat__text">{text}</p>
                  </div>
                  <div className="chat__author">{author}</div>
                </li>
              ))}
            </ul>
            <div className="input-group chat__input-text">
              <AutoSizeTextArea refLink={textAreaEl} onSubmit={sendMessage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;

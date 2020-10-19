import React, { useRef, useEffect } from "react";
import AutoSizeTextArea from "../AutoSizeTextArea";

import "./Chat.scss";

const Chat = ({ users, messages, handleSendMessage }) => {
  const textAreaEl = useRef(null);
  const messageBlocks = useRef(null);

  useEffect(() => {
    messageBlocks.current.scrollTop = messageBlocks.current.scrollHeight;
  }, [messages]);

  const sendMessage = () => {
    if (textAreaEl.current.value !== "") {
      handleSendMessage(getTextValue(textAreaEl));
      clearField();
    }
  };

  const getTextValue = () => textAreaEl.current.value;
  const clearField = () => {
    textAreaEl.current.value = "";
  };

  return (
    <div className="chat">
      <div className="container">
        <div className="chat__content">
          <div className="chat__left-side">
            <h4 className="chat__online">Users ({users.length}):</h4>
            <ul className="chat__users">
              {users.map((user, index) => (
                <li className="chat__user" key={`${user}_${index}`}>
                  {user}
                </li>
              ))}
            </ul>
          </div>
          <div className="chat__right-side">
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
              <AutoSizeTextArea
                refLink={textAreaEl}
                onPressEnter={sendMessage}
              />
              <div className="input-group-append">
                <button
                  onClick={sendMessage}
                  className="btn btn-primary"
                  type="button"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;

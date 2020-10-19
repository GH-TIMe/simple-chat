import React, { useState } from "react";
import "./JoinBlock.scss";

const JoinBlock = ({ onLogin }) => {
  const [roomID, setRoomID] = useState("test");
  const [userName, setUserName] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handleRoomID = (e) => {
    setRoomID(e.target.value);
  };

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const onSignIn = (e) => {
    e.preventDefault();
    setLoading(true);
    const obj = {
      roomID,
      userName,
    };
    setLoading(false);
    onLogin(obj);
  };

  return (
    <form
      onSubmit={(e) => {
        onSignIn(e);
      }}
      className="form-size"
    >
      <h1 className="text-center">Войти</h1>
      <div className="form-group">
        <label htmlFor="chat-rooms">Room:</label>
        <select
          onChange={(e) => handleRoomID(e)}
          className="custom-select"
          id="chat-rooms"
          value={roomID}
          required
        >
          <option value="test">test</option>
          <option value="frontend">frontend</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="username">Name:</label>
        <input
          id="username"
          type="name"
          placeholder="Enter your name"
          className="form-control"
          onChange={handleUserName}
          value={userName}
          required
        />
      </div>
      <button
        className="btn btn-primary btn-block"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <span
              className="spinner-border spinner-border-sm spinner-margin"
              role="status"
              aria-hidden="true"
            ></span>
            Loading...
          </>
        ) : (
          "Sign in"
        )}
      </button>
    </form>
  );
};

export default JoinBlock;

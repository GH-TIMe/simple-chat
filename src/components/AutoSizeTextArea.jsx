import React, { useState } from "react";

const AutoSizeTextArea = ({ refLink, onSubmit }) => {
  const initialState = {
    value: "",
    rows: 1,
    minRows: 1,
    maxRows: 3,
  };

  const [state, setState] = useState(initialState);

  const handleSubmit = (e) => {
    if (
      (e.keyCode === 13 && !e.shiftKey) ||
      e.target.classList.contains("btn-send")
    ) {
      e.preventDefault();
      onSubmit();
      setState(initialState);
    }
  };

  const handeChange = (e) => {
    const textareaLineHeight = 24;

    const { minRows, maxRows } = state;

    const previousRows = e.target.rows;
    e.target.rows = minRows;

    const currentRows = ~~(e.target.scrollHeight / textareaLineHeight);

    if (currentRows === previousRows) {
      e.target.rows = currentRows;
    }

    if (currentRows >= maxRows) {
      e.target.rows = maxRows;
      e.target.scrollTop = e.target.scrollHeight;
    }

    setState({
      ...state,
      rows: currentRows < maxRows ? currentRows : maxRows,
      value: e.target.value,
    });
  };

  return (
    <>
      <textarea
        ref={refLink}
        className="form-control textarea-autosize"
        aria-label="With textarea"
        rows={state.rows}
        style={{ resize: "none" }}
        placeholder="Message"
        value={state.value}
        onChange={handeChange}
        onKeyDown={handleSubmit}
        autoFocus
      ></textarea>
      <div className="input-group-append">
        <button
          onClick={handleSubmit}
          className="btn btn-primary btn-send"
          type="button"
        >
          Send
        </button>
      </div>
    </>
  );
};

export default AutoSizeTextArea;

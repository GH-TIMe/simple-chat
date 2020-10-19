import React, { useState } from "react";

const AutoSizeTextArea = ({ refLink, onPressEnter }) => {
  const [state, setState] = useState({
    value: "",
    rows: 1,
    minRows: 1,
    maxRows: 3,
  });

  const onEnter = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      onPressEnter();
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
    <textarea
      ref={refLink}
      className="form-control textarea-autosize"
      aria-label="With textarea"
      rows={state.rows}
      style={{ resize: "none" }}
      placeholder="Message"
      onChange={handeChange}
      onKeyDown={(e) => onEnter(e)}
      autoFocus
    ></textarea>
  );
};

export default AutoSizeTextArea;

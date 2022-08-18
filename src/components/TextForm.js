import React, { useState } from "react";

export default function TextForm(props) {
  document.title = "TextUtils - Home";
  const [text, setText] = useState("Enter text hear");
  // setText("For change value of setText");
  const handleUpClick = () => {
    // console.log("Uppercase Button Click");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };
  const handleLoClick = () => {
    // console.log("Uppercase Button Click");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lovercase!", "success");
  };
  const handleClearClick = (event) => {
    let newText = "";
    setText(newText);
    props.showAlert("Texed Cleared!", "success");
  };
  const handleCopyClick = (event) => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "success");
  };

  const handleExtraSpace = (event) => {
    let newText = text.split([/[ ]+/]);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <div className="mb-3">
          <h1>{props.heading}</h1>

          <textarea
            className="form-control mb-3"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              color: props.mode === "dark" ? "white" : "#042743",
              backgroundColor: props.mode === "dark" ? "gray" : "white",
            }}
          ></textarea>
          <button className="btn btn-primary mx-1" onClick={handleUpClick}>
            Convert to Upercase
          </button>
          <button className="btn btn-primary mx-1" onClick={handleLoClick}>
            Convert to Lowercase
          </button>
          <button className="btn btn-primary mx-1" onClick={handleCopyClick}>
            Copy Text
          </button>
          <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>
            Remove Extra Spacing
          </button>
          <button className="btn btn-primary mx-1" onClick={handleClearClick}>
            Clear Text
          </button>
        </div>
      </div>
      <div
        className="container my-2"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to Read </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter somethig in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}

import React, { useState } from "react";
import "./contactform.css";
import handleFormSubmit from "./handleFormSubmit";

function Form() {
  const [inputText, setInputText] = useState("");
  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <form
      autoComplete="off"
      onSubmit={handleFormSubmit}
      action=""
      className="form"
    >
      <label>
        Name <br />
        <input
          required
          name="name"
          type="text"
          placeholder="your name or company"
        />
      </label>

      <label>
        Email <br />
        <input required name="email" type="email" placeholder="your email" />
      </label>

      <label>
        Title <br />
        <input
          required
          name="title"
          type="text"
          placeholder="title for the email"
        />
      </label>

      <label className="form__textareaContainer">
        <div className="form__textarea-label">
          Message
          <span>{500 - inputText.length} characters left</span>
        </div>
        <textarea
          onChange={handleChange}
          maxLength={500}
          required
          placeholder="message for the email"
          name="message"
          cols="30"
          rows="10"
        />
      </label>

      <button type="submit">send</button>
    </form>
  );
}

export default Form;

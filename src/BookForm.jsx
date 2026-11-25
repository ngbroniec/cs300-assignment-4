import { useState } from "react";

export default function BookForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [creator, setCreator] = useState("");
  const [titleError, setTitleError] = useState("");
  const [creatorError, setCreatorError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const newTitleError = title.trim() === "" ? "Please enter a title" : "";
    const newCreatorError =
      creator.trim() === "" ? "Please enter the author's name" : "";
    setTitleError(newTitleError);
    setCreatorError(newCreatorError);

    if (newTitleError || newCreatorError) {
      return;
    }

    onAdd({ title: title.trim(), creator: creator.trim() });
    setTitle("");
    setCreator("");
  }

  return (
    <form className="book-form" onSubmit={handleSubmit} noValidate>
      <h2>Add a book</h2>

      <div className="form-field">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          aria-invalid={titleError ? "true" : "false"}
          aria-describedby={titleError ? "title-error" : undefined}
        />
        {titleError ? (
          <p id="title-error" className="field-error">
            {titleError}
          </p>
        ) : null}
      </div>

      <div className="form-field">
        <label htmlFor="creator">Creator</label>
        <input
          id="creator"
          type="text"
          value={creator}
          onChange={(event) => setCreator(event.target.value)}
          aria-invalid={creatorError ? "true" : "false"}
          aria-describedby={creatorError ? "creator-error" : undefined}
        />
        {creatorError ? (
          <p id="creator-error" className="field-error">
            {creatorError}
          </p>
        ) : null}
      </div>

      <button type="submit">Add a Book!</button>
    </form>
  );
}
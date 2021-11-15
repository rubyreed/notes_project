import React from "react";

const Notes = (props) => {
  console.log(props.notes);
 
  const renderNotes = () => {
    return props.notes.map((note) => {
      return (
      <div style={{margin:"20px", border:'1px solid'}}>
        <a href={`/notes/${note.id}`} data-method="delete">Delete a Note</a>
        <h1>{note.title}</h1>
        <p>{note.description}</p>
      </div>
        );
    });
  };

  return (
    <div>
    <a href = "/notes/new">Add a Note</a>
    <p>Notes: {renderNotes()}</p>;
  </div>
  );
};

// export component
export default Notes;
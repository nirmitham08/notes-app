export default function NoteList({ notes, deleteNote }) {
  if (notes.length === 0) {
    return <p>No notes yet.</p>;
  }

  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>
          {note.text}
          <button onClick={() => deleteNote(note.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
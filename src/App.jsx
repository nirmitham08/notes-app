import { useState, useEffect } from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import "./App.css";

function NotesApp() {
  const { dark, toggleTheme } = useTheme();

  const [notes, setNotes] = useState(() => {
    return JSON.parse(localStorage.getItem("notes")) || [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
    document.title = `Notes (${notes.length})`;
  }, [notes]);

  function addNote(text) {
    setNotes([...notes, { id: Date.now(), text }]);
  }

  function deleteNote(id) {
    setNotes(notes.filter((note) => note.id !== id));
  }

  return (
    <div className={dark ? "app dark" : "app light"}>
      <h1>My Notes</h1>

      <button onClick={toggleTheme}>
        {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      <NoteForm addNote={addNote} />

      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <NotesApp />
    </ThemeProvider>
  );
}
const fs = require("fs");
const path = require("path");

function createNote(body, notesArray) {
  const newNote = body;
  notesArray.push(newNote);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes })
  );
  return newNote;
}

module.exports = {
  createNote,
};

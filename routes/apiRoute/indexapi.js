// GET API routes should read db.json file and return all saved notes as JSON
// POST API should recieve a new not save in request body and add it to the db.json file
const router = require("express").Router();
const { notes } = require("../../db/db");

const { notes, createNote, validateNotes } = require("../../lib/notes");

router.get("/notes", (req, res) => {
  let results = notes;
  if (req.query) {
    results = filterByQuery(req.query, results);
  }
  res.json(results);
});

router.post("/notes", (req, res) => {
  // set id based on what the next index of the array will be
  req.body.id = notes.length.toString();

  const notes = createNote(req.body, notes);
  res.json(notes);
});

module.exports = router;

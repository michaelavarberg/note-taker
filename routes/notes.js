const notes = require("express").Router();
const { uuid } = require("uuid");
const { readAndAppend, readFromFile } = require("../helpers/fsUtils");

//GET route
// notes.get("/", (req, res) =>
//   readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)))
// );

//POST route
// notes.post("/", (req, res) => {
//   const { title, content } = req.body;

//   if (title && content) {
//     const newNote = {
//       title,
//       content,
//       note_id: uuid(),
//     };

//     readAndAppend(newNote, "./db/db.json");

//     const response = {
//       state: "success",
//       body: newNote,
//     };

//     res.json(response);
//   } else {
//     res.json("Error in posting note.");
//   }
// });

module.exports = notes;

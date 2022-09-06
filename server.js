//imports
const express = require("express");
const { readFromFile, readAndAppend } = require("./helpers/fsUtils");
const path = require("path");
// const api = require("./routes/notes.js");
const uuid = require("./helpers/uuid");

const PORT = process.env.PORT || 3001;

const app = express();
//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use("/api", api);
app.use(express.static("public"));

//GET Route for notes page
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

//POST Route for api/notes
app.post("/api/notes", (req, res) => {
  const { title, text } = req.body;

  if (title && text) {
    const newNote = {
      title,
      text,
      note_id: uuid(),
    };

    readAndAppend(newNote, "./db/db.json");

    const response = {
      state: "success",
      body: newNote,
    };

    res.json(response);
  } else {
    res.json("Error in posting note.");
  }
});

//GET Route for api/notes
app.get("/api/notes", (req, res) =>
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)))
);

//GET Route for homepage
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

import express from "express";
const app = express();

app.listen(4321, () => console.log("listen to port 4321"));

// API-Dokumentation
// ---------------------------
// ## Kurse
// GET     /kurse          200
// GET     /kurse/:id      200
// POST    /kurse          201
// PUT     /kurse/:id      204
// DELETE  /kurse/:id      204

let kurse = [
    { kurse: "Web Development", id: 0 },
    { kurse: "Online Marketing", id: 1 },
    { kurse: "Backend", id: 2 },
    { kurse: "Python", id: 3 },
    { kurse: "API", id: 4 },
];

// ## Teilnehmer
// GET     /teilnehmer        200
// GET     /teilnehmer/:id    200
// POST    /teilnehmer        201
// PUT     /teilnehmer/:id    204
// DELETE  /teilnehmer/:id    204

let teilnehmer = [
    { teilnehmer: "Max", id: 0 },
    { teilnehmer: "Tobi", id: 1 },
    { teilnehmer: "Maya", id: 2 },
    { teilnehmer: "Tim", id: 3 },
    { teilnehmer: "Andy", id: 4 },
    ,
];
// ## Module/Inhalte
// GET     /module_inhalte        200
// GET     /module_inhalte/:id    200
// POST    /module_inhalte        201
// PUT     /module_inhalte/:id    204
// DELETE  /module_inhalte/:id    204
//
let module_inhalte = [
    { module_inhalte: "HTML/CSS", id: 0 },
    { module_inhalte: "JavaScript", id: 1 },
    { module_inhalte: "ReactJS", id: 2 },
    { module_inhalte: "NodeJS", id: 3 },
    { module_inhalte: "API", id: 4 },
];

// Main:
app.get("/", (req, res) => {
    res.json();
});
// Kurse(GET):
app.get("/kurse", (req, res) => {
    res.status(200).json(kurse);
});
// Kurse(GET/:id):
app.get("/kurse/:id", (req, res) => {
    const id = +req.params.id;
    res.json(kurse[id]);
});
// Kurse(POST):
app.post("/kurse", (req, res) => {
    kurse.push(kurse.length);
    res.json();
});

// Teilnehmer:
app.get("/teilnehmer", (req, res) => {
    res.json(teilnehmer);
});
// Module_Inhalte:
app.get("/module_inhalte", (req, res) => {
    res.json(module_inhalte);
});
//2
// ## Produkte
// GET     /Produkte                            200
// GET     /Produkte/:id                        200

// ## Kategorien
// GET     /kategorien                          200
// GET     /kategorien/:kategorieId/Produkte    200

// ## Benutzerkonten
// GET     /Benutzerkonten/:id                  200
// POST    /Benutzerkonten                      201
// PUT     /Benutzerkonten/:id                  204
// DELETE  /Benutzerkonten/:id                  204
//

// ## Bestellungen
// GET     /Bestellungen/:id                    200
// POST    /Bestellungen                        201
// PUT     /Bestellungen/:id                    204
// DELETE  /Bestellungen/:id                    204
//

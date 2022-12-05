import express from "express";
const app = express();

app.listen(4321, () => console.log("listen to port 4321"))

// API-Dokumentation
// ---------------------------
// ## Users
// POST    /users          201
// GET     /users          200
// GET     /users/:index   200
// PUT     /users/:index   204
// DELETE  /users/:index   204
//
// ## Notizen
// POST    /notizen        201
// GET     /notizen        200
// GET     /notizen/:index 200
// PUT     /notizen/:index 204
// DELETE  /notizen/:index 204
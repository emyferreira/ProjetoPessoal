var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.post("/curtir1", function (req, res) {
    usuarioController.curtir1(req, res);
});

router.post("/curtir2", function (req, res) {
    usuarioController.curtir2(req, res);
});

router.post("/curtir3", function (req, res) {
    usuarioController.curtir3(req, res);
});

module.exports = router;
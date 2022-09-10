const express = require("express");

const {
    addRow, Allrows , updateRow, deleteRow, sendrow
} = require('./controller');
const router= express.Router();

router.route("/").post(addRow);
router.route("/allrows").get(Allrows);
router.route("/updaterow/:id").put(updateRow);
router.route("/deleterow/:id").delete(deleteRow);
router.route("/send").post(sendrow)



module.exports = router;

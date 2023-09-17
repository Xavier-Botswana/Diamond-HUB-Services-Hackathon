const express = require('express');
const { db, admin } = require('../firebaseAdmin');

const router = express.Router();

router.post("/register", async (req, res, next) => {
  try {
    const newDiamond = {
      ...req.body,
      createdAt: admin.firestore.Timestamp.fromDate(new Date()),
    };
    const diamond = await db.collection("diamonds").add(newDiamond);
    await diamond.update({id: diamond.id});
    return res.status(201).json({
      message: `Diamond ${diamond.id} registered successfully`,
    });
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const document = db.collection("diamonds").doc(req.params.id);
    await document.update(req.body);
    return res.json({message: "Diamond information updated successfully"});
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const document = db.collection("diamonds").doc(req.params.id);
    await document.delete();
    return res.json({message: "Diamond registration deleted successfully"});
  } catch (error) {
    next(error);
  }
});

module.exports = router;

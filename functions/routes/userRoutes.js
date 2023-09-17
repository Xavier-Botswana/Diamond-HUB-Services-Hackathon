const express = require('express');
const { db, admin } = require('../firebaseAdmin');

const router = express.Router();

router.get("/hello", (req, res) => {
  res.send("Hello from Xavier Africa Technologies Pty Ltd!");
});

router.post("/login", async (req, res, next) => {
  try {
    if (!req.body.email) {
      return res.status(400).json({error: "Email is required"});
    }
    const user = await admin.auth().getUserByEmail(req.body.email);
    const token = await admin.auth().createCustomToken(user.uid);
    return res.json({token});
  } catch (error) {
    next(error);
  }
});

router.post("/signup", async (req, res, next) => {
  try {
    if (!req.body.email || !req.body.password) {
      return res.status(400).json({error: "Email and password are required"});
    }
    const user = await admin.auth().createUser({
      email: req.body.email,
      password: req.body.password,
    });
    const userRef = db.collection("users").doc(user.uid);
    await userRef.set({
      ...req.body,
      uid: user.uid,
      role: "user",
    });
    return res.json(user);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

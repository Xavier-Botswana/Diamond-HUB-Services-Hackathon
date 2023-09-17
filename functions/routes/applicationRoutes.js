const express = require('express');
const { db, admin } = require('../firebaseAdmin');
const getDocument = require('../utils/getDocument');

const router = express.Router();

router.get("/:id", async (req, res, next) => {
  try {
    const application = await getDocument("applications", req.params.id);
    return res.json(application);
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const snapshot = await db.collection("applications").get();
    const applications = [];
    snapshot.forEach((doc) => {
      applications.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    return res.json(applications);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newApplication = {
      ...req.body,
      createdAt: admin.firestore.Timestamp.fromDate(new Date()),
    };
    const application = await db.collection("applications").add(newApplication);
    await application.update({id: application.id});
    return res.status(201).json({
      message: `Application ${application.id} created successfully`,
    });
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const document = db.collection("applications").doc(req.params.id);
    await document.update(req.body);
    return res.json({message: "Application updated successfully"});
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const document = db.collection("applications").doc(req.params.id);
    await document.delete();
    return res.json({message: "Application deleted successfully"});
  } catch (error) {
    next(error);
  }
});

module.exports = router;

const express = require("express");
const {db, admin} = require("../firebaseAdmin");
const getDocument = require("../utils/getDocument");
const routerFunction = express.Router;
const router = routerFunction();

router.get("/:id", async (req, res, next) => {
  try {
    const application = await getDocument("licenses", req.params.id);
    return res.json(application);
  } catch (error) {
    next(error);
  }
});

router.post("/application", async (req, res, next) => {
  try {
    const newLicense = {
      ...req.body,
      createdAt: admin.firestore.Timestamp.fromDate(new Date()),
    };
    const license = await db.collection("licenses").add(newLicense);
    await license.update({id: license.id});
    return res.status(201).json({
      message: `License application ${license.id} successful`,
    });
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const document = db.collection("licenses").doc(req.params.id);
    await document.update(req.body);
    return res.json({message: "License information updated successfully"});
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const document = db.collection("licenses").doc(req.params.id);
    await document.delete();
    return res.json({message: "License application deleted successfully"});
  } catch (error) {
    next(error);
  }
});

module.exports = router;

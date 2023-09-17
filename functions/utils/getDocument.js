const {db} = require("../firebaseAdmin");

/**
 * Retrieves a document from a collection by ID.
 * @param {string} collection - The name of the collection.
 * @param {string} id - The ID of the document to retrieve.
 * @throws {Error} If the document is not found.
 * @return {Promise<Object>} The retrieved document.
 */
async function getDocument(collection, id) {
  const doc = await db.collection(collection).doc(id).get();
  if (!doc.exists) {
    throw new Error("Document not found");
  }
  return doc.data();
}

module.exports = getDocument;

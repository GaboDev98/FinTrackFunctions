/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onRequest } = require("firebase-functions/v2/https");
const admin = require("firebase-admin");
const { createEntry } = require("./createEntry");
const { readEntry } = require("./readEntry");
const { updateEntry } = require("./updateEntry");
const { deleteEntry } = require("./deleteEntry");
const { getUserSummary } = require("./getUserSummary");

admin.initializeApp();

exports.create = onRequest(createEntry);
exports.read = onRequest(readEntry);
exports.update = onRequest(updateEntry);
exports.delete = onRequest(deleteEntry);
exports.getUserSummary = onRequest(getUserSummary);
const logger = require("firebase-functions/logger");
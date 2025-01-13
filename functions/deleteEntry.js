const admin = require("firebase-admin");

exports.deleteEntry = async (req, res) => {
    const id = req.query.id;
    try {
        await admin.database().ref(`/entries/${id}`).remove();
        res.status(200).send({ id });
    } catch (error) {
        res.status(500).send(error);
    }
};
const admin = require("firebase-admin");

exports.updateEntry = async (req, res) => {
    const id = req.query.id;
    const data = req.body;
    try {
        await admin.database().ref(`/entries/${id}`).update(data);
        res.status(200).send({ id });
    } catch (error) {
        res.status(500).send(error);
    }
};
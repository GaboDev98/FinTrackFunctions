const admin = require("firebase-admin");

exports.readEntry = async (req, res) => {
    const id = req.query.id;
    try {
        const snapshot = await admin.database().ref(`/entries/${id}`).once('value');
        const data = snapshot.val();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    }
};
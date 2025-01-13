const admin = require("firebase-admin");

exports.createEntry = async (req, res) => {
    const data = req.body;
    try {
        const ref = await admin.database().ref('/entries').push(data);
        res.status(201).send({ id: ref.key });
    } catch (error) {
        res.status(500).send(error);
    }
};
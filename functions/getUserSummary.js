const admin = require("firebase-admin");

exports.getUserSummary = async (req, res) => {
    const userId = req.query.userId;
    try {
        const snapshot = await admin.database().ref('/entries').orderByChild('userId').equalTo(userId).once('value');
        const entries = snapshot.val();
        
        let totalBalance = 0;
        let totalIncome = 0;
        let totalExpenses = 0;

        if (entries) {
            for (let key in entries) {
                const entry = entries[key];
                const amount = parseFloat(entry.amount);
                if (entry.type === 'Income') {
                    totalIncome += amount;
                } else if (entry.type === 'Expense') {
                    totalExpenses += amount;
                }
            }
        }

        totalBalance = totalIncome - totalExpenses;

        res.status(200).send({
            totalBalance,
            totalIncome,
            totalExpenses
        });
    } catch (error) {
        res.status(500).send(error);
    }
};
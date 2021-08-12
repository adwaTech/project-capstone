module.exports = async (req, res) => {
    if (req.body.type)
        switch (req.body.type) {
            case 'all':
                return null;
            case 'won':
                return null;
            case 'lost':
                return null;
        }
}
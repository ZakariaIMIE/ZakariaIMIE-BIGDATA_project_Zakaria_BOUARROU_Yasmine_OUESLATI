const jwt = require('jsonwebtoken');
const expressSecret = 'Strasbourg123!@@@';

//token verification
function authenticateToken_middleware(req, res, next) {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ message: 'No token provided' });
    }

    // Split the authHeader to get token part only if it starts with Bearer
    const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7, authHeader.length) : null;
    if (!token) {
        return res.status(401).json({ message: 'Bearer token not provided' });
    }

    jwt.verify(token, expressSecret, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
        }

        req.user = user;
        next();
    });
}


module.exports = authenticateToken_middleware;
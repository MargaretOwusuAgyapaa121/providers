const jwt = require ('jsonwebtoken');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if(!authHeader)
        return res.status(401).json({ error: 'No token provided' });

    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach user info to request object
        next(); // Call the next middleware or route handler
    } catch (err) {
        return res.status(401).json({ error: 'Invalid token' });
    }
};
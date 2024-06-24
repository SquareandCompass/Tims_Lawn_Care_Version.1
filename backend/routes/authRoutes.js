const jwt = require('jsonwebtoken');

router.post('/login', async (req, res) => { // Verify user credentials here
  
  // If credentials are valid:
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  res.json({ token });
});
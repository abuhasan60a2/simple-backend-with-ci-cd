const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Test API is working',
    data: {
      name: 'Express MongoDB Backend',
      version: '1.0.0'
    }
  });
});

module.exports = router;
const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
    res.send('api works');
});

router.get('/posts', (req, res) => {
    res.send('{"name":"srinuss"}');
});

module.exports = router;
const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("../public/index.html");
});

router.get("/exercise", (req, res) => {
    res.send("../public/exercise.html");
})

router.get("/stats", (req, res) => {
    res.send("../public/stats.html");
})

module.exports = router;
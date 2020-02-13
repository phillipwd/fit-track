const router = require("express").Router();
const Workout = require("../models");

router.get("/api/workouts", (req,res) => {
    Workout.find()
    .then(dbWorkouts => {
        res.json(dbWorkouts);
    })
    .catch(err => {
        res.json (err);
    });
});

router.post("/api/workouts", (req, res) => {
    Workout.create({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err=>{
        res.json(err);
    });
});

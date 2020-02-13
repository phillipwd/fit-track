const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: Date,
    exercises:[
        {
            type: {
                type: String,
                required: "Cardio or resistance exercise?",
            },
            name: {
                type: String,
                required: "Enter the exercise name."
            },
            duration: {
                type: Number,
                required: "How many minutes?"
            },
            weight: Number,
            sets: Number,
            reps: Number,
            distance: Number 
        }
    ]
});

const Workout =  mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
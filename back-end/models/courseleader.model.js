module.exports = mongoose => {
    var CourseLeader = mongoose.model(
        "courseleader",
        mongoose.Schema(
            {
                userRef: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "User",
                    required: true
                },
                tutorRef: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref:"Tutor",
                    required: true
                }
            }
        )
    );
    return CourseLeader;
};
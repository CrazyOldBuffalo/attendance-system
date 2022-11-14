module.exports = mongoose => {
    var CourseLeader = mongoose.model(
        "courseleader",
        mongoose.Schema(
            {
                moduleLeaderRef: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref:"ModuleLeader",
                    required: true
                },
            }
        )
    );
    return CourseLeader;
};
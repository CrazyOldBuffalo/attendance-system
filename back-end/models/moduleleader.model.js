module.exports = mongoose => {
    var ModuleLeader = mongoose.model(
        "moduleLeader",
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
    return ModuleLeader;
};
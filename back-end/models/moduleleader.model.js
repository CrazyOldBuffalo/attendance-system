module.exports = mongoose => {
    var ModuleLeader = mongoose.model(
        "moduleLeader",
        mongoose.Schema(
            {
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
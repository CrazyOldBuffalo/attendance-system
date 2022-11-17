module.exports = mongoose => {
    var Tutor = mongoose.model(
        "tutor",
        mongoose.Schema(
            {
                tutorId: {
                    type: String,
                    required: true,
                    unique: true
                },
                userRef: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "User",
                    required: true
                },
                modules: [{
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Module"
                }]
            }
        )
    );
    return Tutor;
};
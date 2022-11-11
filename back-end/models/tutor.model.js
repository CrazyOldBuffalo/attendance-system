module.exports = mongoose => {
    var Tutor = mongoose.model(
        "tutor",
        mongoose.Schema(
            {
                user: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "User"
                },
                canEditModule: {
                    type: Boolean,
                    required: true
                }
            }
        )
    );
    return Tutor;
};
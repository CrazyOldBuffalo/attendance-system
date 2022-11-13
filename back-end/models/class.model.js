module.exports = mongoose => {
    var Class = mongoose.model(
        "class",
        mongoose.Schema(
            {
                classID: {
                    type: String,
                    required: true,
                    unique: true
                },
                className: {
                    type: String,
                    required: true,
                },
                students: [{
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Student",
                    required: true
                }],
                tutorRef: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Tutor",
                    required: true
                },
                register: [{
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Register",
                    required: true
                }]
            }
        )
    );
    return Class;
};
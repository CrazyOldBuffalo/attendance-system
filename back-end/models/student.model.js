module.exports = mongoose => {
    var Student = mongoose.model(
        "student",
        mongoose.Schema(
            {
                studentID: {
                    type: String,
                    unique: true
                },
                user: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "User"
                },
            }
        )
    );
    return Student;
};
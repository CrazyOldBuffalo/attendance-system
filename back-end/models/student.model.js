module.exports = mongoose => {
    var Student = mongoose.model(
        "student",
        mongoose.Schema(
            {
                studentID: {
                    type: String,
                    unique: true
                },
                course: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Course"
                },
                academicAdvisor: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "AcademicAdvisor"
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
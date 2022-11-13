const Student = require("./student.model");

module.exports = mongoose => {
    var AcademicAdvisor = mongoose.model(
        "academicAdvisor",
        mongoose.Schema(
            {
                user: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "User"
                },
                students: [{
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Student"
                }]
            }
        )
    );
    return AcademicAdvisor;
};
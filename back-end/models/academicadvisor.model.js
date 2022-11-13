module.exports = mongoose => {
    var AcademicAdvisor = mongoose.model(
        "academicAdvisor",
        mongoose.Schema(
            {
                userRef: {
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
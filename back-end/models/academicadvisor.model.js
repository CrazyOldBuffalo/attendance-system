module.exports = mongoose => {
    var AcademicAdvisor = mongoose.model(
        "academicAdvisor",
        mongoose.Schema(
            {
                user: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "User"
                },
            }
        )
    );
    return AcademicAdvisor;
};
module.exports = mongoose => {
    var AcademicAdvisor = mongoose.model(
        "academicAdvisor",
        mongoose.Schema(
            {
                dateTime: {
                    type: Date,
                    required: true,
                },
                attendanceList: [{
                    students: {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: "Student",
                        unique: true
                    },
                    attendanceStatus: {
                        type: Boolean,
                    }
                }]
            }
        )
    );
    return AcademicAdvisor;
};
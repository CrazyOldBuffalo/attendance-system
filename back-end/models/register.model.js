module.exports = mongoose => {
    var Register = mongoose.model(
        "register",
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
    return Register;
};
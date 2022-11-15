module.exports = mongoose => {
    var Course = mongoose.model(
        "course",
        mongoose.Schema(
            {
                courseName: {
                    type: String,
                    required: true,
                },
                courseID: {
                    type: String,
                    required: true,
                    unique: true
                },
                students: [{
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Student"
                }],
                courseLeader: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "CourseLeader",
                    required: true
                },
                modules: [{
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Modules",
                    required: true
                }]
            }
        )
    );
    return Course;
};
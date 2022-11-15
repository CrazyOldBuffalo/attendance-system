module.exports = mongoose => {
    var Module = mongoose.model(
        "module",
        mongoose.Schema(
            {
                moduleName: {
                    type: String,
                    required: true,
                },
                moduleID: {
                    type: String,
                    required: true,
                    unique: true
                },
                students: [{
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Student"
                }],
                moduleLeader: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "ModuleLeader",
                    required: true
                },
                classes: [{
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Class",
                    required: true
                }],
                tutors: [{
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Tutor",
                    required: true
                }]
            }
        )
    );
    return Module;
};
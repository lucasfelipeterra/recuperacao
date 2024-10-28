import db from "../config/db.js";

const exploreSchema = new db.Schema({
    name: {
        type: String,
        required: true,
    },
    fieldOfStudy: {
        type: String,
        required: true,
    },
    ExpeditionParticipated:{
        type: Number,
        required: true
    }
});

const explore = db.model("explore", exploreSchema);

export default explore;


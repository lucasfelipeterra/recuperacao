import db from '../config/db.js';

const expeditionSchema = new db.Schema({
    location: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    participants_id: {
        type: db.Schema.Types.ObjectId,
        ref: "workshop",
        required: true,
    },
    specieFound_id: {
        type: db.Schema.Types.ObjectId,
        ref: "workshop",
        required: true,
},
});

const expedition = db.model('expedition', expeditionSchema);

export default expedition;


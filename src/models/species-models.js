import db from "../config/db.js";

const speciesSchema = new db.Schema({
    name: {
        type: String,
        required: true,
    },
    discoveryLocation: {
        type: String,
        required: true,
    },
    rarity: {
        type: Number,
        required: true,
    },
    documented: {
        type: Boolean,
        default: false,
    },
});

const species = db.model("species", speciesSchema);

export default species;

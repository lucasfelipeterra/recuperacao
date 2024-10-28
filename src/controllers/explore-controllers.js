import explore from "../models/explore-models.js";

export const store = async (req, res) => {
    try {
        const content = await explore.create(req.body);
        res.status(201).json(content);
    } catch (error) {
        res.status(400).send(error);
    }
};
export const index = async (req, res) => {
    try {
        const content = await explore.find(req.query).exec();
        res.json(content);
    } catch (error) {
        res.status(400).send(error);
    }
};
export const show = async (req, res) => {
    try {
        const content = await explore.findById(req.params.id).exec();
        res.json(content);
    } catch (error) {
        res.status(400).send(error);
    }
};
export const update = async (req, res) => {
    try {
        const content = await explore.findByIdAndUpdate(req.params.id, req.body).exec();
        res.json(content);
    } catch (error) {
        res.status(400).send(error);
    }
};
export const destroy = async (req, res) => {
    try {
        const content = await explore.findByIdAndDelete(req.params.id).exec();
        res.json(content);
    } catch (error) {
        res.status(400).send(error);
    }
};
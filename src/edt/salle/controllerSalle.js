const pool = require("../../../db");
const queries = require('./queriesSalle');

const getSalles = (req, res) => {
    pool.query(queries.getSalle, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getSallesById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getSalleById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const addSalle = (req, res) => {
    const {num_salle, capacite, capacite_pc, projecteur, vga, hdmi} = req.body;
    
    //check salle
    pool.query(queries.checkSalle, [num_salle], (error,results) => {
        if (results.rows.length){
            res.send("Cette salle existe déja");
        }
    });
    
    //ajoute salle
    pool.query(queries.addSalle, [num_salle, capacite, capacite_pc, projecteur, vga, hdmi], (error, results) => {
        if (error) throw error;
        res.status(201).send("Salle créée");
    });
}; 

const updateSalle = (req, res) => {
    const id = parseInt(req.params.id);
    const {num_salle, capacite, capacite_pc, projecteur, vga, hdmi} = req.body;

    pool.query(queries.getSalleById, [id], (error, results) => {
        const noSalleFound = !results.rows.length;
        if (noSalleFound){
            res.send("Salle n'est pas dans la DB");
        }
        else (pool.query(queries.updateSalle, [num_salle, capacite, capacite_pc, projecteur, vga, hdmi, id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Salle bien modifié");
        }));
    });
}

const removeSalle = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getSalleById, [id], (error, results) => {
        const noSalleFound = !results.rows.length;
        if (noSalleFound){
            res.send("Salle n'est pas dans la DB");
        }

        pool.query(queries.removeSalle, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Salle bien supprimé");
        });
    });
};

module.exports = {
    getSalles,
    getSallesById,
    addSalle,
    updateSalle,
    removeSalle,
};
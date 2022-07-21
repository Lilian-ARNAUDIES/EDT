const pool = require("../../../db");
const queries = require('./queriesMatiere');

const getMatieres = (req, res) => {
    pool.query(queries.getMatiere, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getMatieresById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getMatiereById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const addMatiere = (err, req, res) => {
    const {libelle, codeapogee} = req.body;
    
    //check Matiere
    pool.query(queries.checkMatiere, [libelle], (error,results) => {
        if (results.rows.length){
            res.send("Cette Matiere existe déja");
        }
    });

    //ajoute Matiere
    pool.query(queries.addMatiere, [libelle, codeapogee], (error, results) => {
        if (error) throw error;
        res.status(201).send("Matiere créée");
    });
}; 

const updateMatiere = (req, res) => {
    const id = parseInt(req.params.id);
    const {libelle, codeapogee} = req.body;

    pool.query(queries.getMatiereById, [id], (error, results) => {
        const noMatiereFound = !results.rows.length;
        if (noMatiereFound){
            res.send("Matiere n'est pas dans la DB");
        }
        else (pool.query(queries.updateMatiere, [libelle, codeapogee, id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Matiere bien modifiée");
        }));
    });
}

const removeMatiere = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getMatiereById, [id], (error, results) => {
        const noMatiereFound = !results.rows.length;
        if (noMatiereFound){
            res.send("Matiere n'est pas dans la DB");
        }

        pool.query(queries.removeMatiere, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Matiere bien supprimé");
        });
    });
};

module.exports = {
    getMatieres,
    getMatieresById,
    addMatiere,
    updateMatiere,
    removeMatiere,
};
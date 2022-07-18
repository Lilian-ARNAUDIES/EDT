const pool = require("../../../db");
const queries = require('./queriesCours');

const getCours = (req, res) => {
    pool.query(queries.getCours, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getCoursById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getCoursById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const addCours = (req, res) => {
    const {id_ens, id_matiere, id_salle, id_groupe, heure_debut, heure_fin, id_cours} = req.body;
    //check salle, groupe, heure, ens
    pool.query(queries.checkEns, [id_ens,heure_debut,heure_fin]), (error,results) => {
        if (results.rows.length){
            res.send("Enseignant non disponible");
        }
    }
    pool.query(queries.addCours, [id_ens, id_matiere, id_salle, id_groupe, heure_debut, heure_fin, id_cours], (error, results) => {
        if (error) throw error;
        res.status(201).send("Cours créé");
    });
};

const removeCours = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getCoursById, [id], (error, results) => {
        const noCoursFound = !results.rows.length;
        if (noCoursFound){
            res.send("Cours n'est pas dans la DB");
        }

        pool.query(queries.removeCours, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Cours bien supprimé");
        });
    });
};

module.exports = {
    getCours,
    getCoursById,
    addCours,
    removeCours,
};
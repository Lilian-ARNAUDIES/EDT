const pool = require("../../../db");
const queries = require('./queriesEns');

const getEns = (req, res) => {
    pool.query(queries.getEns, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getEnsById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getEnsById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const addEns = (req, res) => {
    const {id_ens, nom, prenom, tel, email, initiale, departement, service} = req.body;
    
    //check Ens
    pool.query(queries.checkEns, [id_ens]), (error,results) => {
        if (results.rows.length){
            res.send("Cette Ens existe déja");
        }
    }

    //ajoute Ens
    pool.query(queries.addEns, [id_ens, nom, prenom, tel, email, initiale, departement, service], (error, results) => {
        if (error) throw error;
        res.status(201).send("Ens créée");
    });
}; 

const updateEns = (req, res) => {
    const id = parseInt(req.params.id);
    const {id_ens, nom, prenom, tel, email, initiale, departement, service} = req.body;

    pool.query(queries.getEnsById, [id], (error, results) => {
        const noEnsFound = !results.rows.length;
        if (noEnsFound){
            res.send("Enseignant n'est pas dans la DB");
        }

        pool.query(queries.updateEns, [id_ens, nom, prenom, tel, email, initiale, departement, service, id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Enseignant bien modifié");
        });
    });
}

const removeEns = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.removeEns, [id], (error, results) => {
        const noEnsFound = !results;
        if (noEnsFound){
            res.send("Enseignant n'est pas dans la DB");
        }

        pool.query(queries.removeEns, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Enseignant bien supprimé");
        });
    });
};

module.exports = {
    getEns,
    getEnsById,
    addEns,
    updateEns,
    removeEns,
};
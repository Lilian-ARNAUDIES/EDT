const pool = require("../../../db");
const queries = require('./queriesGroupe');

const getGroupes = (req, res) => {
    pool.query(queries.getGroupe, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getGroupesById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getGroupeById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const addGroupe = (req, res) => {
    const {nom_groupe, capacite} = req.body;
    
    //check Groupe
    pool.query(queries.checkGroupe, [nom_groupe], (error,results) => {
        if (results.rows.length){
            res.send("Cette Groupe existe déja");
        }
    });

    //ajoute Groupe
    pool.query(queries.addGroupe, [nom_groupe, capacite], (error, results) => {
        if (error) throw error;
        res.status(201).send("Groupe créé");
    });
}; 

const updateGroupe = (req, res) => {
    const id = parseInt(req.params.id);
    const {nom_groupe, capacite} = req.body;

    pool.query(queries.getGroupeById, [id], (error, results) => {
        const noGroupeFound = !results.rows.length;
        if (noGroupeFound){
            res.send("Groupe n'est pas dans la DB");
        }
        else (pool.query(queries.updateGroupe, [nom_groupe, capacite, id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Groupe bien modifié");
        }));
    });
}

const removeGroupe = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getGroupeById, [id], (error, results) => {
        const noGroupeFound = !results.rows.length;
        if (noGroupeFound){
            res.send("Groupe n'est pas dans la DB");
        }

        pool.query(queries.removeGroupe, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Groupe bien supprimé");
        });
    });
};

module.exports = {
    getGroupes,
    getGroupesById,
    addGroupe,
    updateGroupe,
    removeGroupe,
};
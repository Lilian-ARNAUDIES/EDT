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
    const {num_Groupe, capacite, capacite_pc, projecteur, vga, hdmi} = req.body;
    
    //check Groupe
    pool.query(queries.checkGroupe, [num_Groupe]), (error,results) => {
        if (results.rows.length){
            res.send("Cette Groupe existe déja");
        }
    }

    //ajoute Groupe
    pool.query(queries.addGroupe, [num_Groupe, capacite, capacite_pc, projecteur, vga, hdmi], (error, results) => {
        if (error) throw error;
        res.status(201).send("Groupe créée");
    });
}; 

const updateGroupe = (req, res) => {
    const id = parseInt(req.params.id);
    const {num_Groupe, capacite, capacite_pc, projecteur, vga, hdmi} = req.body;

    pool.query(queries.getGroupeById, [id], (error, results) => {
        const noGroupeFound = !results.rows.length;
        if (noGroupeFound){
            res.send("Groupe n'est pas dans la DB");
        }
        else (pool.query(queries.updateGroupe, [num_Groupe, capacite, capacite_pc, projecteur, vga, hdmi, id], (error, results) => {
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
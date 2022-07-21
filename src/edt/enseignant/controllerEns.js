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
        
    // pool.query(queries.getEnsById, [id], (error, results) => {
    //     if (error) throw error;
    //     res.status(200).json(results.rows);
    // });
};

const addEns = (req, res) => {
    const {nom, prenom, tel, email, initiale, departement} = req.body;
    
    //check Ens
    pool.query(queries.checkEns, [nom, prenom], (error,results) => {
        if (results.rows.length){
            res.send("Cette Ens existe déja");
        }
    });

    //ajoute Ens
    pool.query(queries.addEns, [nom, prenom, tel, email, initiale, departement], (error, results) => {
        if (error) throw error;
        res.status(201).send("Ens créé");
    });
}; 

const updateEns = (req, res) => {
    const id = parseInt(req.params.id);
    const {nom, prenom, tel, email, initiale, departement} = req.body;

    pool.query(queries.getEnsById, [id], (error, results) => {
        const noEnsFound = !results.rows.length;
        if (noEnsFound){
            res.send("Enseignant n'est pas dans la DB");
        }

        pool.query(queries.updateEns, [nom, prenom, tel, email, initiale, departement, id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Enseignant bien modifié");
        });
    });
}

const removeEns = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getEnsById, [id], (error, results) => {
        const noEnsFound = !results.rows.length;
        if (noEnsFound){
            res.send("Enseignant n'est pas dans la DB");
        }

        pool.query(queries.removeEns, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Enseignant bien supprimé");
        });
    });
};

const getService = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getEnsById, [id], (error, results) => {
        const noEnsFound = !results.rows.length;
        if (noEnsFound){
            res.send("Enseignant n'est pas dans la DB");
        }

        else (pool.query(queries.getServiceByEns, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send(results);
        }));
    });
};

module.exports = {
    getEns,
    getEnsById,
    addEns,
    updateEns,
    removeEns,
    getService,
};
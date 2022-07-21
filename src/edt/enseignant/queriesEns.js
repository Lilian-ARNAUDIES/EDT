var str="\"EDT\"";

const getEns = "select * from " + str + ".enseignants";
const getEnsById = "select * from " + str + ".enseignants where id_ens=$1";
const checkEns = "select * from " + str + ".enseignants where nom=$1 and prenom=$2";
const addEns = "insert into " + str + ".enseignants (id_ens, nom, prenom, tel, email, initiale, titulaire, departement) values ($1, $2, $3, $4, $5, $6, $7, $8)";
const updateEns = "update " + str +".enseignants set nom=$1, prenom=$2, tel=$3, email=$4, initiale=$5, titulaire=$6, departement=$7 where id_ens=$8";
const removeEns = "delete from " + str + ".enseignants where id_ens = $1";
const getServiceByEns = "select sum(extract(epoch from (heure_fin - heure_debut)/3600)) as serviceTotal from " + str + ".Cours where id_ens=$1";


module.exports = {
    getEns,
    getEnsById,
    checkEns,
    addEns,
    updateEns,
    removeEns,
    getServiceByEns
};
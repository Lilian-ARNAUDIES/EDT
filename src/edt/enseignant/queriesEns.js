var str="\"EDT\"";

const getEns = "select * from " + str + ".enseigants";
const getEnsById = "select * from " + str + ".enseigants where id_ens=$1";
const checkEns = "select s from " + str + ".enseigants s where s.num_ens=$1";
const addEns = "insert into " + str + ".enseigants (id_ens, nom, prenom, tel, email, initiale, titulaire, departement, service) values ($1, $2, $3, $4, $5, $6, $7, $8, $9)";
const updateEns = "update " + str +".enseigants set nom=$1, prenom=$2, tel=$3, email=$4, initiale=$5, titulaire=$6, departement=$7, service=$8 where id_ens=$9";
const removeEns = "delete from " + str + ".enseigants where id_ens = $1";

module.exports = {
    getEns,
    getEnsById,
    checkEns,
    addEns,
    updateEns,
    removeEns,
};
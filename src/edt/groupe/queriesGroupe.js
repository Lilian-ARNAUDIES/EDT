var str="\"EDT\"";

const getGroupe = "select * from " + str + ".Groupes";
const getGroupeById = "select * from " + str + ".Groupes where id_groupe=$1";
const checkGroupe = "select * from " + str + ".Groupes where nom_groupe=$1";
const addGroupe = "insert into " + str + ".Groupes (nom_groupe, capacite) values ($1, $2)";
const updateGroupe = "update " + str +".Groupes set nom_groupe=$1, capacite=$2 where id_groupe=$3";
const removeGroupe = "delete from " + str + ".Groupes where id_Groupe = $1";

module.exports = {
    getGroupe,
    getGroupeById,
    checkGroupe,
    addGroupe,
    updateGroupe,
    removeGroupe,
};
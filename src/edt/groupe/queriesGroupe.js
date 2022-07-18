var str="\"EDT\"";

const getGroupe = "select * from " + str + ".Groupes";
const getGroupeById = "select * from " + str + ".Groupes where id_Groupe=$1";
const checkGroupe = "select s from " + str + ".Groupes s where s.num_Groupe=$1";
const addGroupe = "insert into " + str + ".Groupes (num_Groupe, capacite, capacite_pc, projecteur, vga, hdmi) values ($1, $2, $3, $4, $5, $6)";
const updateGroupe = "update " + str +".Groupes set num_Groupe=$1, capacite=$2,capacite_pc=$3, projecteur=$4, vga=$5, hdmi=$6 where id_Groupe=$7";
const removeGroupe = "delete from " + str + ".Groupes where id_Groupe = $1";

module.exports = {
    getGroupe,
    getGroupeById,
    checkGroupe,
    addGroupe,
    updateGroupe,
    removeGroupe,
};
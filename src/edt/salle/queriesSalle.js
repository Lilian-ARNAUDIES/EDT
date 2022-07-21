var str="\"EDT\"";

const getSalle = "select * from " + str + ".salles";
const getSalleById = "select * from " + str + ".salles where id_salle=$1";
const checkSalle = "select * from " + str + ".salles where num_salle=$1";
const addSalle = "insert into " + str + ".salles (num_salle, capacite, capacite_pc, projecteur, vga, hdmi) values ($1, $2, $3, $4, $5, $6)";
const updateSalle = "update " + str +".salles set num_salle=$1, capacite=$2,capacite_pc=$3, projecteur=$4, vga=$5, hdmi=$6 where id_salle=$7";
const removeSalle = "delete from " + str + ".salles where id_salle = $1";

module.exports = {
    getSalle,
    getSalleById,
    checkSalle,
    addSalle,
    updateSalle,
    removeSalle,
};
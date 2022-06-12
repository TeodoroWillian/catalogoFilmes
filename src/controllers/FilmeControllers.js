const Filme = require("../models/Filmes");
let message = "";

const getAll = async (req, res) => {
    try{
        const filmes = await Filme.findAll();
        res.render("index",{
            filmes,
            filmesPut: null,
            filmesDel: null,
            message,
        });
    }catch(err){
        res.status(500).send({err: err.message});
    };
};

const getById = async (re,res) => {
    try{
        const filme = await Filme.findByPk(req.params.id);
        res.render("detalhes",{
            filme
        });
    } catch(err){
        res.status(500).send({err: err.message});
    };

}

module.exports = {
    getAll,
    getById,
} 
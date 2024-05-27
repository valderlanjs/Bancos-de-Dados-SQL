const Planet = require ('../models/Planet');
const Satelite = require ('../models/Satelitie');

module.exports = {
    async store(req, res) {
        const { planetId } = req.params;
        const {name, serial_number} = req.body;

        const planet = await Planet.findByPk(planetId);

        if (!planet) {
            res.send('Este planeta não existe!');
        };

        const satelite = await Satelite.create({name, serial_number, planetId});  
        return res.json(satelite);
    },

    async index (req, res) {
        const {planetId} = await req.params;

        if(!planetId) {
            return res.send('Planeta não encontrado!');
        }

        const planet = await Planet.findByPk(planetId, {
            include: Satelite,
        });

        return res.json(planet);
    }
}
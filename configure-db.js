const Sequelize = require("sequelize");

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
});

sequelize.authenticate()
    .then(() => {
        console.log("Conexión a la base de datos establecida");
    })
    .error((error) => {
        console.error(error);
    });

const Employees = require("./models/employees")(sequelize);
const media_types = require("./models/media_types")(sequelize);
const playlists = require("./models/playlists")(sequelize);
const playlist_track = require("./models/playlist_track")(sequelize);
const artists = require("./models/artists")(sequelize);
const tracks = require("./models/tracks")(sequelize);
const invoices = require("./models/invoices")(sequelize);
const invoice_items = require("./models/invoice_items")(sequelize);
const albums = require("./models/albums")(sequelize);
const customers = require("./models/customers")(sequelize);
const Genres = require("./models/genres")(sequelize);

//hasOne, belongsTo, hasMany, belongsToMany

//  media_types.hasMany(tracks, {foreignKey:'TrackId', as:"Tracks"});
// Usuario.belongsTo(Country, {foreignKey: 'countryId'});

sequelize.sync({ force: false });

// Country.findByPk(1)
//     .then(country => {
//         country.getUsers()
//             .then(usuarios => {
//                 //console.log(usuarios);
//                 const user = usuarios[0];
//                 user.name = 'Juan';
//                 user.save();
//             });
//     });

/*Country.create({name:'México'})
    .then(mexico => {
        Usuario.create({
            username: 'francisco',
            password: 'contra1234',
            countryId: 1
        });
    });*/

module.exports = {
    Employees,
    Genres,
    media_types,
    playlists,
    playlist_track,
    artists,
    tracks,
    invoices,
    invoice_items,
    albums,
    customers
};
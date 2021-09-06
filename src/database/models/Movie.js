module.exports = (sequelize, datatypes) => {
    let alias = "Movie";

    let cols = {
        id : {
            type : datatypes.INTEGER.UNSIGNED,
            autoIncrement : true,
            allowNull : false,
            primaryKey : true
        },
        title : {
            type : datatypes.STRING(500),
            allowNull : false
        },
        rating : {
            type : datatypes.DECIMAL(3,1).UNSIGNED,
            allowNull : false
        },
        awards : {
            type :datatypes.INTEGER.UNSIGNED,
            allowNull : false,
            defaultValues : 0
        },
      
        release_date : {
            type : datatypes.DATE,
            allowNull : false
        },
        length : {
            type : datatypes.INTEGER.UNSIGNED,
            defaultValue : null
        },
        genre_id : {
            type : datatypes.INTEGER.UNSIGNED,
            defaultValue : null
        }
    };

    let config = {
        tableName : 'movies', //no es necesario si coincide con el nombre del modelo
        timestamps : true, // no es necesario si la tabla tiene. si es importante aclarar si no lo tiene
        underscored: true //significa que los timestamps estan escritos con _ guion bajo
    };

    const Movie = sequelize.define(alias,cols, config);

    return Movie
}
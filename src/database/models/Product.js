module.exports = function(sequelize, dataTypes){

    let alias = "Product";

    let cols = {
        id_product:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name:{
            type: dataTypes.STRING,
            allowNull: false
        },
        price:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        description:{
            type: dataTypes.STRING(255)
        },
        rating:{
            type: dataTypes.INTEGER,
            allowNull: true
        },
        image:{
            type: dataTypes.STRING(255),
            allowNull: false
        },
        country:{
            type: dataTypes.STRING(45),
            allowNull: true
        },
        brand:{
            type: dataTypes.STRING(45),
            allowNull: true
        },
        cellar:{
            type: dataTypes.STRING(45),
            allowNull: true
        },
        is_active:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        created_at: {
            type: dataTypes.DATE,
            default: Date.now()
        },
        updated_at: {
            type: dataTypes.DATE,
            default: Date.now()
        }
    }

    let config = {
        tableName: "product",
        timestamps: false
    }

    let Product = sequelize.define(alias, cols, config)

    Product.associte = function(models){

        Product.belongsToMany(models.User  , {

            as: "users",
            through: "cart",
            foreingKey: "id_product",
            otherKey: "id_user",
            timestamps: false
        })
    }

    return Product;

}
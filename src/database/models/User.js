module.exports = function(sequelize, dataTypes){

    let alias = "User";

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        first_name:{
            type: dataTypes.STRING(45),
            allowNull: false
        },
        last_name:{
            type: dataTypes.STRING(45),
            allowNull: false
        },
        email:{
            type: dataTypes.STRING(45),
            allowNull: false
        },
        password:{
            type: dataTypes.STRING(100),
            allowNull: false
        },
        image:{
            type: dataTypes.STRING(100),
            allowNull: false
        },
        is_active:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        is_admin:{
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
        tableName: "user",
        timestamps: false
    }

    let User = sequelize.define(alias, cols, config)

    User.associte = function(models){

        User.belongsToMany(models.Product, {

            as: "products",
            through: "cart",
            foreingKey: "id_user",
            otherKey: "id_product",
            timestamps: false
        })


    }

    return User;
}
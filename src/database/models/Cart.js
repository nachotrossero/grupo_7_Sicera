module.exports = function(sequelize, dataTypes){

    let alias = "Cart";

    let cols = {
        id_cart:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        product_quantity:{
            type: dataTypes.INTEGER
        },
        created_at: {
            type: dataTypes.DATE,
            default: Date.now()
        },
        updated_at: {
            type: dataTypes.DATE,
            default: Date.now()
        },
        id_user:{
            type: dataTypes.INTEGER
        },
        id_product:{
            type: dataTypes.INTEGER
        },
        id_order:{
            type: dataTypes.INTEGER
        }
    }

    let config = {
        tableName: "cart",
        timestamps: false
    }

    let Cart = sequelize.define(alias, cols, config)

    Cart.associte = function(models){

        
        

    }

    return Cart;
    
}
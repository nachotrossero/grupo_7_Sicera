module.exports = function(sequelize, dataTypes){

    let alias = "Order";

    let cols = {
        id_order:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        final_price:{
            type: dataTypes.INTEGER
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
        tableName: "purchase_order",
        timestamps: false
    }

    let Order = sequelize.define(alias, cols, config)

    Order.associte = function(models){

        
        

    }

    return Order;
}
import Sequelize from 'sequelize'

export const sequelize = new Sequelize('products_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})

 export const databaseConnection = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync(false)

    } catch (err) {
        console.log('No se pudo conectar a la base de datos', err)
    }
}


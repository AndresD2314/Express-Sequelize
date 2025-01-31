import app from './app.js'
import { databaseConnection } from './config/database.js'
import './models/product.model.js'

const PORT = 3000

app.listen(PORT, () => {
    console.log('El servidor esta corriendo en el puerto y se conecto a la base de datos ', PORT)
})

databaseConnection()




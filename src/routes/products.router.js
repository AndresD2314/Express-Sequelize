import { Router } from 'express'
import { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } from '../controllers/productsController.js'
const router = Router()

router.get('', getAllProducts)
router.get('/:id', getProductById)
router.post('/create', createProduct)
router.put('/update/:id', updateProduct)
router.delete('/delete/:id', deleteProduct)

export default router
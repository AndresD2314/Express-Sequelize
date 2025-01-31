import {
    getAllProducts as getAllProductsService,
    getProductById as getProductByIdService,
    createProduct as createProductService,
    updateProduct as updateProductService,
    deleteProduct as deleteProductService,
} from "../services/productService.js";

export const getAllProducts = async (req, res) => {
    try {
        const allProducts = await getAllProductsService();

        if (!allProducts) {
            return res.status(404).json({
                message: 'Did not find data of products',
            });
        }

        return res.status(200).json({
            message: 'Extracted correctly all data!',
            data: allProducts,
        });
    } catch (err) {
        console.error('Could not extract all products data', err);
        return res.status(500).json({
            message: 'We could not extract the information of the products',
            error: err.message,
        });
    }
};

export const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await getProductByIdService(id);

        if (!product) {
            return res.status(404).json({
                message: 'Did not find the product',
            });
        }

        return res.status(200).json({
            message: 'Retrieved data from the product correctly!',
            data: product,
        });
    } catch (err) {
        console.error('Could not extract product data', err);
        return res.status(500).json({
            message: 'We could not extract the information of the product',
            error: err.message,
        });
    }
};

export const createProduct = async (req, res) => {
    try {
        const { name, stock, description } = req.body;

        const newProduct = await createProductService({ name, stock, description });

        return res.status(201).json({
            message: 'Product created successfully!',
            data: newProduct,
        });
    } catch (err) {
        console.error('Could not create the product', err);
        return res.status(500).json({
            message: 'We could not create the product',
            error: err.message,
        });
    }
};

export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, stock, description } = req.body;

        const updatedProduct = await updateProductService(id, { name, stock, description });

        if (!updatedProduct) {
            return res.status(404).json({
                message: 'Did not find the product',
            });
        }

        return res.status(200).json({
            message: 'Product updated successfully!',
            data: updatedProduct,
        });
    } catch (err) {
        console.error('Could not update the product', err);
        return res.status(500).json({
            message: 'We could not update the product',
            error: err.message,
        });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedProduct = await deleteProductService(id);

        if (!deletedProduct) {
            return res.status(404).json({
                message: 'Did not find the product',
            });
        }

        return res.status(200).json({
            message: 'Product deleted successfully!',
            data: deletedProduct,
        });
    } catch (err) {
        console.error('Could not delete the product', err);
        return res.status(500).json({
            message: 'We could not delete the product',
            error: err.message,
        });
    }
};

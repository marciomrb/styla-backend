
import { Router } from 'express';
import path from 'node:path';
import multer from 'multer';

// category
import { createCategory } from './app/useCases/categories/createCategory';
import { listCategories } from './app/useCases/categories/listCategories';
import { createProduct } from './app/useCases/products/createProduct';

//product
import { listProducts } from './app/useCases/products/listProducts';
import { listProductsByCategory } from './app/useCases/categories/listProductsByCategory';

//order
import { createOrders } from './app/useCases/orders/createOrders';
import { listOrders } from './app/useCases/orders/listOrders';
import { changeOrderStatus } from './app/useCases/orders/changeOrderStatus';
import { cancelOrder } from './app/useCases/orders/cancelOrder';
import { listUsers } from './app/useCases/users/listUsers';

// user
import { createUsers } from './app/useCases/users/createUsers';
import { getUserById } from './app/useCases/users/getUserById';
import { updateUser } from './app/useCases/users/updateUser';
import { deleteUser } from './app/useCases/users/deleteUser';


export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    }
  })
});

// list categories
router.get('/categories', listCategories);
// create category
router.post('/categories', createCategory);

// list products
router.get('/products', listProducts);

// create product
router.post('/products', upload.single('image'), createProduct);

// get product by category
router.get('/categories/:categoryId/products', listProductsByCategory);

// list orders
router.get('/orders', listOrders);

// create order
router.post('/orders', createOrders);

// change order status
router.patch('/orders/:orderId', changeOrderStatus);

// delete/cancel order
router.delete('/orders/:orderId', cancelOrder);


// list users
router.get('/users', listUsers);
// create user
router.post('/users', createUsers);
// get user by id
router.get('/users/:userId', getUserById);
// update user
router.patch('/users/:userId', updateUser);
// delete user
router.delete('/users/:userId', deleteUser);

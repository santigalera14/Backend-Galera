import express from 'express';
import productRoute from './routers/products.router.js';
import carritoRoute from './routers/cart.router.js';
import realTimeProductsRoutes from './routers/realtimeproducts.routes.js';
import homeRoutes from './routers/home.router.js';

const app = express();

// configuracion de express:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static( __dirname + 'src/public'));

// configuracion de handlebars:
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

// configuracion de rutas:
app.use('/api/products', productRoute);
app.use('/api/carts', carritoRoute);
app.use('/realtimeproducts', realTimeProductsRoutes);
app.use('/', homeRoutes);

const PORT = 8080;
const httpServer = app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
const io = new Server(httpServer);

io.on('connection', (socket) => {
    console.log('Nueva conexion establecida!');
    socket.on('disconnect', () => {
        console.log('Usuario desconectado!');
    });
});
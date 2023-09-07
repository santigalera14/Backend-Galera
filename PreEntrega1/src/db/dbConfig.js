import mongoose from 'mongoose';

const URI = 'mongodb+srv://Codersantiagogalera14:piaysan0610@cluster0.lntpo2j.mongodb.net/291800SW?retryWrites=true&w=majority';
mongoose.connect(URI)
    .then(() => console.log('Conectado a la base de datos'))
    .catch(err => console.log(err));
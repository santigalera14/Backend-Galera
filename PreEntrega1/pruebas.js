
const objeto = {
    title: 'iPhone 12',
    description: 'Apple iPhone 12 64GB',
    price: 1100,
  
    code: 'IP12-64GB',
    stock: 10,

    sdsd: 'asdasd',
    asdddd:1233
};
 

const arrayPropiedades = ['title', 'description', 'price', 'thumbnail', 'code', 'stock', 'status', 'category']

    function formateandoProducto (objeto) {
        let validObject = {};

        for (const propiedad in objeto) {
            if (arrayPropiedades.includes(propiedad)) {
                validObject[propiedad] = objeto[propiedad];
            } else {
                console.log(`Propiedad inválida: ${propiedad}, valor: ${objeto[propiedad]}`);
            }
        }

        if(!validObject.hasOwnProperty('status') || typeof validObject.status !== 'boolean'){
            validObject.status = true;
        }
        if(!validObject.hasOwnProperty('thumbnail')){
            validObject.thumbnail = '';
        }

        return validObject;
    };

console.log(formateandoProducto(objeto));


// rutas get y post para el carrito, el stock disminuye y si es 0 status = false

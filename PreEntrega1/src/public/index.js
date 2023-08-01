
const btnAgregarProducto = document.getElementById('btn-agregar-producto');

btnAgregarProducto.addEventListener('click', () => {
    const formulario = document.getElementById('form-agregar-producto');
    formulario.classList.toggle('d-none');
});

document.getElementById('Circulo1').style.background = 'gray';
function CambiarPantalla(pantallaActual, pantallaSiguiente, circuloSiguiente) {
    const pantallaActualElemento = document.getElementById(pantallaActual);
    const pantallaSiguienteElemento = document.getElementById(pantallaSiguiente);
    const circuloSiguienteElemento = document.getElementById(circuloSiguiente);

    circuloSiguienteElemento.style.background = 'gray';
    pantallaActualElemento.style.display = 'none';
    pantallaSiguienteElemento.style.display = 'grid';
}
function DevolverPantalla(pantallaActual, pantallaAtras) {
    const pantallaActualElemento = document.getElementById(pantallaActual);
    const pantallaSiguienteElemento = document.getElementById(pantallaAtras);
    pantallaActualElemento.style.display = 'none';
    pantallaSiguienteElemento.style.display = 'grid';
}
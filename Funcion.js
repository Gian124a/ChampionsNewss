function Boton(){
    let Menu = document.getElementById('Menu');
    let nav = document.getElementById('nav').style.display = 'none';

    if (Menu.style.display === 'none') {
        Menu.style.display = 'initial';
    }
    else{
        Menu.style.display = 'none';
    }
}
function Boton2(){
    let Menu = document.getElementById('Menu').style.display = 'none';
    let nav = document.getElementById('nav');
    if (nav.style.display === 'none') {
        nav.style.display = 'initial';
    }
    else{
        nav.style.display = 'none';
    }
}
function Opciones(){
    let Perfil = document.getElementById('Perfil-Datos');
    let Editar = document.getElementById('Ajustes');
    let Configuracion = document.getElementById('Confi');
    document.getElementById('Perfilito').textContent = 'Perfil';

    Perfil.style.display = 'grid';
    Editar.style.display = 'none';
    Configuracion.style.display = 'none';
}
function Opciones2(){
    let Perfil = document.getElementById('Perfil-Datos');
    let Editar = document.getElementById('Ajustes');
    let Configuracion = document.getElementById('Confi');
    document.getElementById('Perfilito').textContent = 'Editar Perfil';

    Perfil.style.display = 'none';
    Editar.style.display = 'grid';
    Configuracion.style.display = 'none';
}
function Opciones3(){
    let Perfil = document.getElementById('Perfil-Datos');
    let Editar = document.getElementById('Ajustes');
    let Configuracion = document.getElementById('Confi');
    document.getElementById('Perfilito').textContent = 'Configuracion';

    Perfil.style.display = 'none';
    Editar.style.display = 'none';
    Configuracion.style.display = 'grid';
}
function Botoncito() {
    const Boton = document.getElementById('Button');
    const Fondo = document.getElementById('Fondo-Boton');
    const Boton2 = document.getElementById('Boton');
    Boton.classList.toggle('Active');
    Boton2.classList.toggle('Active');
}
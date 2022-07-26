// cuando creas un componente se debe comenzar con  mayuscula
const Header = () => {
    return (
    <div>
        <div>
            <ul>
                <li>
                    <a href="#">Inicio</a>
                </li>
                <li>
                    <a href="#">Nosotros</a>
                </li>
                <li>
                    <a href="#">Poryecto</a>
                </li>
                <li>
                    <a href="#">Contacto</a>
                </li>
            </ul>
        </div>
    </div>
    )
}

// se puede utilizar el prefijo export para exportar pero cuando 
// vamos a exportar solo una funcion lo ideal es usar export default

export default Header;
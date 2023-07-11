import ItemListContainer from "../ItemListContainer";
import CartWidget from "../CartWidget";


const NavBar = () => {
    return (
        <header>
            <div className="containerBrand">

            </div>

            <nav className="containerItemList">
                <ItemListContainer
                    itemUno = "Home"
                    itemDos = "Mesas"
                    itemTres = "Sillones"
                    itemCuatro = "Sommiers"
                    itemCinco = "Contacto"
                />

            </nav>

            <div className="containerCart">
                <CartWidget />


            </div>
        </header>
    )
}

export default NavBar;
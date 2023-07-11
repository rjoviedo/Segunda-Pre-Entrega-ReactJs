import cart from "../img/cart.svg"

const ButtonAddCart = () => {
    return(
        <button id="addCart">
            <img src={cart} alt="add"></img>
        </button>
    )
}
export default ButtonAddCart;
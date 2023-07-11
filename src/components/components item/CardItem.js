import Image from "./Image";
import "../../style/cardItem.css"
import Description from "./Description";
import ButtonDetalles from "./Buttondetalles";
import ButtonAddCart from "./ButtonAddCart";
import { Link } from "react-router-dom";


const CardItem = (props) => {
    return(
        <div className="cardItem">
            <Image 
                imagen={props.imagen} 
            />
            <Description
                title= {props.title}
                cantidad = {props.cantidad}
                precio ={props.precio}
            />
            <div className="buttons">

                <Link to={ `/item/${props.id}` }>
                    <ButtonDetalles
                        txt="Ver detalles"
                    />
                </Link>

                <ButtonAddCart/>
                
            </div>

        </div>
    )
}

export default CardItem;
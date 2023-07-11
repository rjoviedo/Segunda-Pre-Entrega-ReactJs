import fetchSimulation from "../../utils/fetchSimulation";
import productos from "../../utils/productos";
import { useState, useEffect } from "react";
import CardItem from "./CardItem";
import "../../style/containerCardItems.css";
import { useParams } from "react-router-dom";


const ContainerCardItems = () => {
    const [ datos, setDatos ] = useState([]);

    const {idCategory} = useParams()

    console.log(idCategory)
    console.log(!idCategory)

    useEffect(() => {
        fetchSimulation(productos,1000)
            .then (resp =>{
                if (!idCategory) {
                    setDatos(resp)
                } else {
                    setDatos(resp.filter((el) => el.type === idCategory) )
                }
            })
            .catch(error => console.log(error))
    }, [idCategory])


    return(
        <div className="containerCardItems">
            {
                datos.map(product => (
                    <CardItem
                        key={product.id}
                        id={product.id}
                        imagen={product.imageProduct.firstImage}
                        title={product.title}
                        cantidad={product.stock}
                        precio={product.price} 
                    />
                ))
            }
        
        </div>
    )
}

export default ContainerCardItems;
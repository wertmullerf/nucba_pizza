import React from "react";
import { formatPrice } from "../../utils/index";

import Button from "../UI/Button/Button";

import {
    CardPrice,
    ContainerPrice,
    ProductosCard,
} from "./CardsProductosStyles";

const CardProducto = ({ title, img, desc, price, category }) => {
    return (
        <ProductosCard>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <p>{desc}</p>
            <ContainerPrice rice>
                <CardPrice>{formatPrice(price)}</CardPrice>
                <Button onClick={(e) => e.preventDefault()}>Agregar</Button>
            </ContainerPrice>
        </ProductosCard>
    );
};

export default CardProducto;

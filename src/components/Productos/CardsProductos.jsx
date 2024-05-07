import CardProducto from "./CardProducto";
import Button from "../UI/Button/Button";

import { ProductosContainer } from "./CardsProductosStyles";
import { ButtonContainerStyled } from "../../pages/Home/HomeStyles";
import { useSelector } from "react-redux";
import { useState } from "react";
import { INITIAL_LIMIT } from "../../utils";

const CardsProductos = () => {
    const [limit, setLimit] = useState(INITIAL_LIMIT);
    let products = useSelector((state) => state.products.products);
    let selectedCategory = useSelector(
        (state) => state.categories.selectedCategory
    );

    if (selectedCategory) {
        products = { [selectedCategory]: products[selectedCategory] };

        console.log(products);
    }
    return (
        <>
            <ProductosContainer>
                {Object.entries(products).map(([, foods]) => {
                    return foods.map((food) => {
                        if (limit >= food.id) {
                            return <CardProducto {...food} key={food.id} />;
                        }
                        return null;
                    });
                })}
            </ProductosContainer>

            <ButtonContainerStyled>
                <Button
                    onClick={(e) => e.preventDefault()}
                    secondary="true"
                    disabled="true"
                >
                    <span>Ver menos</span>
                </Button>
                <Button onClick={(e) => e.preventDefault()} disabled="true">
                    Ver más
                </Button>
            </ButtonContainerStyled>
        </>
    );
};

export default CardsProductos;

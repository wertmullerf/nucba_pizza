import React from "react";

import CardRecomendacion from "./CardRecomendacion";
import { CardsContainer } from "./CardsRecomendacionStyled";
import { useSelector } from "react-redux";

const CardsRecomendacion = () => {
    const recommended = useSelector((state) => state.recommended.recommended);
    return (
        <CardsContainer gridLength={recommended.length}>
            {recommended.map((reco) => {
                return <CardRecomendacion {...reco} key={reco.id} />;
            })}
        </CardsContainer>
    );
};

export default CardsRecomendacion;

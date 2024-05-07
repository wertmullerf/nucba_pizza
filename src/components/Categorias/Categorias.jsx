import React from "react";

import Categoria from "./Categoria";
import { CategoriasContainer } from "./CategoriasStyles";
import { useSelector } from "react-redux";
const Categorias = () => {
    const categories = useSelector((state) => state.categories.categories); //accedo al dato persistido
    return (
        <CategoriasContainer>
            {categories.map((cat) => {
                return <Categoria key={cat.id} {...cat} />;
            })}
        </CategoriasContainer>
    );
};

export default Categorias;

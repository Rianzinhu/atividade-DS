import { Counter } from "./Counter";
import { Button } from "./Button";
import { useState } from "react";

export const Produto = ({nome, preco}) => {
    const [produtCount, setProductCount] = useState(1);
    const converterValorEmReais = (valor) => {
        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(valor);
    }

    return (
        <div>
            <h4>{nome}</h4>
            <p>{converterValorEmReais(preco)}</p>

            <Counter 
            onDecrement={() =>{ setProductCount((prev) =>  
            (prev > 1 ? prev - 1 : 1 )); 
            }}

            onIncrement={() =>{ setProductCount((prev) => 
            (prev) + 1
            );
         }}
            
            />

            <Button
            data-testid="add-to-cart-button"
            onClick={() => {
                alert(`${nome} - ${converterValorEmReais (preco)}`);
            }}
            
            >Adicionar ao Carrinho ({produtCount} produtos)</Button>    
        </div>
    );
};
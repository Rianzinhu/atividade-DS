import { render,screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Produto } from "../../Componentes/Produto";

describe("teste do componente Produto", () => {
it("deve renderizar o nome do produto corretamente", () => {
    render(<Produto nome="Chuteira" preco="800"/>);
    
    const elementoProduto = screen.getByText("Chuteira");

    expect(elementoProduto).toBeInTheDocument();
});


it("deve renderizar o preco do produto corretamente", () => {
    render(<Produto nome="Bola" preco="400"/>);
    
    const ComponenteProdutoComPreco = screen.getByText("R$ 400,00");

    expect(ComponenteProdutoComPreco).toBeInTheDocument();
});

});
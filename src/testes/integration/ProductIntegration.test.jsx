import { fireEvent,screen, render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Produto } from "../../Componentes/Produto";


describe("Teste de integração do componente Produto", () => {
    it("Ele deve aumentar a quantidade de produtos ao clicar no botão +", () => {
        render(<Produto nome="Luva" preco="200"/>);

        const incrementButton = screen.getByTestId("increment-button");
        
        fireEvent.click(incrementButton);
        
        fireEvent.click(incrementButton);

        const addToCartButton = screen.getByTestId("add-to-cart-button");
        
        expect(addToCartButton).toHaveTextContent("Adicionar ao Carrinho (3 produtos)");
    });

});
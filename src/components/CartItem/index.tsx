import {  Minus, Plus, Trash } from "phosphor-react";
import { CartItemContainer, InputNumberContainer, InputNumberButton, RemoveButton, ActionContainer, ItemDetails, } from "./styles";
import Expresso from "../../assets/coffees/expresso.svg"
export const CartItem = () => {
  return (
    <div>
    <CartItemContainer>
      <div>
        <img src={Expresso} alt="" />
        <ItemDetails>
          <span>Expresso Tradicional</span>
          <ActionContainer>
            <InputNumberContainer>
              <InputNumberButton type="button">
                <Minus size={14} weight="bold" />
              </InputNumberButton>
              <span>{'3'}</span>
              <InputNumberButton type="button">
                <Plus size={14} weight="bold" />
              </InputNumberButton>
            </InputNumberContainer>
            <RemoveButton type="button">
                <Trash size={16} color="#8047F8"/>
                Remover
            </RemoveButton>
          </ActionContainer>
        </ItemDetails>
      </div>
      <span>R$ 9,90</span>
    </CartItemContainer>
    </div>
  );
};

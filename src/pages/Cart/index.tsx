import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { FormEvent } from "react";
import { CartItem } from "../../components/CartItem";
import {
  CartContainer,
  FormSection,
  CartForm,
  CartItemBox,
  FormSectionTitle,
  FormInputSection,
  Info,
  InputTypeNumber,
  InputTypeText,
  InputTypeTextFlex,
  InputTypeTextSmall,
  CartInfo,
} from "./styles";

export const Cart = () => {

  const handleSubmit = (event: FormEvent)=>{
    event.preventDefault()
    
  }

  return (
    <CartContainer>
      <CartForm onSubmit={handleSubmit}>
        <div>
          <h2>Complete seu pedido</h2>
          <FormSection>
            <FormSectionTitle>
            <MapPinLine size={22} color="#DBAC2C"/>
            <div>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
            </FormSectionTitle>
            <FormInputSection>
              <InputTypeText className='requiredField' name="cep" type="text" placeholder="CEP" required/>
              <InputTypeTextFlex className='requiredField' name="street" type="text" placeholder="Rua" required/>
              <Info>
                <InputTypeNumber className='requiredField' name="number" type="number" placeholder="Número" required/>
                <InputTypeTextFlex
                  name="complement"
                  type="text"
                  placeholder="Complemento"
                />
              </Info>
              <Info>
                <InputTypeText className='requiredField' name="neighbor" type="text" placeholder="Bairro" required/>
                <InputTypeTextFlex className='requiredField' name="city" type="text" placeholder="Cidade" required/>
                <InputTypeTextSmall className='requiredField' name="uf" type="text" placeholder="UF" required/>
              </Info>
            </FormInputSection>
          </FormSection>
          <FormSection>
            <FormSectionTitle>
            <CurrencyDollar size={22} color="#8047F8"/>
            <div>
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
            </FormSectionTitle>
            <Info>
              <button className='requiredField' type="button">
                <CreditCard color="#8047F8"/>
                cartão de crédito
              </button>
              <button className='requiredField' type="button">
                <Bank color="#8047F8" />
                cartão de débito
              </button>
              <button className='requiredField' type="button">
                <Money color="#8047F8"/>
                dinheiro
              </button>
            </Info>
          </FormSection>
        </div>
        <div>
          <h2>Cafés selecionados</h2>
          <CartItemBox>
            <CartItem/>
            <hr/>
            <CartItem/>
            <hr/>
            <CartItem/>
            <hr/>
            <CartInfo>
            <div>
              <span>Total de itens</span> <span>R$29,70</span>
            </div>
            <div>
              <span>Entrega</span> <span>R$ 3,50</span>
            </div>
            <div>
              <strong>Total</strong> <strong>R$ 33,20</strong>
            </div>
            </CartInfo>
            <button type="submit" >confirmar pedido</button>
          </CartItemBox>
        </div>
      </CartForm>
    </CartContainer>
  );
};

import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
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
  return (
    <CartContainer>
      <CartForm>
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
              <InputTypeText name="cep" type="text" placeholder="CEP" />
              <InputTypeTextFlex name="street" type="text" placeholder="Rua" />
              <Info>
                <InputTypeNumber name="number" type="number" placeholder="Número" />
                <InputTypeTextFlex
                  name="complement"
                  type="text"
                  placeholder="Complemento"
                />
              </Info>
              <Info>
                <InputTypeText name="neighbor" type="text" placeholder="Bairro" />
                <InputTypeTextFlex name="city" type="text" placeholder="Cidade" />
                <InputTypeTextSmall name="uf" type="text" placeholder="UF" />
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
              <button>
                <CreditCard color="#8047F8"/>
                cartão de crédito
              </button>
              <button>
                <Bank color="#8047F8" />
                cartão de débito
              </button>
              <button>
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
            <CartItem/>
            <CartItem/>
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
            <button>confirmar pedido</button>
          </CartItemBox>
        </div>
      </CartForm>
    </CartContainer>
  );
};

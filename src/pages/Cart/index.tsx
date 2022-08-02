import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { FormEvent, useState } from "react";
import { useForm, } from "react-hook-form";

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
interface formData{
  cep: string;
  street: string;
  number: string;
  complement?:string;
  neighbor:string;
  city:string;
  uf:string;
  payMethod: 'creditcard'|'debit'|'money'
}
export const Cart = () => {
  const { register, handleSubmit, watch } = useForm<formData>();
  const payMethod = watch('payMethod')
  const payMethodIsEmpty = !payMethod

  function fetchCepInformation() {
    console.log("procurando dados ao desfocar input de CEP.");
  }

  function handleValidateFormInfo(data: any) {
    console.log(data);
    
  };
  console.log(payMethodIsEmpty);
  console.log(payMethod);
  
  
  return (
    <CartContainer>
      <CartForm onSubmit={handleSubmit(handleValidateFormInfo)}>
        <div>
          <h2>Complete seu pedido</h2>
          <FormSection>
            <FormSectionTitle>
              <MapPinLine size={22} color="#DBAC2C" />
              <div>
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </FormSectionTitle>
            <FormInputSection>
              <InputTypeText
                className={`${!watch("cep")&& ("requiredField") }`}
                mask="99999-999"
                type="text"
                placeholder="CEP"
                {...register('cep')}
                required
              />
              <InputTypeTextFlex
                className={`${!watch("street")&& ("requiredField") }`}
                type="text"
                mask={``}

                placeholder="Rua"
                {...register('street')}
                required
              />
              <Info>
                <InputTypeNumber
                  className={`${!watch("number")&& ("requiredField") }`}
                  type="number"
                  mask={``}
                  placeholder="Número"
                  {...register('number')}
                  required
                />
                <InputTypeTextFlex
                  type="text"
                  mask={``}
                  placeholder="Complemento"
                  {...register('complement')}
                />
              </Info>
              <Info>
                <InputTypeText
                  className={`${!watch("neighbor")&& ("requiredField") }`}
                  type="text"
                  mask={``}
                  placeholder="Bairro"
                  {...register('neighbor')}
                  required
                />
                <InputTypeTextFlex
                  className={`${!watch("city")&& ("requiredField") }`}
                  type="text"
                  mask={``}
                  placeholder="Cidade"
                  {...register('city')}
                  required
                />
                <InputTypeTextSmall
                  className={`${!watch("uf")&& ("requiredField") }`}
                  style={{textAlign: "center", textTransform: "uppercase"}}
                  type="text"
                  mask={``}
                  placeholder="UF"
                  maxLength={2}
                  {...register('uf',{ maxLength: 2, })}
                  required
                />
              </Info>
            </FormInputSection>
          </FormSection>
          <FormSection>
            <FormSectionTitle>
              <CurrencyDollar size={22} color="#8047F8" />
              <div>
                <h3>Pagamento</h3>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </FormSectionTitle>
            <Info>
              
              <label className={`${ payMethodIsEmpty&& ("requiredField") } ${payMethod === "creditcard" && "active"}`}>
                <input  hidden type="radio" value='creditcard' id="creditCard" {...register('payMethod')}/>
                <CreditCard color="#8047F8" /> cartão de crédito 
                </label>
              
              
              <label className={`${ payMethodIsEmpty&& ("requiredField") } ${payMethod === "debit"&& "active"}`}>
                <input  hidden type="radio" value='debit'  id="debit" {...register('payMethod')}/>
                <Bank color="#8047F8" /> cartão de débito 
                </label>
              
              
              <label className={`${ payMethodIsEmpty&& ("requiredField") } ${payMethod === "money"&& "active"}`}>
                <input  hidden type="radio" value='money' id="money" {...register('payMethod')}/>
                <Money color="#8047F8" /> dinheiro 
                </label>
              
              {/*
              <button className="requiredField" type="button" {...register('creditCard')} onClick={()=>{}}>
                <CreditCard color="#8047F8" />
                cartão de crédito
              </button>
              
              <button className="requiredField" type="button" {...register('Debit')}>
                <Bank color="#8047F8" />
                cartão de débito
              </button>
              
              <button className="requiredField" type="button" {...register('Money')}>
                <Money color="#8047F8" />
                dinheiro
              </button>
  */}
            </Info>
          </FormSection>
        </div>
        <div>
          <h2>Cafés selecionados</h2>
          <CartItemBox>
            <CartItem />
            <hr />
            <CartItem />
            <hr />
            <CartItem />
            <hr />
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
            <button type="submit">confirmar pedido</button>
          </CartItemBox>
        </div>
      </CartForm>
    </CartContainer>
  );
};

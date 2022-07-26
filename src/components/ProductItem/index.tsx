import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { FunctionComponent, useState } from "react";
import { Coffees } from "../../utils/coffees";
import { InputNumberButton, InputNumberContainer, OrderForm, ProductItemContainer, Tags } from "./styles";
interface ProductItemProps {
  image: string;
  name: string;
  tags: string[];
  description: string;
  price: number;
}
export const ProductItem: FunctionComponent<ProductItemProps> = ({
  image,
  name,
  tags,
  description,
  price,
}) => {
  const [amount, setAmount] = useState<number>(0)
  return (
    <ProductItemContainer rotationValue={10} key={image}>
      <img src={image} alt="" />
      <Tags>
        {tags?.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>
      <strong>{name}</strong>
      <p>{description}</p>
      <OrderForm>
        <span>
          R$
          <b>{price.toFixed(2).toString().replace(".", ",")}</b>
        </span>
        <InputNumberContainer>
          <InputNumberButton ><Minus size={14} weight='bold' /></InputNumberButton>
          <span>{amount}</span >
          <InputNumberButton> <Plus size={14} weight='bold'/></InputNumberButton>
        </InputNumberContainer>
        <button type="submit">
          <ShoppingCart size={22} weight="fill" />
        </button>
      </OrderForm>
    </ProductItemContainer>
  );
};

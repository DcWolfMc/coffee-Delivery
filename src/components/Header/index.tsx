import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { Badge, CartButton, HeaderContainer, LocationField } from "./styles";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";

export const Header = () => {
  const { cart } = useContext(CartContext);

  const [itemsInCart, setItemsInCart] = useState<number>(0);

  useEffect(()=>{
    if (cart.length) { 
      let amountOfItems = 0;
      cart.map((item)=>{return amountOfItems += item.amount})
      setItemsInCart(amountOfItems)
    }
  },[cart])
  return (
    <HeaderContainer>
      <Link to={"/"}>
        <img src={Logo} />
      </Link>
      <nav>
        <LocationField>
          <MapPin weight="fill" size={24} />
          <span>Fortaleza, CE</span>
        </LocationField>
        <Link to="/cart">
          <CartButton>
            <ShoppingCart weight="fill" size={24} />
          
          {itemsInCart > 0 && (
            <Badge>
              {itemsInCart}
            </Badge>
          )}
          </CartButton>
        </Link>
      </nav>
    </HeaderContainer>
  );
};

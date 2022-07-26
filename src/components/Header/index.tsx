import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { Badge, CartButton, HeaderContainer, LocationField } from "./styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <Link to={"/"}>
        <img src={Logo} />
      </Link>
      <nav>
        <LocationField>
          <MapPin weight='fill' size={24}/>
          <span>Fortaleza, CE</span>
          </LocationField>
        <CartButton>
          <Link to="/cart">
            <ShoppingCart weight='fill' size={24}/>
          </Link>
            <Badge>3</Badge> 
        </CartButton>
      </nav>
    </HeaderContainer>
  );
};

import {
  Bar,
  NavBarToggle,
  Hamburger,
  MainNav,
  NavLi,
  NavLink,
} from "../../UI/NavbarContainer";
import logo from "../../../assets/logo.svg";

import HeaderBasketButton from "../HeaderBasketButton/HeaderBasketButton";

const MainNavigation = (props: any) => {
  return (
    <>
      {/* <NavbarContainer>
        Header <HeaderBasketButton />
      </NavbarContainer> */}
      <Bar>
        <NavBarToggle>
          <Hamburger />
        </NavBarToggle>
        <MainNav>
          <NavLi>
            <NavLink href="#">
              <img alt="Getir Logo" src={logo} />
            </NavLink>
          </NavLi>
          <NavLi>
            <NavLink href="#">
              <HeaderBasketButton />
            </NavLink>
          </NavLi>
        </MainNav>
      </Bar>
    </>
  );
};

export default MainNavigation;

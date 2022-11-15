import NavbarContainer from "../../UI/NavbarContainer";
import HeaderBasketButton from "../HeaderBasketButton/HeaderBasketButton";

const MainNavigation = (props: any) => {
  return (
    <>
      <NavbarContainer>
        Header <HeaderBasketButton />
      </NavbarContainer>
    </>
  );
};

export default MainNavigation;

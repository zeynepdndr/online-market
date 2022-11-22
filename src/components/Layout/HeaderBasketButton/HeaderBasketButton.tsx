import Button from "../../UI/Button";
import CartIcon from "./CartIcon";

const HeaderBasketButton: React.FC = (props) => {
  return (
    <Button>
      <span
        style={{ width: "1.35rem", height: "1.35rem", marginRight: "0.5rem" }}
      >
        <CartIcon />
      </span>
      Your Cart
      <span
        style={{
          backgroundColor: "#b94517",
          padding: "0.25rem 1rem",
          borderRadius: "25px",
          marginLeft: "1rem",
          fontWeight: "bold",
        }}
      >
        {454}
      </span>
    </Button>
  );
};
export default HeaderBasketButton;

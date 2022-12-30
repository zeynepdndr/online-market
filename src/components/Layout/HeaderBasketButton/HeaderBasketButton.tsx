import Button from "../../UI/Button";
import basketIcon from "../../../assets/basketIcon.svg";
import { useSelector } from "react-redux";

const HeaderBasketButton: React.FC = (props) => {
  const totalAmount = useSelector((state: any) => state.cart.totalAmount);

  return (
    <Button>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <span
          style={{
            backgroundColor: "#fff",
            width: "40px",
            height: "40px",
            borderTopLeftRadius: "8px",
            borderBottomLeftRadius: "8px",
          }}
        >
          <img alt="Basket Icon" src={basketIcon} width={40} />
        </span>

        <span
          style={{
            backgroundColor: "",
            fontWeight: "bold",
            fontSize: "18px",
            margin: "0 auto",
            paddingLeft: "12px",
            paddingRight: "12px",
          }}
        >
          ${totalAmount.toFixed(2)}
        </span>
      </div>
    </Button>
  );
};
export default HeaderBasketButton;

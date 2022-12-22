import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import "./App.css";
import BasketSummary from "./components/BasketSummary/BasketSummary";

function App() {
  return (
    <Layout>
      <Products />
      <BasketSummary />
    </Layout>
  );
}

export default App;

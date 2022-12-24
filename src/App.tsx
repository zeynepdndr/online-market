import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import "./App.css";
import BasketSummary from "./components/BasketSummary/BasketSummary";
import Grid from "./components/UI/Grid";

function App() {
  return (
    <Layout>
      <Grid>
        <div>Filters</div>
        <div>
          <Products />
        </div>
        <div>
          <BasketSummary />
        </div>
      </Grid>
    </Layout>
  );
}

export default App;

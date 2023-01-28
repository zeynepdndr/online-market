import Layout from "components/Layout/Layout";
import Cart from "components/Cart/Cart";
import Products from "components/Shop/Products";
import Filters from "components/Filters/Filters";
import Grid from "components/UI/Grid";
import Welcome from "./Welcome";

function App() {
  return (
    <Layout>
      <Welcome></Welcome>
      <Grid>
        <div>
          <Filters />
        </div>
        <div>
          <Products />
        </div>
        <div>
          <Cart />
        </div>
      </Grid>
    </Layout>
  );
}

export default App;

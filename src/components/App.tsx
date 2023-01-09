import Layout from "components/Layout/Layout";
import Cart from "components/Cart/Cart";
import Products from "components/Shop/Products";
import Filters from "components/Filters/Filters";
import Grid from "components/UI/Grid";

function App() {
  return (
    <Layout>
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

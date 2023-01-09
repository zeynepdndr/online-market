import Layout from "./Layout/Layout";
import Products from "./Shop/Products";
import "./App.css";
import Cart from "./Cart/Cart";
import Grid from "./UI/Grid";
import Filters from "./Filters/Filters";

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

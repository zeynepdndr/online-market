import Footer from "./Footer/Footer";
import MainNavigation from "./MainNavigation/MainNavigation";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <MainNavigation onShowBasket={true} />
      <main style={{ marginTop: 38 }}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

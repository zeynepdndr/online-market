import Footer from "./Footer/Footer";
import MainNavigation from "./MainNavigation/MainNavigation";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <MainNavigation onShowBasket={true} />
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
};

export default Layout;

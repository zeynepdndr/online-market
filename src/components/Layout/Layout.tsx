import MainNavigation from "./MainNavigation/MainNavigation";

const Layout: React.FC = (props: any) => {
  return (
    <>
      <MainNavigation onShowBasket={props.onShowBasket} />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;

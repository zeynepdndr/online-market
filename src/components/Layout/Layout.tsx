import Footer from "./Footer/Footer";
import MainNavigation from "./MainNavigation/MainNavigation";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5D3EBC",
      light: "#F3F0FE",
      dark: "#CC4400",
    },
    secondary: {
      main: "#7849F7",
      light: "#FD6E35",
      dark: "#CC4400",
    },

    background: {
      default: "#1F1F1F",
      paper: "#FAFAFA",
    },
    text: {
      primary: "#FFF",
      secondary: "#A8A8A8",
    },
  },
  spacing: (multiplier = 1) => `${4 * multiplier}px`,
  typography: {
    h1: {
      "font-weight": "bold",
      "font-size": "68px",
    },
    h2: {
      "font-weight": "bold",
      "font-size": "50px",
    },
    h3: {
      "font-weight": "bold",
      "font-size": "38px",
    },
    h4: {
      "font-weight": "bold",
      "font-size": "28px",
    },
    h5: {
      "font-weight": "bold",
      "font-size": "22px",
    },
    h6: {
      "font-weight": "bold",
      "font-size": "16px",
    },

    button: {
      "font-weight": "bold",
      "font-size": "14px",
      "text-transform": "uppercase",
    },
  },
});

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <MainNavigation onShowBasket={true} />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;

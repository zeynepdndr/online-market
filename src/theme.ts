const theme = {
  palette: {
    primary: {
      main: "rgb(76, 51, 152)",
      light: "#F3F0FE",
      dark: "#CC4400",
    },
    secondary: {
      main: "#7849F7",
      light: "#FFFFFF",
      dark: "#CC4400",
    },
    attention: {
      main: "#D64242",
      light: "#F04A4A",
      dark: "BD3A3A",
    },
    background: {
      body: "#161616",
      base: "#1F1F1F",
      alt1: "#303030",
      alt2: "#484848",
    },
    text: {
      primary: "#3E3E3E",
    },
  },
  spacing: (multiplier = 1) => `${4 * multiplier}px`,
  borderRadius: "4px",
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
      "font-weight": "600",
      "font-size": "16px",
    },
    body: {
      "font-weight": "normal",
      "font-size": "14px",
    },
    button: {
      "font-weight": "bold",
      "font-size": "14px",
      "text-transform": "uppercase",
    },
  },
};

export default theme;

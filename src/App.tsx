import { createTheme, MantineProvider } from "@mantine/core";
import Router from "./router";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

const theme = createTheme({
  defaultRadius: "md",
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <Router />
    </MantineProvider>
  );
}

export default App;

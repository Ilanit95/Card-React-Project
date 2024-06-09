import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./assets/routes/Router";
import App from "../../layout/App";
import UserProvider from "./users/UseProvider";
import CustomThemeProvider from "./providers/CustomThemeProvider";
import SnackbarProvider from "./providers/SnackbarProvider";

function Appjs() {
  return (
    <BrowserRouter>
      <UserProvider>
        <CustomThemeProvider>
          <SnackbarProvider>
            <App>
              <Router />
            </App>
          </SnackbarProvider>
        </CustomThemeProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default Appjs;
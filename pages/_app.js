import Layout from "../components/Layout";
import { LangProvider } from "../Context/LangContext";
import { AuthProvider } from "../Context/AuthContext";
import { CartLengthProvider } from "../Context/CartLengthContext";
import { ColorThemeProvider } from "../Context/ColorTheme";
import { LocationProvider } from "../Context/Location";
import { MenuProvider } from "../Context/Menu";

function MyApp({ Component, pageProps }) {
  return (
    <LangProvider>
      <CartLengthProvider>
        <AuthProvider>
          <ColorThemeProvider>
            <LocationProvider>
              <MenuProvider>
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </MenuProvider>
            </LocationProvider>
          </ColorThemeProvider>
        </AuthProvider>
      </CartLengthProvider>
    </LangProvider>
  );
}

export default MyApp;

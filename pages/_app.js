import Layout from "../components/Layout";
import { LangProvider } from "../Context/LangContext";
import { AuthProvider } from "../Context/AuthContext";
import { CartLengthProvider } from "../Context/CartLengthContext";
import { ColorThemeProvider } from "../Context/ColorTheme";
import { LocationProvider } from "../Context/Location";
import { MenuProvider } from "../Context/Menu";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../services/apolloSsr";

function MyApp({ Component, pageProps }) {
  const client = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
}

export default MyApp;

import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children, title = "#madScalability" }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;

import Header from "./header"
import Footer from "./footer"


const Layout = ({ children, seo }) => (
  <>
    <Header />
    {children}
  <Footer/>
  </>
)

export default Layout
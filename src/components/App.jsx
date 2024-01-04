import Header from "./Header.jsx";
import Banner from "./Banner.jsx";
import Footer from "./Footer.jsx";
import homePageImg from "../assets/banner-img.png";
import aProposImg from "../assets/img-banner-a-propos.png";

function App() {
  return (
    <>
    <Header />
    <Banner image={homePageImg} title={'Chez vous, partout et ailleurs'} />
    <Banner image={aProposImg} title={''} />
    <Footer />
    </>
  )
    
}

export default App;

import Header from "./Header.jsx";
import Banner from "./Banner.jsx";
import Footer from "./Footer.jsx";
import homePageImg from "../assets/banner-img.png";
import aProposImg from "../assets/img-banner-a-propos.png";

function Home() {
    return (
      <>
      <Banner image={homePageImg} title={'Chez vous, partout et ailleurs'} />
      </>
    )
      
  }
  
  export default Home;
  
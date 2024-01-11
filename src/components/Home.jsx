import Banner from "./Banner.jsx";
import homePageImg from "../assets/banner-img.png";
import '../styles/Home.css';
import Card from "./Card.jsx";

function Home() {
    return (
      <>
      <Banner image={homePageImg} title={'Chez vous, partout et ailleurs'} />
       <section className="container">
       <div className="card-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      </section>
      </>
    )
      
  }
  
export default Home;
  
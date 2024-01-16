import Banner from "./Banner.jsx";
import homePageImg from "../assets/banner-img.png";
import '../styles/Home.css';
import Card from "./Card.jsx";
import logements from '../data/data.json';
import { Link } from "react-router-dom";

function Home() {

  const cards = logements.map(item => ( 
    <Link key={item.id} to={`/logement/${item.id}`}>
      <Card id={item.id} cover={item.cover} title={item.title} />
    </Link>
  ));

  return (
    <>
      <Banner image={homePageImg} title={'Chez vous, partout et ailleurs'} />
      <section className="container">
        <div className="card-container">
          {cards}
        </div>
      </section>
    </>
  );
}

export default Home;
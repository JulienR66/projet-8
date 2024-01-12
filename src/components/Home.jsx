import Banner from "./Banner.jsx";
import homePageImg from "../assets/banner-img.png";
import '../styles/Home.css';
import Card from "./Card.jsx";
import React, { useState, useEffect } from 'react';
import data from '../data/data.json';
import { Link } from "react-router-dom";

function Home() {

  const [jsonData, setJsonData] = useState(data);


  const cards = jsonData.map(item => ( 
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
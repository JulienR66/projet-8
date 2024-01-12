import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import '../styles/Logement.css';
import Slides from './Slides';
import Tag from './Tag';
import starRating from '../assets/star-rating.svg';
import Topbar from './Topbar';
import data from '../data/data.json';

function Logement() {


    const { id } = useParams();
    const selectedLogement = data.find(item => item.id === id);
  
    if (!selectedLogement) {
      // Rediriger vers la page 404 si le logement n'est pas trouvé
     return <Navigate to='*' />;
    }
  
    const { title, location, host, tags, description, equipments } = selectedLogement;
  
    const { name: hostName, picture: hostPicture } = host;

    const tagComponents = tags && tags.map((tag, index) => <Tag key={index} tag={tag} />);

    const descriptionComponent = <p>{description}</p>;

    const equipmentList = (
        <ul>
          {equipments && equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
      );

  return (
    <>
      <Slides />
      <section className='section-housing-host'>
        <div className='housing-container'>
          <h1>{title}</h1>
          <p>{location}</p>
          <div className='tag-container'>
            {tagComponents}
          </div>
        </div>
        <div className='host-rating-container'>
          <div className='host-container'>
            <h2>{hostName}</h2>
            <img src={hostPicture} alt="" />
          </div>
          <div className='rating-container'>
            <img src={starRating} alt="" />
            <img src={starRating} alt="" />
            <img src={starRating} alt="" />
            <img src={starRating} alt="" />
            <img src={starRating} alt="" />
          </div>
        </div>
      </section>
      <div className='topbar-section'>
        <Topbar title={'Description'} contain={descriptionComponent} />
        <Topbar title={'Équipements'} contain={equipmentList} />
      </div>
    </>
  );
}

export default Logement;
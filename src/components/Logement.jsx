import '../styles/Logement.css';
import Slides from './Slides';
import Tag from './Tag';
import starRating from '../assets/star-rating.svg'
import Topbar from './Topbar';
import { useParams } from 'react-router-dom';
import data from '../data/data.json';


function Logement({ title, location, hostName, hostPicture }) {

    return (
        <>
        <Slides />
        <section className='section-housing-host'>
        <div className='housing-container'>
            <h1>{title}</h1>
            <p>{location}</p>
            <div className='tag-container'>
            <Tag />
            <Tag />
            <Tag />
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
        <Topbar title={'Description'} contain={'ffh'} />
        <Topbar title={'Équipements'} contain={'fhhgg'}/>
        </div>
        </>
    )

}

export default Logement;
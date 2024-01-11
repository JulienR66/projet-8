import '../styles/Logement.css';
import Slides from './Slides';
import Tag from './Tag';
import starRating from '../assets/star-rating.svg'
import Topbar from './Topbar';


function Logement({host}) {

    return (
        <>
        <Slides />
        <section className='section-housing-host'>
        <div className='housing-container'>
            <h1>Cozy loft on the Canal Saint-Martin</h1>
            <p>Paris, Île-de-France</p>
            <div className='tag-container'>
            <Tag />
            <Tag />
            <Tag />
            </div>
        </div>
        <div className='host-rating-container'>
            <div className='host-container'>
                <h2>Alexandre Dumas</h2>
                <img src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-2.jpg" alt="" />
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
        <div>
        <Topbar title={'Description'} contain={'ffh'} />
        <Topbar title={'Équipements'} contain={'fhhgg'}/>
        </div>
        </>
    )

}

export default Logement;
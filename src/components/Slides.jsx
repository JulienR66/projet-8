import '../styles/Slides.css';
import arrowLeft from "../assets/arrow-left.png";
import arrowRight from "../assets/arrow-right.png";


function Slides() {



    return (
        
        <div className='slides-container'>
            <img className='slides-img' src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg" alt="" />
            <img className='slides-arrow slides-arrow-left' src={arrowLeft} alt="" />
            <img className='slides-arrow slides-arrow-right' src={arrowRight} alt="" />
        </div>
    )
}

export default Slides
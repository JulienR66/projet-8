import starRatingGray from '../assets/star-rating-gray.svg';
import starRatingRed from '../assets/star-rating-red.svg';


function Rating({RatingValue}) {

    const stars = Array.from({ length: 5 }, (_, index) => (
        <img
          key={index}
          src={index < RatingValue ? starRatingRed : starRatingGray}
          alt={`Star ${index + 1}`}
        />
      ));
      return (
        <>
        {stars}
        </>
      )
}

export default Rating;
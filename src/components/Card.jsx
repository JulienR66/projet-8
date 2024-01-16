import '../styles/Card.css';


function Card({cover, title}) {
    return (
        <div className='card-content'>
            <img src={cover} alt="" />
            <h2>{title}</h2>
        </div>
    )

}

export default Card
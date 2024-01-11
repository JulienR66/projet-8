import '../styles/Banner.css';

function Banner({image, title}) {

    return (
        <section className='section-banner'>
            <div className='img-container'>
                <div className='black-filter'></div>
                <img src={image} alt="" />
                <h1>{title}</h1>
            </div>
            
        </section>
    )


}

export default Banner
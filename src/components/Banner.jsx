import '../styles/Banner.css';

function Banner({image, title}) {

    return (
        <section>
            <div className='img-container'>
                <div className='black-filter'></div>
                <img src={image} alt="" />
            </div>
            <h1>{title}</h1>
        </section>
    )


}

export default Banner
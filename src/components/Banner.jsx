import '../styles/Banner.css';

function Banner({image, title}) {

    return (
        <section>
            <div></div>
            <img src={image} alt="" />
            <h1>{title}</h1>
        </section>
    )


}

export default Banner
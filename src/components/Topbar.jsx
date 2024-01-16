import '../styles/Topbar.css';
import arrow from '../assets/arrow_back_ios-24px 2.png';


function Topbar({title, contain}) {

    return (
        <>
        <div className='topbar-container'>
            <div className='topbar'>
                <h2>{title}</h2>
                <img src={arrow} alt="" />
            </div>
            <div className='topbar-description'>
                {contain}
            </div>
        </div>
        </>
    )
}

export default Topbar;
import '../styles/Apropos.css';
import Banner from "./Banner.jsx";
import aProposImg from "../assets/img-banner-a-propos.png";
import Topbar from "./Topbar.jsx";

function Apropos() {
    
    return (
        <>
        <Banner image={aProposImg} title={''} />
        <div className='app-section'>
        <Topbar title={'Fiabilité'} contain={<p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>} />
        <Topbar title={'Respect'} contain={<p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>} />
        <Topbar title={'Service'} contain={<p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>} />
        <Topbar title={'Sécurité'} contain={<p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hote qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>} />
        </div>
        </>
    )
}

export default Apropos;
import '../styles/Apropos.css';
import Banner from "./Banner.jsx";
import aProposImg from "../assets/img-banner-a-propos.png";
import Topbar from "./Topbar.jsx";

function Apropos() {
    
    return (
        <>
        <Banner image={aProposImg} title={''} />
        <div className='app-section'>
        <Topbar title={'Fiabilité'} contain={'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'} />
        <Topbar title={'Respect'} contain={'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'} />
        <Topbar title={'Service'} contain={'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'} />
        <Topbar title={'Sécurité'} contain={'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sacurité établis par nos services. En laissant une note aussi bien à lhote quau locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.'} />
        </div>
        </>
    )
}

export default Apropos;
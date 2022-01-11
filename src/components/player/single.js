import styles from '../../../styles/Card.module.css';
import Slider from "react-slick";
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: 2,
    centerPadding: '0',
};
const Single = (props) => {
    return (
        <div className='container'>
            <div className="row">
                <h1 className="m-2">Dream team</h1>
            </div>
            <div className='p-2' key={props.player.id}>
                <div className="card mb-3">
                    <img src="https://www.fifaultimateteam.it/en/wp-content/uploads/2019/10/Wallpaper-Desktop@2x-2.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className={styles.playerName}>{props.player.name}</h5>
                        <p className="card-text">
                            <p className={styles.playerPosition}>
                                Position:  <span className="badge badge-primary">{props.player.position}</span>
                            </p>
                            <p className='playerCountry'>
                                <span>Nation:</span>  <span className="badge badge-info">{props.player.country}</span>
                            </p>
                            <p className='playerTeam'>
                                <span>Club:</span>  <span className="badge badge-secondary">{props.player.team}</span>
                            </p>
                        </p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Single;
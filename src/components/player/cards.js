import styles from '../../../styles/Card.module.css';
import Slider from "react-slick";
import Router from "next/router";
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: 2,
    centerPadding: '0',
};
const Card = (props) => {
    return (
        <div className='container'>
            <Slider {...settings}>
                {props.players.map((player) => (
                    <div className='p-2' key={player.id}>
                        <div className="card mb-3" key={player.id} onClick={e => Router.push('/players/id', '/players/'+player.id)}>
                            <img src="https://www.fifaultimateteam.it/en/wp-content/uploads/2019/10/Wallpaper-Desktop@2x-2.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className={styles.playerName}>{player.name}</h5>
                                <p className="card-text">
                                    <p className={styles.playerPosition}>
                                        Position:  <span class="badge badge-primary">{player.position}</span>
                                    </p>
                                    <p className='playerCountry'>
                                        <span>Nation:</span>  <span class="badge badge-info">{player.country}</span>
                                    </p>
                                    <p className='playerTeam'>
                                        <span>Club:</span>  <span class="badge badge-secondary">{player.team}</span>
                                    </p>
                                </p>
                            </div>
                        </div>
                    </div>
                ))
                }
            </Slider >
        </div >
    );
};

export default Card;
import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from '../../assets/Arrow.svg';
import { ReactComponent as GamerIcon } from '../../assets/gamer.svg';

const Home = () => (

    <div className="home-container">
        <div className="home-text">
            <h1 className="home-text-title">
                Quais jogos as pessoa gosta mais?
            </h1>
            <h3 className="home-text-subtitle">
                Clique no botão abaixo e saiba quais jogos x galero está escolhendo!
            </h3>
                <Link to="/records">
            <div className="home-actions">
                <button className="home-btn">
                    PRECISO SABER!!!1ONZE
                </button>
                <div className="home-btn-icon">
                    <ArrowIcon />
                </div>
            </div>
            </Link>
        </div>

        <GamerIcon className="home-image"/>

    </div>

);

export default Home;
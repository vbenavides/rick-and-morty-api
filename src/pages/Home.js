import React from 'react';
import CharacterList from '../components/CharacterList.js';
import LogoTitle from '../images/title.png'


import './styles/Home.css';

class Home extends React.Component {
    render() {
        return(
            <div className="container">
                <img src={LogoTitle} alt="Rick&Morty"/>
                <CharacterList />
            </div>
        )
    }

}

export default Home;
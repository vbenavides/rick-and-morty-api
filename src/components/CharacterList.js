import React from 'react';
import './styles/CharacterList.css';

class CharacterList extends React.Component {
    state = {
        nextPage: 1,
        loading: true,
        error: null,
        data: {
            info: {},
            results: []
        }
    }

    CharacterCard(props) {
        const { character } = props;

        return (
            <div className="characterCard" style={{ backgroundImage: `url(${character.image})` }}>
                <div className="characterCard__name">
                    {character.name}
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.fetchCharacters();
    }

    fetchCharacters = async () => {
        this.setState({ loading: true, error: null })

        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character?page=${this.state.nextPage}`);
            const data = await response.json()

            this.setState({
                loading: false,
                data: {
                    results: [].concat(this.state.data.results, data.results)
                },
                nextPage: this.state.nextPage + 1,
            })
        } catch (error) {
            this.setState({
                loading: false,
                error: error
            })
        }
    }

    render() {
        if (this.state.error) {
            return `Error: ${this.state.error.message}`;
        }
        return(
            <div className="character__container">
                <ul className="character__ul">
                    {this.state.data.results.map(character => (
                        <li className="col-6 col-md-3" key={character.id}>
                            <this.CharacterCard character={character} />
                        </li>
                    ))}
                </ul>

                {this.state.loading && <p className="text-center">Loading...</p>}
                {!this.state.loading && (
                    <button className="LoadMore" onClick={() => this.fetchCharacters()}>Load More</button>
                )}

            </div>
        )
    }
}

export default CharacterList;
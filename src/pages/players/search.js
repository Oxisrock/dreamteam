import Layout from "../../components/layout";
import Players from "../../components/player/cards";
import { useState, useEffect } from "react";

const Search = () => {
    const [players, setPlayers] = useState([]);
    const [inpuTeam, setInpuTeam] = useState('');
    const [isFetching, setIsFetching] = useState(false);
    const fetchPlayersData = async () => {
        if (isFetching) return;
        setIsFetching(true);
        let result = await fetch('http://localhost:3000/api/v1/team', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ team: inpuTeam })
        });
        let { data } = await result.json();
        setIsFetching(false);
        return data;
    };
    const loadPlayerNext = async () => {
        if (isFetching) return;
        setIsFetching(true);
        const _players = await fetchPlayersData();
        setPlayers(_players);
        setIsFetching(false);
    }
    useEffect(() => {
        (async () => {
            await loadPlayerNext();
        })()
    }, []);
    if (isFetching) {
        return <h1>CARGANDO</h1>
    }
    return <Layout>
        <div className="container">
            <div className="row">
                <h1 className="mt-4 mb-4">Search team</h1>
                <div className="input-group mb-3">
                    <input id="searchTeam" type="text" className="form-control" placeholder="Search team" aria-label="Search team" aria-describedby="basic-addon2" onChange={(e) => setInpuTeam(e.target.value)} value={inpuTeam} />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" onClick={loadPlayerNext}>Search</button>
                    </div>
                </div>
            </div>
            <Players players={players} />
        </div>
    </Layout>;

};

export default Search;
import Layout from "../components/layout";
import Players from "../components/player/cards";
const Index = (props) => {
    return (
        <Layout>
            <div className="container">
                <div className="row">
                    <h1 className="m-2">Dream team</h1>
                </div>
                <Players players={props.players} />
            </div>
        </Layout>
    );
};

export default Index;

Index.getInitialProps = async (ctx) => {
    const res = await fetch("http://localhost:3000/api/v1/players/all?page=1&pageitems=28");
    const resJSON = await res.json();
    return {
        players: resJSON.data,
    };
};
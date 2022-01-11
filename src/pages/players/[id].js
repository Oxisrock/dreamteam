import Layout from "../../components/layout";
import { useRouter } from "next/router";
import Single from "../../components/player/single";

const playerId = (props) => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <Layout>
            <Single player={props.player}/>
        </Layout>
    );
};

export default playerId;

playerId.getInitialProps = async (ctx) => {
    const res = await fetch("http://localhost:3000/api/v1/players/" + ctx.query.id);
    const resJSON = await res.json();
    return {
        player: resJSON.data,
    };
};
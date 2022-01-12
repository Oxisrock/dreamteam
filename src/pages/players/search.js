import Layout from "../../components/layout";

const Search = () => {
    return <Layout>
        <div className="container">
            <h1 className="mt-4 mb-4">Search player</h1>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search team" aria-label="Search team" aria-describedby="basic-addon2" />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button">Search</button>
                </div>
            </div>
        </div>
    </Layout>;
};

export default Search;
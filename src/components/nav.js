const Nav = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">DREAM TEAM</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                        {/* ml-auto still works just fine*/}
                        <div className="navbar-nav ml-auto">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                            <a className="nav-link" href="/players/search">Search player</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;
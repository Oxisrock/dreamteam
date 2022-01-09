import Head from "next/head";
import Nav from "./nav";
const Layout = (props) => {
    return (
        <div>
            <head>
                <title>Dream team project</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/sandstone/bootstrap.min.css"/>
            </head>
            <Nav />
            <div>
                {props.children}
            </div>
        </div>
    );
};

export default Layout;
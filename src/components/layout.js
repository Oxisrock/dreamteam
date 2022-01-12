import Head from "next/head";
import Nav from "./nav";
const Layout = (props) => {
    return (
        <div>
            <head>
                <title>Dream team project</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/sandstone/bootstrap.min.css" />
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            </head>
            <Nav />
            <div>
                {props.children}
            </div>
        </div>
    );
};

export default Layout;
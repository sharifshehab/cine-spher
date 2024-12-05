import { Outlet } from "react-router-dom";
import Header from "../pages/shared/Header";
import Footer from "../pages/shared/Footer";

const Root = () => {
    return (
        <>
            <Header></Header>
            <main>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </>

    );
};

export default Root;
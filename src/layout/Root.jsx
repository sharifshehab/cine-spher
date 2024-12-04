import { Outlet } from "react-router-dom";
import Header from "../pages/shared/Header";
import Footer from "../pages/shared/Footer";

const Root = () => {
    return (
        <>
            <Header></Header>
                <div className="container mx-auto">
                    <Outlet></Outlet>
                </div>
            <Footer></Footer>
        </>

    );
};

export default Root;
import Header from "../Header";
import SideBar from "../SideBar";
import "./Layout.scss";
import { useSelector } from "react-redux";


const Layout = ({children}) => {

    const showSidebar = useSelector((state) => state.sideBarToggle.showSidebar);

    console.log("Sidebar", showSidebar);
    return (
        <>
            <Header />
            <div className="layout-content">
                {showSidebar && <SideBar />}
                <main className="layout-container">
                    {children}
                </main>
            </div> 
        </>
    )
}

export default Layout;
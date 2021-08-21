import Footer from "./footer"
import Header from "./header"
import Sidebar from "./sidebar"

const Layout = ({
    children
}) => {
    return (
        <div className="grid bg-gray grid-flow-col w-full auto-cols-fr h-full" style={{gridTemplateColumns: "min-content 1fr"}}>
            <Sidebar />
            <div id="page-container" className="p-5 overflow-y-auto h-screen w-full">
                <Header />
                <div className={`my-9 flex-shrink-0`}>
                    {children}
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Layout
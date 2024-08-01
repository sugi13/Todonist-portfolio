import Home from "../pages/Home";
import UserHome from "../pages/UserHome";


export default function Layout() {


    const Localdata = JSON.parse(localStorage.getItem('user_credentials'));

    return (
        <div className="Layout">
            {
                Localdata ? (<UserHome/>) : <Home/>
            }
        </div>
    )
}

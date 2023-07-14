import {useNavigate} from "react-router-dom";
import "../manufacturer_afterlogin.css";
import "./navbarcss/navcss.css";
import Navlogo from "../nav-logo.png"

function Home_page() {
    let navigate = useNavigate();
    const addDest = () => {
        let path = "../mfg_add_dest";
        navigate(path, {replace: true});
    };
    const dest = () => {
        let path = "../Mfg_LoginSuccess";
        navigate(path, {replace: true});
    };
    const dest1 = () => {
        let path = "../Home_page";
        navigate(path, {replace: true});
    };
    const dest2 = () => {
        let path = "../manufactor_search";
        navigate(path, {replace: true});
    };
    return (
        <div>
            <nav>
                <div
                    className="navibar"
                    style={{
                        backgroundColor: '#003056'
                    }}>
                    <img src={Navlogo} className="nav-logo"></img>
                    <br></br>
                    <a onClick={dest1}>HomePage</a>
                    <a onClick={dest}>Add Product</a>
                    <a onClick={addDest}>Add Destination</a>
                    <a onClick={dest2}>Search Product</a>
                    <a>About us</a>
                    <a href="/">Logout</a>
                </div>
            </nav>
            <header className="home_header">
                <h2>Counterfeit Product Management</h2>
                <p>Recieve the original product</p>
            </header>
            <div className="home_div">
                <div className="content-div">
                    <h3>
                        Purpose-built for your needs
                    </h3>
                    <p>
                        Supply Scan provides purpose-built tools to support your distinct needs of a
                        decentralized application that maintains an immutable and verifiable record of
                        transactions that confirms that the products are tracked and traced without any
                        intervention.
                    </p>
                </div>
                <div className="content-div">
                    <h3>
                        Why to use it?
                    </h3>
                    <p>Track and trace is often a challenge for today’s supply chains due to
                        outdated paper processes and disjointed data systems that slow down
                        communication. The lack of data compatibility exposes supply chains to problems
                        like visibility gaps, inaccurate supply and demand predictions, manual errors,
                        counterfeiting, and compliance violations. All these can be solved using Supply
                        Scan.</p>
                </div>
            </div>
            <footer>
              <h3>
                Contact us:-
              </h3>
              <div style={{display:'flex'}}>
              <p>Email - abc@gmail.com</p>
              <p>Phone Number-123456798</p>
              </div>
            </footer>
        </div>
    );
}

export default Home_page;

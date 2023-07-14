import Register from "./authpages/Register";
import Login from "./authpages/Login";
import Landingpage from "./authpages/landingpage";
import Test from "./utility/test";
import {Routes, Route} from "react-router-dom";
import Unauthorized from "./authpages/Unauthorized";
import RequireAuth from "./authpages/RequireAuth";
import Manufacturer_afterlogin from "./utility/manufacturer_afterlogin";
import Customer_afterlogin from "./utility/customer_afterlogin";
import Retailer_afterlogin from "./utility/retailer_afterlogin";
import Manufacturer_add_destination from "./utility/manufacturer_add_destination";
import Retailer_updt_prod from "./utility/retailer_updt_prod";
import Manufactor_search from "./utility/manufactor_search";
import Missing from "./utility/Missing";
import MRegister from "./authpages/MRegister";
import RetRegister from "./authpages/RetRegister";
import MLogin from "./authpages/MLogin";
import RetLogin from "./authpages/RetLogin";

import abi from "./contracts/SupplyChain.json";
import {useState, useEffect} from "react";
import {ethers} from "ethers";
import Generator from "./utility/generator";
import Scanner from "./utility/scanner";
import Home_page from "./utility/home_page";
import RHome_page from "./utility/rhome_page";

const ROLES = {
    User: 2001,
    Editor: 1984,
    Admin: 5150,
    Manufacturer: 1000,
    Retailer: 2000
};

function App() {
    const [state, setState] = useState(
        {provider: null, signer: null, contract: null}
    );
    const [account, setAccount] = useState("None");
    useEffect(() => {
        const connectWallet = async () => {
            const contractAddress = "0x45e2C6f04Fd95C84412cB23dF60c0f72ee69a74e";
            const contractABI = abi.abi;
            try {
                const {ethereum} = window;

                if (ethereum) {
                    const account = await ethereum.request({method: "eth_requestAccounts"});

                    window
                        .ethereum
                        .on("chainChanged", () => {
                            window
                                .location
                                .reload();
                        });

                    window
                        .ethereum
                        .on("accountsChanged", () => {
                            window
                                .location
                                .reload();
                        });

                    const provider = new ethers
                        .providers
                        .Web3Provider(ethereum);
                    const signer = provider.getSigner();
                    const contract = new ethers.Contract(contractAddress, contractABI, signer);
                    setAccount(account);
                    setState({provider, signer, contract});
                } else {
                    alert("Please install metamask");
                }
            } catch (error) {
                console.log(error);
            }
        };
        connectWallet();
    }, []);

    return (
        // <main className="App">   {/* <Register /> */}   <Login /> </main>
        <Routes>
            <Route path="/" element={<Landingpage />}/>
            <Route path="/Register" element={<Register />}/>
            <Route path="/Test" element={<Test />}/>
            <Route path="/Login" element={<Login />}/>
            
            <Route path="/MLogin" element={<MLogin />}/>
            <Route path="/MRegister" element={<MRegister />}/>

            <Route path="/RetLogin" element={<RetLogin />}/>
            <Route path="/RetRegister" element={<RetRegister />}/>

            <Route path="/unauthorized" element={<Unauthorized />}/>
            <Route path="/MHome_page" element={<Home_page/>}/>
            <Route path="/RHome_page" element={<RHome_page/>}/>
            <Route element={<RequireAuth allowedRoles = {[ROLES.Manufacturer]} />}>
                  <Route path="/Mfg_LoginSuccess" element={<Manufacturer_afterlogin state = { state} />}/>
                  <Route path="/manufactor_search" element={<Manufactor_search state = {state} />}/>
                  <Route path="/mfg_add_dest" element={<Manufacturer_add_destination state = { state} />}/>
            </Route>

            <Route path="/Cust_LoginSuccess" element={<Customer_afterlogin state = {state} />}/>
            <Route
                element={<RequireAuth allowedRoles = {
                    [ROLES.Retailer]
                } />}>
                <Route
                    path="/Ret_LoginSuccess"
                    element={<Retailer_afterlogin state = {
                        state
                    } />
                    }
                />
                <Route
                    path="/retailer_updt_prod"
                    element={<Retailer_updt_prod state = {
                        state
                    } />
                    }
                />
            </Route>
            <Route path="/generator" element={<Generator />}/>
            <Route path="/scanner" element={<Scanner />}/>

            <Route path="*" element={<Missing />}/>

        </Routes>
    );
}

export default App;

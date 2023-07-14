import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import '../manufacturer_afterlogin.css'
import "./navbarcss/navcss.css";
import Navlogo from "../nav-logo.png"

const LOGIN_URL = "/auth";


const Retailer_updt_prod = ({state}) => {

  const UpdateProd = async (event) => {
    event.preventDefault();
    try{const { contract } = state;
    const batchid=document.querySelector("#batchid").value;
    //const prodname = document.querySelector("#prod_name").value;
    const location = document.querySelector("#location").value;
    const itemCount = document.querySelector("#item_count").value;
    const retailerid = document.querySelector("#retailerid").value;
    console.log(batchid, location, itemCount,contract,retailerid);
    //const amount = { value: ethers.utils.parseEther("0.001") };
    const transaction = await contract.updateProduct(batchid,location,itemCount,retailerid);
    await transaction.wait();
    console.log("Transaction is done");
  }
  catch(e){
    alert("Entered Count Does not Match with Count Distributed. Transaction reverted")
  }
}
let navigate = useNavigate();
const updtprod = () => {
  let path = "../RHome_page";
  navigate(path, { replace: true });
};
const dest1 = () => {
  let path = "../retailer_updt_prod";
  navigate(path, { replace: true });
};
const dest = () => {
  let path = "../Ret_LoginSuccess";
  navigate(path, { replace: true });
};
    
  return (
    <div>
    {/* Navbar */}
    <nav>
        <div className="navibar"style={{
                        backgroundColor: '#003056'
                    }}>
                    <img src={Navlogo} className="nav-logo"></img>
          <a onClick={updtprod}>HomePage</a>
          <a onClick={dest}>Search Product</a>
          <a onClick={dest1}>Update Product</a>
          <a href="/">Logout</a>
        </div>
      </nav>
      <div className="form-div">
           <form onSubmit={UpdateProd}>
              <label htmlFor="batchid">Batch id:</label>
              <input
                type="text"
                id="batchid"
                //ref={batchidRef}
                //autoComplete="off"
                //onChange={(e) => setBatchid(e.target.value)}
                //value={batchid}
                required
              />
              <label htmlFor="retailerid">Retailer id:</label>
          <input
            type="text"
            id="retailerid"
            //ref={batchidRef}
            //autoComplete="off"
            //onChange={(e) => setBatchid(e.target.value)}
            //value={batchid}
            required
          />
              <label htmlFor="location">Location :</label>
              <input
                type="text"
                id="location"
                // onChange={(e) => setLocation(e.target.value)}
                // value={location}
                required
              />
              <label htmlFor="item_count">Item Count:</label>
              <input
                type="number"
                id="item_count"
                // onChange={(e) => setItem_count(e.target.value)}
                // value={item_count}
                required
              />
              <button
              type="submit"
              className="btn btn-primary"
              disabled={!state.contract}
            >
              Update Product
            </button>
  
           
            </form>
      </div>
      </div>
  );
  };

//   return (
//     <>
//       {success ? (
//         <section>
//           <h1>Yolo Form Submitted Successfully</h1>
//           <br />
//           <p>
//             <a href="#">Go to Home</a>
//           </p>
//         </section>
//       ) : (
//         <section>
//           <p
//             ref={errRef}
//             className={errMsg ? "errmsg" : "offscreen"}
//             aria-live="assertive"
//           >
//             {errMsg}
//           </p>
//             <h1>Welcome Retailer : Update Prod Details Below </h1>
//           <form onSubmit={handleSubmit}>
//             <label htmlFor="batchid">Batch id:</label>
//             <input
//               type="text"
//               id="batchid"
//               ref={batchidRef}
//               autoComplete="off"
//               onChange={(e) => setBatchid(e.target.value)}
//               value={batchid}
//               required
//             />

//             <label htmlFor="location">Enter Location:</label>
//             <input
//               type="text"
//               id="location"
//               onChange={(e) => setLocation(e.target.value)}
//               value={location}
//               required
//             />
//             <label htmlFor="count">Item Count:</label>
//             <input
//               type="number"
//               id="count"
//               onChange={(e) => setCount(e.target.value)}
//               value={count}
//               required
//             />
//             <button>Update Product</button>
//           </form>
//         </section>
//       )}
//     </>
//   );
// };
export default Retailer_updt_prod

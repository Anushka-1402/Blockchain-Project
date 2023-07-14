import { useRef, useState, useEffect, useContext } from "react";
import { ethers } from "ethers";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import "./navbarcss/navcss.css";
import Navlogo from "../nav-logo.png"

const LOGIN_URL = "/auth";

const Manufacturer_add_destination = ({ state }) => {

  const addDestination = async (event) => {
    event.preventDefault();
    try{const { contract } = state;
    const batchid = document.querySelector("#batchid").value;
    const location = document.querySelector("#location").value;
    
    const itemCount = document.querySelector("#item_count").value;

    const retailerid = document.querySelector("#retailerid").value;

    console.log(batchid, location, itemCount, contract,retailerid);
    const transaction = await contract.addDestinationbyManufacturer(
      batchid,
      location,
      itemCount,
      retailerid
    );
    await transaction.wait();
    console.log("Transaction is done");}
    catch(e){
      alert("Count Exceeded, can't distribute any more product.");
    }
  };

  const clear_filed=()=> {
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
  };
  let navigate = useNavigate();
  const addAnotherDest = () => {
    let path = "../mfg_add_dest";
    navigate(path, { replace: true });
  };
  const search_product = () => {
    let path = "../manufactor_search";
    navigate(path, { replace: true });
  };
  const addDest = () => {
    let path = "../mfg_add_dest";
    navigate(path, { replace: true });
  };
  const dest = () => {
    let path = "../Mfg_LoginSuccess";
    navigate(path, { replace: true });
  };
  const dest1 = () => {
    let path = "../mHome_page";
    navigate(path, { replace: true });
  };
  const dest2 =()=>{
    let path = "../manufactor_search";
    navigate(path, { replace: true });
  }
  
  return (
    <div>
      {/* Navbar */}
      <nav>
        <div className="navibar" style={{
                        backgroundColor: '#003056'
                    }}>
                    <img src={Navlogo} className="nav-logo"></img>
          <a onClick={dest1}>HomePage</a>
          <a onClick={dest}>Add Product</a>
          <a onClick={addDest}>Add Destination</a>
          <a onClick={dest2}> Search Product</a>
          <a href="#">About us</a>
          <a href="/">Logout</a>
        </div>
      </nav>

      <div className="form-div">
        <form onSubmit={addDestination} required>
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
            Add Destination
          </button>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={!state.contract}
            // onClick={addAnotherDest}
            onClick={clear_filed}
          >
            Add Another Destination
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!state.contract}
            onClick={search_product}
          >
            Search Product
          </button>
        </form>
      </div>
    </div>
  );

  // return (
  //   <>
  //     {success ? (
  //       <section>
  //         <h1>Added destination Successfully</h1>
  //         <br />
  //         <p>
  //           <a href="#">Go to Home</a>
  //         </p>
  //       </section>
  //     ) : (
  //       <section>
  //         <p
  //           ref={errRef}
  //           className={errMsg ? "errmsg" : "offscreen"}
  //           aria-live="assertive"
  //         >
  //           {errMsg}
  //         </p>
  //         <h1>Welcome Manufacturer : Add Supply Info Below</h1>
  //         <form onSubmit={handleSubmit}>
  //           <label htmlFor="batchid">Batch id:</label>
  //           <input
  //             type="text"
  //             id="batchid"
  //               ref={batchidRef}
  //             autoComplete="off"
  //             onChange={(e) => setBatchid(e.target.value)}
  //             value={batchid}
  //             required
  //           />

  //           <label htmlFor="location">Location :</label>
  //           <input
  //             type="text"
  //             id="location"
  //             onChange={(e) => setLocation(e.target.value)}
  //             value={location}
  //             required
  //           />
  //           <label htmlFor="item_count">Item Count:</label>
  //           <input
  //             type="number"
  //             id="item_count"
  //             onChange={(e) => setItem_count(e.target.value)}
  //             value={item_count}
  //             required
  //           />
  //           <button type="Submit">Add Product</button>
  //         </form>
  //         <p>
  //           Need an Account?
  //           <br />
  //           <span className="line">
  //             put router link here
  //             <a href="#">Add Product</a>
  //           </span>
  //         </p>
  //       </section>
  //     )}
  //   </>
  // );
};
export default Manufacturer_add_destination;

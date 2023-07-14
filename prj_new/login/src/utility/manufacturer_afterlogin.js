import { useRef, useState, useEffect, useContext } from "react";
import { ethers } from "ethers";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import Generator from "./generator";
import "../manufacturer_afterlogin.css";
import "./navbarcss/navcss.css";
import Navlogo from "../nav-logo.png"
const LOGIN_URL = "/auth";

const Manufacturer_afterlogin = ({ state }) => {
  const [pop, setPop] = useState(false);
  const [value, setValue] = useState("");

  const addItem = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const batchid = document.querySelector("#batchid").value;
    const prodname = document.querySelector("#prod_name").value;
    const source = document.querySelector("#source_of_manufacturing").value;
    const totalCount = document.querySelector("#total_count").value;
    console.log(prodname, source, totalCount, batchid, contract);
    //const amount = { value: ethers.utils.parseEther("0.001") };
    const transaction = await contract.newItem(
      batchid,
      prodname,
      source,
      totalCount
    );
    await transaction.wait();
    console.log("Transaction is done");
  };

  let navigate = useNavigate();
  const addDest = () => {
    let path = "../mfg_add_dest";
    navigate(path, { replace: true });
  };
  const dest = () => {
    let path = "../manufacturer_afterlogin";
    navigate(path, { replace: true });
  };
  const dest1 = () => {
    let path = "../mhome_page";
    navigate(path, { replace: true });
  };
  const dest2 = () => {
    let path = "../manufactor_search";
    navigate(path, { replace: true });
  };
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

      <div className="manu-div">
        <div className="form-div">
          <form onSubmit={addItem} required>
            <label htmlFor="batchid">Batch id:</label>
            <input
              type="text"
              id="batchid"
              // ref={batchidRef}
              // autoComplete="off"
              // onChange={(e) => setBatchid(e.target.value)}
              // value={batchid}
              required
              onChange={(e) => setValue(e.target.value)}
            />

            <label htmlFor="prod_name">Product Name:</label>
            <input
              type="text"
              id="prod_name"
              // onChange={(e) => setProd_name(e.target.value)}
              // value={prod_name}
              required
            />
            <label htmlFor="source_of_manufacturing">
              Source Of Manufacturing:
            </label>
            <input
              type="text"
              id="source_of_manufacturing"
              // onChange={(e) => setSource_of_manufacturing(e.target.value)}
              // value={source_of_manufacturing}
              required
            />
            <label htmlFor="total_count">Total Item Count:</label>
            <input
              type="number"
              id="total_count"
              // onChange={(e) => setTotal_count(e.target.value)}
              // value={total_count}
              required
            />
            {/* <label htmlFor="location">Location :</label>
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
            /> */}
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!state.contract}
            >
              Add Product
            </button>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={!state.contract}
              onClick={addDest}
            >
              Distribute Products
            </button>
            <button onClick={() => setPop(true)}>Generat the Qr-Code</button>
          </form>
        </div>
        <Generator trigger={pop} setTrigger={setPop} value={value}></Generator>
      </div>
    </div>
  );
};

export default Manufacturer_afterlogin;

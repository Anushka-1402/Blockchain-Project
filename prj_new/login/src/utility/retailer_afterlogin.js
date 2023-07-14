import { useRef, useState, useEffect, useContext } from "react";
import { ethers } from "ethers";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";
import Details from "./retail_details";
import { useNavigate } from "react-router-dom";
import Product_table from "./product_table";
import Navlogo from "../nav-logo.png"
import "./navbarcss/navcss.css";

const LOGIN_URL = "/auth";

const Retailer_afterlogin = ({ state }) => {
  const [productTable, setProductTable] = useState(false);

  const [destination, setDestination] = useState();
  const [destinationRec, setDestinationRec] = useState();
  const [count, setCount] = useState([]);
  const [prod_name, setProd_name] = useState("");
  const [date, setDate] = useState("");
  const [source, setSource] = useState("");

  const searchProduct = async (event) => {
    event.preventDefault();
    try{const { contract } = state;
    const batchid = document.querySelector("#batchid").value;
    setSource(await contract.getProductSource(batchid));
    setProd_name(await contract.getProductName(batchid));
    setDate(await contract.getProductDate(batchid));
    setDate(await contract.getProductDate(batchid));
    const totalCount = await contract.getProductCount(batchid);

    let retailer = [];
    contract
      .getProductRetailers(batchid)
      .then(function (result) {
        retailer = result;
        console.log(retailer); // to check the returned array in console
      })
      .catch(function (error) {
        console.error(error);
      });

    // let destinations=[];
    contract
      .getProductDestinantions(batchid)
      .then(function (result) {
        setDestination(result);
        // destinations = result;
        console.log(destination); // to check the returned array in console
      })
      .catch(function (error) {
        console.error(error);
      });

    // let destinationRec=[];
    contract
      .getProductReceived(batchid)
      .then(function (result) {
        setDestinationRec(result);
        // destinationRec = result;
        console.log(destinationRec); // to check the returned array in console
      })

      .catch(function (error) {
        console.error(error);
      });

    var array = [];

    contract
      .getProductSetCount(batchid)
      .then(function (result) {
        for (var i = 0; i < result.length; i++) {
          array.push(result[i].toString());
        }
        setCount(array);
        console.log(count); // to check the returned array in console
      })
      .catch(function (error) {
        console.error(error);
      });

    console.log("Transaction is done");
  }
  catch(e){
    alert("Product Does not Exists");
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
        <form onSubmit={searchProduct}>
          <label htmlFor="batchid">Batch id:</label>
          <input type="text" id="batchid" required />
          <button onClick={() => setProductTable(true)}>Search Product</button>
        </form>
        <button onClick={dest1}> Update Product</button>
      </div>
      <Details
        trigger={productTable}
        setTrigger={setProductTable}
        product_name={prod_name}
        product_date={date}
        source={source}
        date={date}
      ></Details>
    </div>
  );
};
export default Retailer_afterlogin;

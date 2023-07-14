import { useRef, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";
import logo from "../logo.png"

const LOGIN_URL = "/auth";

const Landingpage = () => {

  let navigate = useNavigate();
  const mfg = () => {
    let path = "./MRegister";
    navigate(path,{replace:true});
  };
  const ret = () => {
    let path = "./RetRegister";
    navigate(path,{replace:true});
  };
  const cust = () => {
    let path = "../Cust_LoginSuccess";
    navigate(path,{replace:true});
  };
  return (
    <div style={{display:"flex"}}>
    <img src={logo} style={{height:'10rem',marginTop:'10rem',marginLeft:'4rem'}}/>
    <div className="form-div" style={{marginTop:'9rem'}}>
      <h2 style={{textAlign:'center', padding:'1.5rem'}}>Please Select a Role</h2>
      <div >
      <button onClick={mfg} style={{margin:'0.5rem'}}>Manufacturer</button>
      <button onClick={ret} style={{margin:'0.5rem'}}>Retailer</button>
      <button onClick={cust}>Customer</button>
      </div>
    </div>
    </div>
  );
};
export default Landingpage;

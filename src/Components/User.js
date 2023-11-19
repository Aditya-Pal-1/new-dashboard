import React, { useState } from "react";
import "../App.css";
import call from "./Images/Group 46@2x.png";
import motro from "./Images/moptro logo@2x.png";
import { IoIosSearch } from "react-icons/io";
import data from "./data.json";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { CiUser } from "react-icons/ci";
import { CiHome } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

export default function User() {
  const [search, setsearch] = useState("");
  const navigate = useNavigate();
  return (
    <div className="mainhome">
      <div className="homepage">
        <img src={call} alt="" className="callimage" />
      </div>
      <div className="motoro">
        <h6>4</h6>
        <img src={motro} alt="" />
      </div>
      <div className="search">
        <input
          className="searchinput"
          onChange={(e) => setsearch(e.currentTarget.value)}
          value={search}
          type="text"
          placeholder="Search with name"
        />
        <span>
          <IoIosSearch color="white" className="searchicon" />
        </span>
      </div>
      <div className="data">
        {
        data
          .filter((val) => {
            if (search == "") {
              return val;
            } else if (val.Name.toLowerCase().includes(search.toLowerCase())) {
              return val;
            }
          })
          .map((data) => {
            return (
                <div key={data.id} className="data-div">
                    <h4 className="h44">EMP ID : <span style={{color:"beige"}}> {data.EMPID}</span></h4>
                    <h4 className="h44">Name : <span style={{color:"beige"}}> {data.Name}</span></h4>
                    <h4 className="h44">DOB : <span style={{color:"yellow"}}>{data.DOB}</span></h4>
                    <h4 className="h44">Role : <span style={{color:"#36A546"}}>{data.Role}</span></h4>
                </div>
            );
          })}
      </div>
      <div>
      <div className='iconsFixed' >
           <div onClick={()=>navigate("/home")} ><CiHome className='homeicons'/></div> 
            <div>< CiUser  className='homeicons'/></div>
        </div>
      </div>
    </div>
  );
}

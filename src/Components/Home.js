import React, { useState } from 'react';
import '../App.css';
import call from './Images/Group 46@2x.png'
import motro from './Images/moptro logo@2x.png';
import { CiUser } from "react-icons/ci";
import { CiHome } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';


export default function Home() {

    const navigate = useNavigate();
    // let color = 'transparent linear-gradient(262deg, #0F2323 0%, #1f3a3a 40%) 0% 0% no-repeat padding-box';
    // const [bg, setbg] = useState(color);
    // const handlecolor =()=>{
    //     let color = '#38383885';
    //     setbg(color);
    // }

    const handleuser =()=>{
        navigate('/user');
    }

  return (
    <div className='mainhome' >
        <div className='homepage'>
            <img src={call} alt="" className='callimage' />
        </div>
        <div className='motoro'>
            <h6>4</h6>
            <img src={motro} alt="" />
        </div>
        <div className='productdashboard'> 
            <span >Employee Productivity Dashboard</span>
        </div>
        <div className='product'>
            <div className='product1'>
                <div>
                    <h4 className='week' >Productivity on Monday</h4>
                    <div className='monday'></div>
                </div>
                <h5 className='percentageColor'>4%</h5>
            </div>
            <div className='product1' >
                <div>
                    <h4  className='week'>Productivity on Tuesday</h4>
                    <div className='tuesday'></div>
                </div>
                <h5 className='percentageColor' >92%</h5>
            </div>

            <div  className='product1'>
                <div>
                    <h4  className='week'>Productivity on Wednesday</h4>
                    <div className='wednesday'></div>
                </div>
                <h5 className='percentageColor'>122%</h5>
            </div>

            <div  className='product1'>
                <div>
                    <h4  className='week'>Productivity on Thursday</h4>
                    <div className='thursday'></div>
                </div>
                <h5 className='percentageColor'>93%</h5>
            </div>

            <div  className='product1'>
                <div>
                    <h4 className='week'>Productivity on Friday</h4>
                    <div className='friday'></div>
                </div>
                <h5 className='percentageColor'>89%</h5>
            </div>
            <div  className='product1'>
                <div>
                    <h4 className='week'>Productivity on Saturday</h4>
                    <div className='saturday'></div>
                </div>
                <h5 className='percentageColor'>98%</h5>
            </div>
        </div>
        <div className='icons'>
           <div ><CiHome className='homeicons'/></div> 
            <div onClick={handleuser} ><CiUser  className='homeicons'/></div>
        </div>
    </div>
  )
}

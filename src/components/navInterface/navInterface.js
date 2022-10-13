import React from 'react';
import "./navInterface.css"
import {FaBars}from 'react-icons/fa';
import union from "../../assets/Union.png";
import lendsqr from  "../../assets/lendsqr.png";
import {NavLink} from "react-router-dom";
import {FaToolbox, FaHome, FaUser} from 'react-icons/fa';
import Vector from "../../assets/Vector.png";
import search from "../../assets/search.png";
import person3 from "../../assets/person3.png"

function NavInterface({children}) {

    let usercredentials =  JSON.parse(localStorage.getItem("user-info"))

  return (
    <div className="interface-container">
        <input type="checkbox" id="check" className="headerinput"/>
       
        <div className="header">

            <div className=' nav-logo'>
                <div className='logo'>
                    <img src={union} alt="" className='logo1'/>
                    <img src={lendsqr} alt=""  className='logo2'/>
                </div>
                
                <label htmlFor="check" className="headerlabel">
                    <FaBars className="headericon" id="sidebar_btn"/>
                </label>

                <div className="search">
                    <input type="text" placeholder='Search for anything' className='nav-input' />
                    <span><img src={search} alt="" /> </span>
                </div>

            </div>

            <div className='nav-user'>
                <div className='nav-text'>Docs</div>
                <img src={Vector} alt=" " />
                <div className='user-profile'>
                    <span><img src={person3} alt="" /></span>
                    <div className='nav-name'>{usercredentials.name}</div>
                </div>
            </div>
        </div>


        <div className="sidebar" >
                <ul  >
                    <li >
                        <p><FaToolbox className="sidebar-icons" /><span>Switch Organization</span></p>
                    </li>
                    <li >  
                        <NavLink to='/no_page_yet' exact className="sidebar-navlink sidebarsub"><FaHome className="sidebar-icons"/><span>Dashboard</span></NavLink>
                    </li>
                    <li><p>CUSTOMERS</p></li>
                    <li >  
                        <NavLink to='/users'exact className="sidebar-navlink sidebarsub"><FaUser className="sidebar-icons"/><span>Users</span></NavLink>
                    </li>
                    <li >  
                        <NavLink to='/no_page_yet'exact className="sidebar-navlink sidebarsub"><FaHome className="sidebar-icons"/><span>Guarantors</span></NavLink>
                    </li>
                    <li >  
                        <NavLink to='/no_page_yet'exact className="sidebar-navlink sidebarsub"><FaHome className="sidebar-icons"/><span>Loans</span></NavLink>
                    </li>
                    <li >  
                        <NavLink to='/no_page_yet'exact className="sidebar-navlink sidebarsub"><FaHome className="sidebar-icons"/><span>Decision Models</span></NavLink>
                    </li>
                    <li >  
                        <NavLink to='/no_page_yet'exact className="sidebar-navlink sidebarsub"><FaHome className="sidebar-icons"/><span>Savings</span></NavLink>
                    </li>
                    <li >  
                        <NavLink to='/no_page_yet'exact className="sidebar-navlink sidebarsub"><FaHome className="sidebar-icons"/><span>Loan Requests</span></NavLink>
                    </li>
                    <li >  
                        <NavLink to='/no_page_yet'exact className="sidebar-navlink sidebarsub"><FaHome className="sidebar-icons"/><span>Whitelist</span></NavLink>
                    </li>
                    <li >  
                        <NavLink to='/no_page_yet'exact className="sidebar-navlink sidebarsub"><FaHome className="sidebar-icons"/><span>Karma</span></NavLink>
                    </li>

                    <li><p>BUSINESSES</p></li>
                    <li >  
                        <NavLink to='/no_page_yet'exact className="sidebar-navlink sidebarsub"><FaHome className="sidebar-icons"/><span>Organization</span></NavLink>
                    </li>
                    <li >  
                        <NavLink to='/no_page_yet'exact className="sidebar-navlink sidebarsub"><FaHome className="sidebar-icons"/><span>Loan Products</span></NavLink>
                    </li>
                    <li >  
                        <NavLink to='/no_page_yet'exact className="sidebar-navlink sidebarsub"><FaHome className="sidebar-icons"/><span>Savings Products</span></NavLink>
                    </li>
                    <li >  
                        <NavLink to='/no_page_yet'exact className="sidebar-navlink sidebarsub"><FaHome className="sidebar-icons"/><span>Fees and Charges</span></NavLink>
                    </li>
                    <li >  
                        <NavLink to='/no_page_yet'exact className="sidebar-navlink sidebarsub"><FaHome className="sidebar-icons"/><span>Transactions</span></NavLink>
                    </li>
                    <li >  
                        <NavLink to='/no_page_yet'exact className="sidebar-navlink sidebarsub"><FaHome className="sidebar-icons"/><span>Services</span></NavLink>
                    </li>
                    <li >  
                        <NavLink to='/no_page_yet'exact className="sidebar-navlink sidebarsub"><FaHome className="sidebar-icons"/><span>Service Account</span></NavLink>
                    </li>
                    <li >  
                        <NavLink to='/no_page_yet'exact className="sidebar-navlink sidebarsub"><FaHome className="sidebar-icons"/><span>Settlements</span></NavLink>
                    </li>
                    <li >  
                        <NavLink to='/no_page_yet'exact className="sidebar-navlink sidebarsub"><FaHome className="sidebar-icons"/><span>Reports</span></NavLink>
                    </li>
                   

                    <li><p>SETTINGS</p></li>
                    <li >  
                        <NavLink to='/no_page_yet'exact className="sidebar-navlink sidebarsub"><FaHome className="sidebar-icons"/><span>Prefernces</span></NavLink>
                    </li>
                    <li >  
                        <NavLink to='/no_page_yet'exact className="sidebar-navlink sidebarsub"><FaHome className="sidebar-icons"/><span>Fees and Pricing</span></NavLink>
                    </li>
                    <li >  
                        <NavLink to='/no_page_yet'exact className="sidebar-navlink sidebarsub"><FaHome className="sidebar-icons"/><span>Audit logs</span></NavLink>
                    </li>


                </ul>
                
               
               
            </div>

        <div className="content">
            {children}
        </div>  
    </div>
  )
}

export default NavInterface
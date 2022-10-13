import React,{useState, useEffect} from 'react';
import "./userDetail.css";
import { NavLink, useParams } from 'react-router-dom';
import NavInterface from '../../components/navInterface/navInterface';
import backarrow from "../../assets/backarrow.png";
import star1 from "../../assets/star1.png";
import star2 from "../../assets/star2.png";
import line from "../../assets/Line.png"
import ProfileInfo from './profileInfo';

function UserDetail() {
  const {id} = useParams();
  const [singleuser, setSingleuser] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    const getUser = async () => {
        setLoading(true);
        let response = await fetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`);
        response= await response.json();
       //  console.log(response.acf)
        setSingleuser(response);
        setLoading(false);
    }
    getUser();
  }, [id]);

  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) =>{
      setToggleState(index);
  }
  return (
    <div>
      <NavInterface>
        <div className='details-container'>
          <div className='top-div'><img src={backarrow} alt="" /><span><NavLink to="/users" className="back">Back to users</NavLink> </span></div>
         
          <div className='userdetails'>
            <div className="text">User Details</div> 
            <div className='btn'>
              <button>Blacklist user</button>
              <button>activate user</button>
            </div>
          </div>

          <div className='detailuser-profile'>
            <div className="top">
              {singleuser.profile && <img src={singleuser.profile.avatar} alt="" className='detail-avatar' />}
              {/* <span><img src={person3} alt="" /> </span> */}

              {
                singleuser.profile && 
                <div className="detailname">
                  <p>{singleuser.profile.firstName} {singleuser.profile.lastName}</p>
                  <p>{singleuser.accountNumber}</p>
                </div>
              }

              <div className='line'><img src={line} alt="" /> </div>

              <div className='user-tiers'>
                <p>User's Tier</p>
                {singleuser.accountBalance > 500 ? (
                  <div>
                  <img src={star1} alt=" "/>
                  <img src={star1} alt=" "/>
                  <img src={star1} alt=" "/>
                </div>
                ) : (
                  <div>
                  <img src={star1} alt=" "/>
                  <img src={star2} alt=" "/>
                  <img src={star2} alt="" />
                </div>
                )}
                
              </div>

              <div className='line'><img src={line} alt="" /> </div>

              <div className='money'>
                <p>N{singleuser.accountBalance}</p>
                {singleuser.profile && <p>{singleuser.profile.bvn}</p>
                } 
              </div>
            </div>

            {/* code to toggle here */}
            <div className="bloc-tabs">
                <div className={toggleState ===1 ?"tabs active-tabs" : "tabs"} onClick={()=>toggleTab(1)}>General Details</div>
                <div className={toggleState ===2 ?"tabs active-tabs" : "tabs"} onClick={()=>toggleTab(2)}>Documents</div>
                <div className={toggleState ===3 ?"tabs active-tabs" : "tabs"} onClick={()=>toggleTab(3)}>Bank Details</div>
                <div className={toggleState ===4 ?"tabs active-tabs" : "tabs"} onClick={()=>toggleTab(4)}>Loans</div>
                <div className={toggleState ===5 ?"tabs active-tabs" : "tabs"} onClick={()=>toggleTab(5)}>Savings</div>
                <div className={toggleState ===6 ?"tabs active-tabs" : "tabs"} onClick={()=>toggleTab(6)}>App and System</div>
            </div>
          </div>

          <div className='toggle-contents'>
            {/* code for toggle state cotent below */}
            <div className="content-tabs">
                <div className={toggleState ===1 ?"content-tab active-content-tab" : "content-tab"}>
                    {/* want to display the General details here */}
                    <div className='toggle-container'>
                      <ProfileInfo singleuser={singleuser}/>
                    </div>
                </div>

                <div className={toggleState === 2 ?"content-tab active-content-tab" : "content-tab"}>
                    {/* want to display the documents content here */}
                    <p className='other-tabs-content'>contents are coming up soon. stay blessed </p>
                </div>
                <div className={toggleState === 3 ?"content-tab active-content-tab" : "content-tab"}>
                    {/* want to display the documents content here */}
                    <p className='other-tabs-content'>contents are coming up soon. stay blessed </p>
                </div>
                <div className={toggleState === 4 ?"content-tab active-content-tab" : "content-tab"}>
                    {/* want to display the documents content here */}
                    <p className='other-tabs-content'>contents are coming up soon. stay blessed </p>
                </div>
                <div className={toggleState === 5 ?"content-tab active-content-tab" : "content-tab"}>
                    {/* want to display the documents content here */}
                    <p className='other-tabs-content'>contents are coming up soon. stay blessed </p>
                </div>
                <div className={toggleState === 6 ?"content-tab active-content-tab" : "content-tab"}>
                    {/* want to display the documents content here */}
                    <p className='other-tabs-content'>contents are coming up soon. stay blessed </p>
                </div>
              </div>
          </div>

        </div>
      </NavInterface>
    </div>
  )
}

export default UserDetail
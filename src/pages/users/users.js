import React, { useState, useEffect } from 'react';
import NavInterface from '../../components/navInterface/navInterface';
import "./users.css";
import axios from "axios";
import ellipse from "../../assets/Ellipse.png"
import person1 from "../../assets/person1.png";
import person2 from "../../assets/person2.png";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import bar from "../../assets/bar.png";
import usericon1 from "../../assets/usericon1.png";
import usericon2 from "../../assets/usericon2.png";
import edit from "../../assets/edit.png"
import moment from "moment"
import { NavLink } from 'react-router-dom';

import ReactPaginate from "react-paginate";
import Popup from '../../components/modal/popup';


function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() =>{
    const fetchUsers = async () =>{
        setLoading(true);
        const res = await axios.get('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users');
        setUsers(res.data);
        console.log(res.data)
        setLoading(false);
    }
    fetchUsers()
  }, []);

  const [pageNumber, setPageNumber] = useState(0);
  const imagePerPage = 10;
  const pagesVisited = pageNumber * imagePerPage;

  const pageCount = Math.ceil(users.length / imagePerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
    window.scrollTo(0, 120);
  };

  const [models ,setModels] = useState(false);
  const [tempData, setTempdata] = useState([])

  const getData = (userName) => {
    let tempData = [userName]
    console.log(tempData)
  }
  return (
    <div>
        <NavInterface>
            <div className='users-container'>
              <h4>Users</h4>

              <div className='user-card'>
                <div className='card'>
                    <div className='card-icon'>
                      <img src={ellipse} alt="" className='bg-img' />
                      <span><img src={person1} alt="" className='img1'/><img src={person2} alt="" className='img2'/> </span>
                    </div>

                    <div className='text'>users</div>
                    <div className='total-users'>{users.length}</div>
                </div>

                <div className='card'>
                    <div className='card-icon'>
                      <img src={ellipse} alt="" className='bg-img' />
                      <span><img src={usericon1} alt="" className='img1'/> </span>
                    </div>

                    <div className='text'>active users</div>
                    <div className='total-users'>{users.length}</div>
                </div>

                <div className='card'>
                    <div className='card-icon'>
                      <img src={ellipse} alt="" className='bg-img' />
                      <span><img src={icon1} alt="" className='img1'/><img src={usericon2} alt="" className='img2'/> </span>
                    </div>

                    <div className='text'>users with loans</div>
                    <div className='total-users'> {(users.length) - 20} </div>
                </div>

                <div className='card'>
                    <div className='card-icon'>
                      <img src={ellipse} alt="" className='bg-img' />
                      <span><img src={usericon2} alt="" className='img1'/><img src={icon2} alt="" className='img2'/> </span>
                    </div>

                    <div className='text'>users with savings</div>
                    <div className='total-users'>{(users.length) - 80}</div>
                </div>
              </div>
              
              <div className='users-data'>
                <table >
                  <tbody>
                      <tr>
                        <th>Organization <span><img src={bar} alt="" /> </span></th>
                        <th>username <span><img src={bar} alt="" /> </span></th>
                        <th>email <span><img src={bar} alt="" /> </span></th>
                        <th>date joined <span><img src={bar} alt="" /> </span></th>
                        <th>status <span><img src={bar} alt="" /> </span></th>
                        <th></th>
                      </tr>


                      {users.slice(pagesVisited, pagesVisited + imagePerPage).map((user, i)=>(
                        <>
                          <tr key={i}>
                            <td className='post-topic'>{user.orgName}</td>
                            <td>{user.userName}</td>
                            <td className='name'>{user.email}</td>
                            <td>
                              {moment(user.createdAt).format("MMM")} {moment(user.createdAt).format("DD")}, {moment(user.createdAt).format("YYYY")}  {moment(user.createdAt).format("hh:00 A")}
                            </td>
                          
                            <td className='status'>
                              {moment(user.lastActiveDate).format("YYYY") < new Date().getFullYear() && moment(user.lastActiveDate).format("YYYY")? (
                                <div>
                                  {moment(user.lastActiveDate).format("YYYY") < (new Date().getFullYear() - 20) && moment(user.lastActiveDate).format("YYYY") ? (
                                    <div className='status-blacklisted'>blacklisted</div>
                                  ) : (<div className='status-inactive'>inactive</div>)}
                                
                                </div>)  : (
                                <div>
                                  {moment(user.lastActiveDate).format("YYYY") > (new Date().getFullYear() + 40) && moment(user.lastActiveDate).format("YYYY") ? (
                                    <div className='status-active'>active</div>
                                  ): (
                                    <div className='status-pending'>pending</div>
                                  )}
                                </div>
                                )
                              }
                            </td>
                            <td>
                              <NavLink to={`/users/${user.id}`} className="edit">
                                <img src={edit} alt="" onClick={() => getData(user.userName)}/>
                              </NavLink >

                              {/* <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                                <h3>My-New Dawn Account Details</h3>

                                <div className="popup-account" style={{paddingTop:"20px"}}>Account Name : <span> MY NEWDAWN EDUCATIONAL CONSULT</span></div>
                                <div className="popup-account">Account Number : <span>0083458557</span></div>
                                <div className="popup-account">Bank Name : <span> STERLING BANK</span></div>

                            </Popup> */}
                            </td> 
                          </tr> 
                          
                        </>
                      ))}

                        <ReactPaginate
                              previousLabel={"<"}
                              nextLabel={">"}
                              breakLabel={'...'}
                              pageCount={pageCount}
                              onPageChange={changePage}
                              marginPagesDisplayed={3}
                              pageRangeDisplayed={6}
                              containerClassName={"paginationBttns"}
                              previousLinkClassName={"previousBttn"}
                              nextLinkClassName={"nextBttn"}
                              activeClassName={"paginationActive"}
                            />
                  </tbody>
                </table>
              </div>
            </div>
        </NavInterface>
    </div>
  )
}

export default Users
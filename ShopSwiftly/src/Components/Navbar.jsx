import React, { useContext, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import menuIcon from "../Icons/menu.svg";
import ProfilePic from '../Images/elssie.jpg';
import Axios from '../../src/Static/Axios';
import { UserContext } from '../Static/UserContext';
import { Modal, Button } from 'react-bootstrap'; // Importing React Bootstrap components

function Navbar() {
    const { user, setUser } = useContext(UserContext);
    const [modalShow, setModalShow] = useState(false); // State variable to control modal visibility
    const [eventData, setEventData] = useState(null); // State variable to store event data

    const logout = () => {
        localStorage.removeItem("Auth_info");
        setUser(null);
    };

    const handleNotificationClick = async (notificationId) => {
        try {
            // Make a POST request to the 'getTaggedEvent' endpoint with the notificationId
            let data = { notificationId };
            const response = await Axios.post('/getTaggedEvent', data);
            console.log("Event data:", response.data);
            setEventData(response.data[0]); // Update eventData state with response data
                console.log(eventData,"eventdata")
            setModalShow(true); // Show the modal
        } catch (error) {
            console.error("Error fetching event data:", error);
        }
    };

    return (
        <>
            <div className='Nav'>
                <div className='rightNav'>
                    <div className='dropdown'>
                        <span className='dropbtn' style={{ color: 'white' }}>notification</span>
                        <div className='dropdown-content'>
                            {user && user.notification && user.notification.length > 0 ? (
                                <ul>
                                    {user.notification.map((notification, index) => (
                                        <li key={index}>
                                            <Link
                                                to={notification.link}
                                                style={{ textDecoration: 'none', color: 'white' }}
                                                onClick={() => handleNotificationClick(notification.id)}
                                            >
                                                {notification.addedBy} Tagged in a memory
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <span>No notifications</span>
                            )}
                        </div>

                    </div>
                    <div className='Profile'>
    {user ? (
        <button className='user_profile'><img src={ProfilePic} alt="" /><span style={{color:'white'}}>{user.user && user.user.UserName}</span></button>
    ) : (
        <button style={{color:"white"}}>Account</button>
    )}
    <div className='profileDropdown'>
        {user ? (
            <ul>
                <li><Link onClick={() => logout()}>Logout</Link></li>
            </ul>
        ) : (
            <ul style={{color:'white'}}>
                <li style={{color:'white'}}><Link to="/signin">Sign In</Link></li>
                <li style={{color:'white'}}><Link to="/signup">Sign Up</Link></li>
            </ul>
        )}
    </div>
</div>

                    
                </div>
            </div>
            {/* Modal component */}
            <Modal show={modalShow} onHide={() => setModalShow(false)} >
                <Modal.Header closeButton style={{backgroundColor:'black',color:'white'}}>
                    <Modal.Title>Tagged Memory</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{backgroundColor:'black',color:'white'}}>
                    {eventData && (
                        <div>
                            {/* Display event data here */}
                            <p>Memory Script: <i>{eventData.title}</i></p>
                            <p>Date: {eventData.date}</p>
                            {/* Add more fields as needed */}
                        </div>
                    )}
                </Modal.Body>
              
            </Modal>
        </>
    );
}

export default Navbar;

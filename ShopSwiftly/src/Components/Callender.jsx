import React, { useState, useContext, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./cal.css";
import { UserContext } from '../Static/UserContext';
import Axios from '../Static/Axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { IoMdShare } from "react-icons/io";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Callender = () => {
    const [selectedLocation, setSelectedLocation] = useState(null);

    const handleClick = (e) => {
        setSelectedLocation(e.latlng);
        onSelectLocation(e.latlng); // Pass the selected location to the parent component
    };
    const { user, setUser } = useContext(UserContext);
    let userData = localStorage.getItem('Auth_info');
    userData = userData ? JSON.parse(userData) : null;
    const ImgUrl = 'http://localhost:3000/Images/events';
    const [selectedDate, setSelectedDate] = useState(userData ? new Date(userData.user.dob) : new Date());
    const [eventName, setEventName] = useState("");
    const [events, setEvents] = useState([]);
    const [users, setUsers] = useState([]);
    const [showUserList, setShowUserList] = useState(false); 
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [image, setImage] = useState(null); // State to store the image data
    const [selectedEvent, setSelectedEvent] = useState(null); // State to track the selected event
    const [showModal, setShowModal] = useState(false); // State to control modal visibility
    const [searchQuery, setSearchQuery] = useState(""); // State to store search query

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    useEffect(() => {
        try {
            let userData = localStorage.getItem('Auth_info');
            userData = userData ? JSON.parse(userData) : null;
            let userId = userData.user._id;
            let data = {
                userId
            };
        
            Axios.post('/getEvent', data).then((response)=>{
                if(response && response.data){
                    console.log(response.data,"events--")
                    setEvents(response.data);
                } else {
                    console.log("No events found or error occurred");
                }
            }); 

            Axios.get('/getAllUsers').then((users)=>{
                if(users && users.data){
                    console.log(users.data)
                    setUsers(users.data);
                }
            });          
        } catch (error) {
            console.log(error);
        }
    }, []);

    const Date_Click_Fun = (date) => {
        setSelectedDate(date);
    };

    const Event_Data_Update = (event) => {
        setEventName(event.target.value);
    };

    const handleImageChange = (event) => {
        setImage(event.target.files[0]); // Store the selected image in the state
    };

    const Create_Event_Fun = () => {
        let userId = userData.user._id;
        if (selectedDate && eventName) {
            const formData = new FormData();
            formData.append('image', image); // Append the image data to the form data
            formData.append('id', new Date().getTime());
            formData.append('date', selectedDate);
            formData.append('title', eventName);
            formData.append('userId', userId);
            formData.append('taggedUsers', selectedUsers.map(user => user._id));
            formData.append('userName', selectedUsers.map(user=>user.UserName));
            formData.append('addedBy',user.user.UserName)
            Axios.post('/Addevent', formData).then((response)=>{
                if(response){
                    console.log(response)
                    setEvents([...events, response.data]);
                } else {
                    console.log("Error while inserting event");
                }
            }); 
        }
    };

    const Update_Event_Fun = (eventId, newName) => {
        const updated_Events = events.map((event) => {
            if (event.id === eventId) {
                return {
                    ...event,
                    title: newName,
                };
            }
            return event;
        });
        setEvents(updated_Events);
    };

    const Delete_Event_Fun = (eventId) => {
        const updated_Events = events.filter((event) => event.id !== eventId);
        setEvents(updated_Events);
    };

    const handleUserTag = () => {
        setShowUserList(true); 
    };

    const selectUser = (userId) => {
        const user = users.find(user => user._id === userId);
        setSelectedUsers(prevSelectedUsers => [...prevSelectedUsers, user]);
    };

    const removeUser = (userId) => {
        setSelectedUsers(prevSelectedUsers => prevSelectedUsers.filter(user => user._id !== userId));
    };

    const showImageModal = (event) => {
        setSelectedEvent(event);
        handleShow(); // Show modal when image is clicked
    };

    const hideImageModal = () => {
        setSelectedEvent(null);
        handleClose(); // Hide modal when modal is closed
    };

    const shareViaWhatsApp = (selectedEvent) => {
        if (selectedEvent) {
            const shareText = `Check out this event: ${selectedEvent.title} on ${new Date(selectedEvent.date).toDateString()}`;
            const shareUrl = `https://example.com/events/${selectedEvent._id}`; // Replace with your actual URL
            const whatsappLink = `https://api.whatsapp.com/send?text=${selectedEvent.title}`;
            console.log("WhatsApp sharing", selectedEvent);
            window.open(whatsappLink, '_blank');
        }
    };
    

    const shareViaInstagram = (selectedEvent) => {
        if (selectedEvent) {
            const shareUrl = `https://www.instagram.com/?hl=en`;
            window.open(shareUrl, '_blank');
        }
    };

    const shareViaTelegram = () => {
        if (selectedEvent) {
            const shareUrl = `https://web.telegram.org/k/`;
            window.open(shareUrl, '_blank');
        }
    };

    // Filtering events based on search query
  // Filtering events based on search query
const filteredEvents = events.filter(event =>
    event.title && event.title.toLowerCase().includes(searchQuery.toLowerCase())
);


    return (
        <div className="app">
                        
            {user ?  <h1> <span style={{color:'yellow'}}>Your Date of Birth</span>:{selectedDate.toDateString()}</h1> : <h1>Life Planner</h1>}
            <div className="container">
                <div className="calendar-container">
                    <Calendar
                        value={selectedDate}
                        onClickDay={Date_Click_Fun}
                        tileClassName={({ date }) =>
                            selectedDate &&
                            date.toDateString() === selectedDate.toDateString()
                                ? "selected"
                                : events.some(
                                    (event) =>
                                        new Date(event.date).toDateString() ===
                                        date.toDateString(),
                                )
                                    ? "event-marked"
                                    : ""
                        }
                    />
                </div>
                <div className="event-container">
                    {selectedDate && (
                        <div className="event-form">
                            <h2>Create Memory</h2>
                            <p>Selected Date: {selectedDate.toDateString()}</p>
                            <input
                                type="text"
                                placeholder="Note Your memory"
                                value={eventName}
                                onChange={Event_Data_Update}
                                style={{width:'430px'}}
                            />
                            <input
                                type="file"
                                onChange={handleImageChange} // Handle image change
                                style={{width:'200px'}}
                            />
                            <button
                                className="create-btn"
                                onClick={Create_Event_Fun}
                            >
                                Add Memory
                            </button>
                        </div>
                    )}
                </div>
                {  (
                <div className="user-list">
                    <h3 style={{color:'red'}}>Tag people</h3>
                    <select onChange={(e) => selectUser(e.target.value)} className="tagPeople">
                        <option value="">Tag People</option>
                        {users.map((user) => (
                            <option key={user._id} value={user._id}>{user.UserName}</option>
                        ))}
                    </select>
                    <div>
                        <h4>Selected Users:</h4>
                        <ul className="userSelected">
                            {selectedUsers.map(user => (
                                <li key={user._id} style={{color:'white'}}>
                                   <span> {user.UserName} </span>
                                    <button className="remove_Button" onClick={() => removeUser(user._id)}>Remove</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
            </div>
            {/* Search input for filtering events */}
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search events by keywords..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="searchBoxE"
                />
            </div>

            <div className="event-cards">
                {filteredEvents && filteredEvents.length > 0 && filteredEvents.map((event) =>
                    <div key={event.id} className="event-tile">
                        <div className="event-card">
                            <div className="event-card-header">
                                <div className="event-actions">
                                    <button
                                        className="update-btn"
                                        onClick={() =>
                                            Update_Event_Fun(
                                                event.id,
                                                prompt("ENTER NEW TITLE"),
                                            )
                                        }
                                        style={{backgroundColor:'black',color:'white'}}
                                        title="Click here to update  memory"
                                    >
                                        Update
                                    </button>
                                    <button 
                                        className="delete-btn" 
                                        style={{backgroundColor:'green',color:'white'}} 
                                        title="add image"
                                        onClick={() => showImageModal(event)} // Show image modal on click
                                    >
                                        Image
                                    </button>
                                    <div>
                                        <button onClick={()=>shareViaWhatsApp(event)}><IoMdShare /> <FaWhatsappSquare/> </button>
                                        <button onClick={()=>shareViaInstagram(event)}> <IoMdShare />  <FaInstagramSquare/> </button>
                                      
                                    </div>
                                </div>
                            </div>
                            <div className="event-card-body">
                                <p className="event-title">{event.title}</p>
                                <span className="event-date">{new Date(event.date).toDateString()}</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {/* Image Modal */}
            <Modal show={showModal} onHide={hideImageModal} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title style={{textAlign:'center'}}>Memory Image</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedEvent && (
                        <img className="evnt_Img" src={`${ImgUrl}/${selectedEvent._id}.jpg`} alt="Event" />
                    )}
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Callender;

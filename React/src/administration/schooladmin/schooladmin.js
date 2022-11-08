import React, { useEffect, useState } from "react";
import '../administration.css';
import add from '../../assets/images/plus.png';
import { populateTables } from '../administration';
import validateSession from "../../session/session";
import axios from "axios";
import deleteIcon from '../../assets/images/delete.png';
import confirmIcon from '../../assets/images/tick.png';
import discardIcon from '../../assets/images/close.png';
import edit from '../../assets/images/edit.png';
function SchoolAdmin() {
    const [clubs, setClubs] = useState([]);
    const [posts, setPosts] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [business, setBusiness] = useState([]);
    useEffect(() => {
        validateSession('SchoolAdmin');
        document.getElementsByClassName('nav-item active')[0].classList.remove('active');
        document.getElementById('authenticationTab').classList.add('active');
       getAllCustomers();
       getAllBusinessOwner();
       getAllPosts();
       getAllClubs();
    }, []);

    const getAllCustomers=() => {
        axios.get("http://localhost/wdm_phase3/React/src/api/getcustomers.php")
        .then(res=> {
            console.log(res.data)
            setCustomers(res.data)
        })
    }

    const getAllBusinessOwner=() => {
        axios.get("http://localhost/wdm_phase3/React/src/api/getbusinessowners.php")
        .then(res=> {
            console.log(res.data)
            setBusiness(res.data)
        })
    }

    const getAllPosts=() => {
        axios.get("http://localhost/wdm_phase3/React/src/api/getposts.php")
        .then(res=> {
            console.log(res.data)
            setPosts(res.data)
        })
    }

    const getAllClubs=() => {
        axios.get("http://localhost/wdm_phase3/React/src/api/getclubs.php")
        .then(res=> {
            console.log(res.data)
            setClubs(res.data)
        })
    }
    

    return (
        <section className='administration-bg hide-section'>
            {/* Header section title */}
            <div className="container" id="heading-container">
                <div className="font-oswald heading"> School Admin  </div>
            </div>

            {/* School admin section tables structure  */}
            <div className="manage-container d-flex flex-direction-column align-items-around justify-evenly">

                {/* Horizontal row section containing multiple tables  */}
                <div className="d-flex flex-direction-row justify-around section-container">

                    {/* Manage Student table  */}
                    <div className="d-flex flex-direction-column align-items-start section-content"><span
                        className="font-oswald section-header">Manage Students</span>
                        <div className="table-container">
                        <table id="customer-table" className="material-table">
                                <tbody>
                                    <tr>
                                        
                                        <th>First Nmae</th>
                                        <th>Last Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>User_Type</th>
                                        <th className="text-align-center"><img className="cursor-pointer" title="Add Record"
                                            onClick={() => { }} src={add} height="13px"
                                            width="13px" alt='add records' /></th>
                                    </tr>
                                    {customers.map(customer => (
                                        <tr>
                                            
                                            <td>{customer.First_Name}</td>
                                            <td>{customer.Last_Name}</td>
                                            <td>{customer.Email}</td>
                                            <td>{customer.Phone}</td>
                                            <td>{customer.User_Type}</td>
                                            <td>{''}</td>
                                           
                                        </tr>))}
                                   
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Manage BusinessOwner  */}
                    <div className="d-flex flex-direction-column align-items-start section-content"><span
                        className="font-oswald section-header">Manage BusinessOwner</span>
                        <div className="table-container">
                        <table id="customer-table" className="material-table">
                                <tbody>
                                    <tr>
                                        
                                        <th>First Nmae</th>
                                        <th>Last Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>User_Type</th>
                                        <th className="text-align-center"><img className="cursor-pointer" title="Add Record"
                                            onClick={() => { }} src={add} height="13px"
                                            width="13px" alt='add records' /></th>
                                    </tr>
                                    {business.map(customer => (
                                        <tr>
                                            
                                            <td>{customer.First_Name}</td>
                                            <td>{customer.Last_Name}</td>
                                            <td>{customer.Email}</td>
                                            <td>{customer.Phone}</td>
                                            <td>{customer.User_Type}</td>
                                            <td>{''}</td>
                                           
                                        </tr>))}
                                   
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Horizontal row section containing multiple tables  */}
                <div className="d-flex flex-direction-row justify-around section-container" id="manager-actions">

                    {/* Moderate Posts  */}
                    <div className="d-flex flex-direction-column align-items-start section-content"><span
                        className="font-oswald section-header">Moderate Posts</span>
                        <div className="table-container">
                        <table id="customer-table" className="material-table">
                                <tbody>
                                    <tr>
                                        
                                        <th>Post ID</th>
                                        <th>Creator ID</th>
                                        <th>Post Description</th>
                                        <th>Created_Date</th>
                                        <th className="text-align-center"><img className="cursor-pointer" title="Add Record"
                                            onClick={() => { }} src={add} height="13px"
                                            width="13px" alt='add records' /></th>
                                    </tr>
                                    {posts.map(customer => (
                                        <tr>
                                            
                                            <td>{customer.post_ID}</td>
                                            <td>{customer.creator_id}</td>
                                            <td>{customer.post_desc}</td>
                                            <td>{customer.created_date}</td>
                                            <td>{''}</td>
                                           
                                        </tr>))}
                                   
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* Moderate Clubs  */}
                    <div className="d-flex flex-direction-column align-items-start section-content"><span
                        className="font-oswald section-header">Moderate Clubs</span>
                        <div className="table-container">
                        <table id="customer-table" className="material-table">
                                <tbody>
                                    <tr>
                                        
                                        <th>Club ID</th>
                                        <th>Club Name</th>
                                        <th>Club Email</th>
                                        <th>School ID</th>
                                        <th>Club Description</th>
                                        <th className="text-align-center"><img className="cursor-pointer" title="Add Record"
                                            onClick={() => { }} src={add} height="13px"
                                            width="13px" alt='add records' /></th>
                                    </tr>
                                    {clubs.map(customer => (
                                        <tr>
                                            
                                            <td>{customer.club_ID}</td>
                                            <td>{customer.club_name}</td>
                                            <td>{customer.club_email}</td>
                                            <td>{customer.school_Id}</td>
                                            <td>{customer.club_description}</td>
                                            <td>{''}</td>
                                           
                                        </tr>))}
                                   
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Horizontal row section containing multiple tables  */}
                <div className="d-flex flex-direction-row justify-around section-container">

                    {/* Manage Customers table  */}
                    {/* <div className="d-flex flex-direction-column align-items-start section-content"><span
                        className="font-oswald section-header">Manage Customers</span>
                        <div className="table-container">
                            <table id="customer-table" className="material-table">
                                <tbody>
                                    <tr>
                                        <th>ID</th>
                                        <th>First Nmae</th>
                                        <th>Last Name</th>
                                        <th>Email</th>
                                        <th>Created Date</th>
                                        <th>User Type</th>
                                        <th>Address</th>
                                        <th className="text-align-center"><img className="cursor-pointer" title="Add Record"
                                            onClick={() => { }} src={add} height="13px"
                                            width="13px" alt='add records' /></th>
                                    </tr>
                                    {customers.map(customer => (
                                        <tr>
                                            <td>{customer.ID}</td>
                                            <td>{customer.First_Name}</td>
                                            <td>{customer.Last_Name}</td>
                                            <td>{customer.Email}</td>
                                            <td>{customer.Created_Date}</td>
                                            <td>{customer.User_Type}</td>
                                            <td>{''}</td>
                                            <td>
                                                <span className="action-icons">
                                                    <img src={edit} onClick={() => { }} title="edit" />
                                                    <img src={deleteIcon} onClick={() => deleteCustomer(customer.ID)} title="delete" />
                                                </span>
                                            </td>
                                        </tr>))}
                                </tbody>
                            </table>
                        </div>
                    </div> */}

                    {/* Manage Pickup/Delivery table  */}
                    {/* <div className="d-flex flex-direction-column align-items-start section-content"><span
                        className="font-oswald section-header">Manage Pickup / Delivery</span>
                        <div className="table-container">
                            <table id="pickup-table" className="material-table">
                                <tbody>
                                    <tr>
                                        <th>ID</th>
                                        <th>First Nmae</th>
                                        <th>Last Name</th>
                                        <th>Email</th>
                                        <th>Phone Number</th>
                                        <th>Subscription</th>
                                        <th>Plan</th>
                                        <th>Day</th>
                                        <th>Address</th>
                                        <th className="text-align-center"><img className="cursor-pointer" title="Add Record"
                                            onClick={() => { }} src={add} height="13px"
                                            width="13px" alt='add records' /></th>
                                    </tr>
                                    {pickup.map(pickup => (
                                        <tr>
                                            <td>{pickup.ID}</td>
                                            <td>{pickup.First_Name}</td>
                                            <td>{pickup.Last_Name}</td>
                                            <td>{pickup.Email}</td>
                                            <td>{pickup.Phonenumber}</td>
                                            <td>{pickup.subscribe}</td>
                                            <td>{pickup.plan}</td>
                                            <td>{pickup.day}</td>
                                            <td>{pickup.address}</td>
                                            <td>
                                                <span className="action-icons">
                                                    <img src={edit} onClick={() => { }} title="edit" />
                                                    <img src={deleteIcon} onClick={() => deletePickup(pickup.ID)} title="delete" />
                                                </span>
                                            </td>
                                        </tr>))}
                                </tbody>
                            </table>
                        </div>
                    </div> */}
                </div>

                {/* Horizontal row section containing Employee table  */}
                {/* <div className="d-flex flex-direction-row justify-around section-container" id='employee-table-container'>
                    <div className="d-flex flex-direction-column align-items-start section-content"><span
                        className="font-oswald section-header">Manage Employees</span>
                        <div className="table-container">
                            <table id="employee-table" className="material-table">
                                <tbody>
                                    <tr>
                                        <th>ID</th>
                                        <th>First Nmae</th>
                                        <th>Last Name</th>
                                        <th>Email</th>
                                        <th>Created Date</th>
                                        <th>User Type</th>
                                        <th>Address</th>
                                        <th className="text-align-center"><img className="cursor-pointer" title="Add Record"
                                            onClick={() => { }} src={add} height="13px"
                                            width="13px" alt='add records' /></th>
                                    </tr>
                                    {employee.map(emp => (
                                        <tr>
                                            <td>{emp.ID}</td>
                                            <td>{emp.First_Name}</td>
                                            <td>{emp.Last_Name}</td>
                                            <td>{emp.Email}</td>
                                            <td>{emp.Created_Date}</td>
                                            <td>{emp.User_Type}</td>
                                            <td>{''}</td>
                                            <td>
                                                <span className="action-icons">
                                                    <img src={edit} onClick={() => { }} title="edit" />
                                                    <img src={deleteIcon} onClick={() => deleteEmployee(emp.ID)} title="delete" />
                                                </span>
                                            </td>
                                        </tr>))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
}
export default SchoolAdmin;
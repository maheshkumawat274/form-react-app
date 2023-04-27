import React from "react";
import './basic.css';
export default function Greet(props){
    return(
        <div className="container card p-3 mt-3">
            <table>
                <tr>
                    <td>Name</td>
                    <td>{props.name}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td colSpan="3">{props.email}</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Student Contect Number</td>
                    <td colSpan="2">{props.scontectno}</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Parents Contect Number</td>
                    <td colSpan="2">{props.parentsno}</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Gender</td>
                    <td colSpan="2">{props.gender}</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Marital Status</td>
                    <td colSpan="2">{props.marital}</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Current Address</td>
                    <td colSpan="2">{props.currentadd}</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Parmanent Address</td>
                    <td colSpan="2">{props.parmaaddress}</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>District</td>
                    <td colSpan="2">{props.district}</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>State</td>
                    <td colSpan="2">{props.selectone}</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Pin Code Number</td>
                    <td colSpan="2">{props.pin}</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Nationality</td>
                    <td colSpan="2">{props.nationality}</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Graduation Degree</td>
                    <td colSpan="2">{props.degree}</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Graduation CGPA / %</td>
                    <td colSpan="2">{props.Gcgpa}</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>CGPA / % of 10th</td>
                    <td colSpan="2">{props.tenth}</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>CGPA / % of 12th</td>
                    <td colSpan="2">{props.intermidate}</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Resume</td>
                    <td colSpan="2">{props.resume}</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Profile</td>
                    <td colSpan="2">{props.profile}</td>
                    <td></td>
                    <td></td>
                </tr>
            
            </table>
        </div>
    )
}
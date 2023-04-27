import React from "react";
import './basic.css';
export default function Basic(props){
   /* function val(elem){
        if(isNaN(elem.value)){
            document.getElementById("show").innerHTML="please enter the number only";
        }
        else{
            document.getElementById("show").innerHTML="";
            if(isNaN(elem.value.length >10)){
                document.getElementById("show").innerHTML="please enter only 10 digit number"
            }
            else{
                document.getElementById("show").innerHTML="";
            }
        }
    }*/
    return(
        


        <div className="container-fluid">
            <div className="col-md-5 m-auto">
                <div className="mt-4">
                    <div className="card text-left">
                        <div className="card-body">
                            <form onSubmit={props.submit}>
                                <div className="form-group">
                                    <label>
                                        <b>1.</b>
                                        Name of the Student
                                    </label>
                                    <input type="text" name="name" placeholder="Full Name" className="form-control" required autoComplete="off"></input>
                                </div>
                                <div className="form-group">
                                    <label>
                                        <b>2.</b>
                                        Email
                                    </label>
                                    <input type="email" name="email" placeholder=" Enter Email Address" className="form-control" required autoComplete="off"></input>
                                </div>
                                <div className="form-group">
                                    <label>
                                        <b>3.</b>
                                        Contect Number
                                    </label>
                                    <input type="number" name="Scntnm"  className="form-control" required autoComplete="off"></input>
                                    <div id="show"></div>
                                </div>
                                <div className="form-group">
                                    <label>
                                        <b>4.</b>
                                        Parents Contect Number
                                    </label>
                                    <input type="number"  name="pcntnm" maxLength="8"  className="form-control" required autoComplete="off"></input>
                                    <div id="show"></div>
                                </div>
                                <div className="form-group">
                                    <label>
                                        <b>5.</b>
                                        Gender
                                    </label><br />
                                    <input type="radio" name="radio1" value="Male0" required></input>Male
                                    <input type="radio" name="radio1" value="Female" required></input>Female
                                </div>
                               
                                <div className="form-group">
                                    <label>
                                        <b>6.</b>
                                        Marital Status
                                    </label><br />
                                    <input type="radio" name="radio2" value="Married" required></input>Married
                                    <input type="radio" name="radio2" value="Single" required></input>Single
                                    <input type="radio" name="radio2" value="Other" required></input>Other
                                </div>
                                <button className="btn btn-primary" type="submit">Next</button>
                                

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
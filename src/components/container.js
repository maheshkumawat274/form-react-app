import React, { Component } from "react";
import Greet from "./greet";
import Basic from "./basic";
import Det from "./details";
import ED from "./education";
class Cont extends Component{
    constructor(props){
        super(props);
        this.state={
                name:null,
                email:null,
                Scntnm:null,
                pcntnm:null,
                radio1:null,
                radio2:null,
                isBasic:false,
                caddress:null,
                paddress:null,
                city:null,
                selectone:null,
                pin:null,
                nationality:null,
                isdetails:false,
                degree:null,
                Gcgpa:null,
                tenth:null,
                intermidate:null,
                resume:null,
                profile:null,  
                isedut:false,              

        }
        
    }
    basiceventHandler=(event)=>{
        const name = event.target.name.value;
        const email = event.target.email.value;
        const Scntnm = event.target.Scntnm.value;
        const pcntnm = event.target.pcntnm.value;
        const radio1 = event.target.radio1.value;
        const radio2 = event.target.radio2.value;
        this.setState({name,email,Scntnm,pcntnm,radio1,radio2,isBasic:true})

    }
    detailseventHandler=(event)=>{
        const caddress = event.target.caddress.value;
        const paddress = event.target.paddress.value;
        const city = event.target.city.value;
        const selectone = event.target.selectone.value;
        const pin = event.target.pin.value;
        const nationality = event.target.nationality.value;
        this.setState({caddress, paddress,city,selectone,pin,nationality,isdetails:true})

    }
    edeventHandler=(event)=>{
        const degree = event.target.degree.value;
        const Gcgpa = event.target.Gcgpa.value;
        const tenth = event.target.tenth.value;
        const intermidate = event.target.intermidate.value;
        const resume = event.target.resume.value;
        const profile = event.target.profile.value;
        this.setState({degree,Gcgpa,tenth,intermidate,resume,profile,isedut:true})

    }
    render(){
        return(
            
            <>
            
            {
                this.state.isBasic===true && this.state.isdetails===true && this.state.isedut===true ?
                (<Greet 
                    name={this.state.name}
                    email={this.state.email}
                    scontectno={this.state.Scntnm}
                    parentsno={this.state.pcntnm}
                    gender={this.state.radio1}
                    marital={this.state.radio2}
                    currentadd={this.state.caddress}
                    parmaaddress={this.state.paddress}
                    district={this.state.city}
                    selectone={this.state.selectone}
                    nationality={this.state.nationality}
                    pin={this.state.pin}
                    degree={this.state.degree}
                    Gcgpa={this.state.Gcgpa}
                    tenth={this.state.tenth}
                    intermidate={this.state.intermidate}
                    resume={this.state.resume}
                    profile={this.state.profile}
                    />):
                (
                this.state.name===null && 
                this.state.email===null && 
                this.state.Scntnm===null && 
                this.state.pcntnm===null && 
                this.state.radio1===null &&
                this.state.radio2===null ?
                (<Basic submit={this.basiceventHandler} />):
                this.state.caddress===null &&
                this.state.paddress===null &&
                this.state.city===null &&
                this.state.selectone===null &&
                this.state.nationality===null &&
                this.state.pin===null ?
                (<Det submitdet={this.detailseventHandler} />):
                (<ED submited={this.edeventHandler} />)
                )
    }
            </>
            
        )
    }
}
export default Cont;
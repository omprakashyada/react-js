import { ErrorResponse } from "@remix-run/router";
import React,{useState,useEffect} from "react";
const Contact = () => {
    const initialValues={email: "",password: ""};
    const [formValues,setFormValues] =useState("");
    const [formErrors,setFormError] =useState({});
    const[isSubmit,setisSubmit]=useState(false);
    const handleChange=(e)=>{
       console.log(e.target);
       const {name,value}= e.target;
       setFormValues({...formValues,[name]:value});
       console.log(formValues);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        setFormError(Validate(formValues));
        setisSubmit(true);
    }
    useEffect(()=>{
        console.log(formErrors);
        if(Object.keys(formErrors).length===0 && isSubmit) {
            console.log(formValues);
        }
    })
    const Validate=(values)=>{
        const error={}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
            if(!values.email){
                error.email="email empty";
            } else if(!regex.test(values.email)){
                error.email="email invalid";
            }
            if(!values.password){
                error.password="password empty";
            }else if (values.password.length < 4) {
                error.password = "Password must be more than 4 characters";
              } else if (values.password.length > 10) {
                error.password = "Password cannot exceed more than 10 characters";
              }
            return error;
        
    }
    return (
        <div className="container">
            <div className="py-4">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" name="email" value={formValues.email} onChange={handleChange}/>
                           <span>{formErrors.email}</span>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name="password"   value={formValues.password} onChange={handleChange}/>
                        <span>{formErrors.password}</span>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default Contact;
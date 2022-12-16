import React,{useState} from "react";

const AddUser=() =>{
    const [user,setUser] = useState({
        username:"",
        email:"",
        phone:""
    });
    const {name,email,phone} =user;
    const onInputChange=(e)=>{
        console.log(e.target.value);
    }
    return (
        <div className="container">
        <div className="py-4">
            <form>
                
                
            <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" name="name" value={name}  onChange={e =>onInputChange(e)}/>
                      
                </div>

                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" name="email" value={email} onChange={e =>onInputChange(e)}/>
                      
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">phone</label>
                    <input type="number" className="form-control" id="exampleInputPassword1" name="phone"  value={phone}  onChange={e =>onInputChange(e)}/>
                  
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
export default AddUser;
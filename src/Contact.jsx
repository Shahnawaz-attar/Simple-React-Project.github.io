import React,{useState} from 'react'


const Contact = () =>{
    const [data,setData]=useState({
      fullname:'',
      email:'',
      number:'',
      password:''
    });
    const InputEvent = (event) =>{
        const {name , value} = event.target;

        setData((preValue)=>{
          return {
            ...preValue,
            [name]:value,
          }
        });
    }
    const formSubmit=(e)=>{e.preventDefault()
    
    alert(` My Name is ${data.fullname} My Email is ${data.email} and Number is ${data.number} ` )
    };



    return (
        <>
        <div className="my-5">
        <h1 className="text-center">Contact us</h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-6  mx-auto shadow-lg p-5 ">
                <form  onSubmit={formSubmit}>
                  <div className="form-group">
                    <label >Full Name</label>
                    <input type="text"
                     className="form-control"
                     name="fullname"
                     value={data.fullname}
                     onChange={InputEvent}
                     id="text" />
                  </div>
                  <div className="form-group">
                    <label >Email address:</label>
                    <input type="email"
                    name="email"
                     value={data.email}
                     onChange={InputEvent}
                     className="form-control"
                      id="email" />
                  </div>
                  <div className="form-group">
                    <label >Phone Number:</label>
                    <input 
                    type="number"
                     className="form-control"
                     name="number"
                     value={data.number}
                     onChange={InputEvent}
                      id="Number" />
                  </div>
                  <div className="form-group">
                    <label >Password:</label>
                    <input
                     type="password"
                      className="form-control"
                      name="password"
                     value={data.password}
                     onChange={InputEvent}
                       id="pwd" />
                  </div>
                  <div className="form-group form-check">
                    <label className="form-check-label">
                      <input className="form-check-input" type="checkbox" /> Remember me 
                    </label>
                  </div>
                  <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                </div>
            </div>
        </div>
        </>
  
    )
  }
  export default Contact;
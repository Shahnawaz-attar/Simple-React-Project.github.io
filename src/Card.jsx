import React from 'react'
import { NavLink } from 'react-router-dom';
import web from "../src/Images/bg2.jpg"
const Card = (props) =>{
    return (
        <>

            <div className="card shadow-lg  mx-auto m-2 ">
                <img src={props.imgsrc} className="img-fluid-top" alt={props.imgsrc} height="200" width="300"  />
                     <div className="card-body  text-center">
                        <div className="card-text font-weight-bold"></div>
                            <h4 className="card-title">{props.title}</h4>
                             <NavLink to="" className="btn btn-primary text-white">
                                Click To go
                              </NavLink>
                     </div>
            </div>

                
         
   

        </>
  
    )
  }
  export default Card;
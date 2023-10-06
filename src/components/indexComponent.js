// import SignupComponent from "./SignupComponent";
// import Aboutus from "./aboutus";
// import Contactus from "./contactus";
// import MainComponent from "./mainComponent";
// import React from 'react';
// import { NavLink } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// export default class IndexComponent extends React.Component{
//     render(){
//         return(
//             <div>
//             <div className="nav nav-pills">
//                 <Router>
//                     <div className="nav-item" >
//                         <NavLink  to="/aboutus" className="nav-link">AboutUs</NavLink>
//                     </div>
//                     <div className="nav-item">
//                         <NavLink   to="/contactus" className="nav-link" >ContactUs</NavLink>
//                     </div>
//                     <div  className="nav-item">
//                         <NavLink   to="/signup" className="nav-link">SignUp</NavLink>
//                     </div>
//                     <div  className="nav-item">
//                         <NavLink   to="/login" className="nav-link">Login</NavLink>
//                     </div>
//                     <br/><br/>
                
//                 <Routes>
//                     <Route path="/aboutus" element={<Aboutus/>}></Route>
//                     <Route path="/contactus" element={<Contactus/>}></Route>
//                     <Route path="/signup" element={<SignupComponent/>}></Route>
//                     <Route path="/login" element={<MainComponent/>}></Route>
//                 </Routes>
                
//                 </Router>
//             </div>
//         </div>

//         )
       
//     }
// }


// import Aboutus from './aboutus'
//  import Contactus from './contactus'
// import MainComponent from './mainComponent'
//  import Signup from './SignupComponent'
// import {BrowserRouter as Router,Routes,Route, NavLink} from 'react-router-dom'
// import React from 'react'
//  export default class indexComponent extends React.Component{
//     render(){
//         return(
//             <div>
//                 <div className='nav nav-pills'>
//                     <Router>
//                         <div className='nav-item'>
//                             <NavLink to='/aboutus' className='nav-link'>About Us</NavLink>
//                         </div>

//                         <div className='nav-item'>
//                             <NavLink to='/contactus' className='nav-link'>Contact Us</NavLink>
//                         </div>

//                         <div className='nav-item'>
//                             <NavLink to='/signup' className='nav-link'>Sign Up</NavLink>
//                         </div>

//                         <div className='nav-item'>
//                             <NavLink to='/login' className='nav-link'>Login</NavLink>
//                         </div>
//                         <br/><br/>
//                         <Routes>
//                             <Route path='/aboutus' element={<Aboutus/>}></Route>
//                             <Route path='/contactus' element={<Contactus/>}></Route>
//                             <Route path='/signup' element={<Signup/>}></Route>
//                             <Route path='/login' element={<MainComponent/>}></Route>
//                         </Routes>
//                     </Router>
//                 </div>
//             </div>
//         )
//     }
// }



import React from "react";
import {NavLink, Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Aboutus from "./aboutus";
import Contactus from "./contactus";
import SignupComponent from "./SignupComponent";
import MainComponent from "./mainComponent";
export default class IndexComponent extends React.Component{
	render(){
    	return(
        	<div>
            	<div className="nav nav-pills   " >
                	<Router>
                    	<div className="nav-item">
                        	<NavLink to = "/aboutus" className='nav-link'>About us</NavLink>
                    	</div>
	                    <div className="nav-item">
                        	<NavLink to = "/contactus" className='nav-link'>Contact us</NavLink>
                    	</div>
                    	<div className="nav-item">
                        	<NavLink to = "/signup" className='nav-link'>Signup</NavLink>
                    	</div>
                    	<div className="nav-item">
                        	<NavLink to = "/login" className='nav-link'>Login</NavLink>
                    	</div>
                    	<br/><br/>
                    	<Routes>
                        	<Route path="/aboutus" element={<Aboutus/>}></Route>
                        	<Route path="/contactus" element= {<Contactus/>}></Route>
                        	<Route path="/signup" element={<SignupComponent/>}></Route>
                        	<Route path="/login" element={<MainComponent/>}></Route>
                    	</Routes>
            	    </Router>
            	</div>
        	</div>
    	)
	}
}

// import React from "react"
// import axios from 'axios';
// export default class SignupComponent extends React.Component {
//     render() {
//         return (
//             <div className='container mt-5'>
//                 <p className='jumbotron bg-dark text-light'>Welcome to SignupComponent</p>
//             </div>
//         )
//     }
// }


import React from 'react'
import axios from 'axios'
import url from './url'

export default class SignupComponent extends React.Component {
	constructor() {
    	super()
    	this.state = {
        	status:''
    	}
	}
	render() {
    	return (
        	<div className='container mt-5'>            	
            	<form onSubmit={this.signup} className='btn btn-outline-warning w-50'>
                	<h3 className='text-primary'>Signup user </h3>
                	<div className='form-group my-2 btn btn-outline-dark p-3 w-100'>
                    	<label>User id</label>
                    	<input type='text' placeholder='Enter Userid' className='form-control' name='userid'></input>
                	</div>
                	<div className='form-group my-2 btn btn-outline-dark p-3 w-100'>
                    	<label>User Name</label>
                    	<input type='text' placeholder='Enter User Name' className='form-control' name='uname'></input>
                	</div>
                	<div className='form-group my-2 btn btn-outline-dark p-3 w-100'>
                    	<label>Password</label>
                    	<input type='password' placeholder='Enter Password' className='form-control' name='upwd'></input>
                	</div>
                	<div className='form-group my-2 btn btn-outline-dark p-3 w-100'>
                    	<label>User email</label>
                    	<input type='email' placeholder='Enter User email' className='form-control' name='email'></input>
                	</div>
                	<div className='form-group my-2 btn btn-outline-dark p-3 w-100'>
                    	<label>User Address</label>
                    	<input type='text' placeholder='Enter User Address' className='form-control' name='address'></input>
                	</div>
                	<div className='form-group my-2 btn btn-outline-dark p-3 w-100'>
                    	<label>Contact</label>
                    	<input type='text' placeholder='Enter Contact' className='form-control' name='contact'></input>
                	</div>
                	<div className='form-group my-2 w-25 mx-auto' align = 'center'>                    	
                    	<input type='submit' className='btn btn-outline-success' value='Signup'></input>
                    	<h3>{this.state.status}</h3>
                	</div>
            	</form>            	
        	</div>
    	)
	}
	signup = (e) => {
    	e.preventDefault()
    	let obj = {
        	"userid" : e.target.userid.value,
        	"uname" : e.target.uname.value,
        	"upwd" : e.target.upwd.value,
        	"email" : e.target.email.value,
        	"address" : e.target.address.value,
        	"contact" : e.target.contact.value
    	}
    	axios.post(url+"/insert/createUser",obj)
        	.then((posRes)=>{
            	console.log(posRes.data)
            	this.setState({
                	status : posRes.data.userInsert
            	})
        	},(errRes)=>{
            	console.log(errRes)
        	})
	}
}

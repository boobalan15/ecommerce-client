// // import React from "react"
// // export default class MainComponent extends React.Component {
// //     render() {
// //         return (
// //             <div className='container mt-5'>
// //                 <p className='jumbotron'>Welcome to MainComponent</p>
// //             </div>
// //         )
// //     }
// // }




// import axios from 'axios'
// import React from 'react'
// import url from './url'
// import Header from './Header'
// let cart = []
// export default class MainComponent extends React.Component {
// 	constructor() {
//     	super()
//     	this.state = {
//         	login: false,
//         	products: []
//     	}
// 	}
// 	componentDidMount() {
//     	axios.get(url + "/fetch")
//         	.then((posRes) => {
//             	this.setState({
//                 	products: posRes.data
//             	})
//         	}, (errRes) => {
//             	console.log(errRes)
//   	      })
// 	}
// 	render() {
//     	return (
// 			// change
//         	<div className='container col-lg-11 mt-5'>  
//             	<div hidden={this.state.login}>
//                 	<form onSubmit={this.login} className='btn  text-white w-50 '>
//                     	<div className='form-group my-2 btn btn-outline-info p-3 w-75'>
//                         	<label className='float-left'>Username</label>
//                         	<input type='text' placeholder='Enter User name' className='form-control' name='uname'></input>
//                     	</div>
//                     	<div className='form-group my-2 btn btn-outline-info p-3 w-75'>
//                         	<label className='float-left'>Password</label>
//                         	<input type='password' placeholder='Enter Password' className='form-control' name='upwd'></input>
//                     	</div>
//                     	<div className='form-group my-2 w-25 mx-auto' align='center'>
//                         	<input type='submit' className='btn btn-outline-success' value='Login'></input>
//                     	</div>
//                 	</form>
//             	</div>
//             	<div hidden={!this.state.login}>
//                 	<button onClick={this.logout} className='btn btn-outline-danger float-right mt-4 mr-5'>Logout</button>
//                 	<Header />
//                 	<div className='h4 text-info mb-2' align="right">
//                     	Total amount:- {this.calculateTotal()}
//                     	<button onClick={() => { this.buyNow() }} className='btn btn-outline-success mx-5'>Buy Now</button>
//                 	</div>
//                 	<div className='row'>
//                     	<div className='col-10'>
//                         	<div className='row row-cols-3'>
//                             	{this.state.products.map((e, i) => (
//                                 	<div className='col my-3'>
//                                     	<div className='card'>
//                                         	<div className='card-header'>
//                                                 <img src={e.p_img} className='card-img-top'></img>
//                                         	</div>
//                                     	</div>
//                                     	<div className='card-body'>
//                                         	<div className='h2 card-title'>{e.p_name}</div>
//                                         	<div className='h4 card-subtitle text-muted'>{e.p_cost}</div>
//                                     	</div>
//                                     	<div className='card-footer'>
//                                         	<button onClick={() => { alert(e.p_desc) }}
//                                                 className="btn btn-outline-info btn-block btn-sm"
//                                                 data-toggle="tooltip"
//                                                 data-placement="bottom"
//                                                 title={e.p_desc}>Learn More</button>
//                                         	<button onClick={() => { this.addToCart(e) }} class="btn btn-outline-success btn-block btn-sm">Add to Cart</button>
//                                     	</div>
//                                 	</div>
//                             	))}
//                         	</div>
//     	                </div>
//                     	<div className='col'>
//                         	<div className='row my-3'>
//                             	{cart.map((e, i) => (
//                                 	<div className='my-3'>
//                                     	<div className=' card'>
//                                         	<div className='card-header'>
//                                                 <img src={e.p_img} className='card-img-top'></img>
//                	                         </div>
//                                         	<div className='card-body'>
//                                                 <div className='h2 card-title'>{e.p_name}</div>
//                                                 <div className='h4 card-subtitle text-muted'>{e.qty}</div>
//                                         	</div>
//                                         	<div className='card-footer'>
//                     	                        <button onClick={() => { this.reduce(e) }} class="btn btn-outline-success btn-block btn-sm">Reduce</button>
//                                         	</div>
//                                     	</div>
//                                 	</div>
//                             	))}
//                         	</div>
//                     	</div>
//                 	</div>
//             	</div>
//         	</div>
//     	)
// 	}
// 	login = (e) => {
//     	e.preventDefault()
//     	let obj = {
//         	uname: e.target.uname.value,
//         	upwd: e.target.upwd.value
//     	}
//     	axios.post(url + "/fetch/auth", obj)
//         	.then((posRes) => {
//             	console.log(posRes.data)
//             	if (posRes.data.auth == 'success') {
//                 	console.log('Object in auth :- ', obj)
//                 	this.setState({
//                     	...this.state,
//                     	login: true,
//                     	user: obj.uname
//                 	})
//                 	console.log('State after login:- ', this.state)
//                     window.sessionStorage.setItem('user', obj.uname)
//            	     this.fetchCart()
//             	}
//         	}, (errRes) => {
//             	console.log(errRes)
//         	})
// 	}
// 	addToCart = (item) => {
//     	let present = false
//     	let i
//     	for (i = 0; i < cart.length; i++) {
//         	if (item.p_id == cart[i].p_id) {
//             	present = true
//             	break
//         	}
//     	}
//     	//if item is present in cart, update it
//     	if (present == true) {
//         	let myObj = cart[i]
//         	let id = myObj.id
//         	let obj = {
//             	"uname": this.state.user,
//             	"p_id": myObj.p_id,
//             	"qty": parseInt(myObj.qty) + 1,
//         	}
//         	axios.post(url + "/update/updateCart", obj)
//             	.then((posRes) => {
//                 	cart.forEach((e, i) => {
//                     	if (e.p_id == obj.p_id)
//                         	e.qty = obj.qty
//                 	})
// 	                console.log(posRes.statusText)
//                 	this.setState({
//                     	status: 'Update ' + posRes.statusText
//                 	})
//             	}, (errRes) => {
//                 	console.log(errRes)
//            	     this.setState({
//                     	status: errRes.message
//                 	})
//             	})
//     	}
//     	//if item is not present in cart, insert it
//     	else {
//         	let obj = {
//             	"uname": this.state.user,
//             	"p_name": item.p_name,
//             	"p_id": item.p_id,
//             	"qty": 1,
//             	"p_cost": item.p_cost,
//             	"p_img": item.p_img
//         	}
//         	axios.post(url + "/insert/cartInsert", obj)
//             	.then((posRes) => {
//                 	this.setState({
//                     	status: 'Record' + posRes.statusText
//                 	})
//                 	cart.push(obj)
//             	}, (errRes) => {
//                 	console.log(errRes)
//             	})
//     	}
//     	this.setState({
//         	total: this.calculateTotal()
//     	})
//     	console.log(cart)
// 	}
// 	reduce = (item) => {
//     	console.log('Item id:- ', item.id)
//     	if (item.qty == 1) {
//         	let obj = {
//             	"u_name": this.state.user,
//             	"p_id": item.p_id
//         	}
//         	axios.post(url + "/delete/deleteCart", obj)
//             	.then((posRes) => {
//                 	console.log(posRes)
//                 	let indx = cart.findIndex((e, i) => {
//                     	return e.p_id === item.p_id
//                 	})
//                 	cart.splice(indx, 1)
//                 	this.setState({
//                     	status: 'Delete ' + posRes.statusText
//                 	})
//             	}, (errRes) => {
//             	    console.log(errRes)
//                 	this.setState({
//                     	status: errRes.message
//                 	})
//             	})
//     	}
//     	else {
//         	let obj = {
//             	"u_name": this.state.user,
//             	"p_id": item.p_id,
//             	"qty": parseInt(item.qty) - 1,
//         	}
//         	axios.post(url + "/update/updateCart", obj)
//             	.then((posRes) => {
//                 	cart.forEach((e, i) => {
//                    	 if (e.p_id == obj.p_id)
//                         	e.qty = obj.qty
//                 	})
//                     console.log(posRes.statusText)
//                 	this.setState({
//                     	status: 'Update ' + posRes.statusText
//                 	})
//             	}, (errRes) => {
//                 	console.log(errRes)
//                 	this.setState({
//                     	status: errRes.message
//                 	})
//             	})
//     	}
// 	    this.setState({
//         	total: this.calculateTotal()
//     	})
// 	}
// 	buyNow = () => { // Check this functionality ????
//     	alert('Thank u for business with us Total amount :- ' + this.calculateTotal())
//     	for (let i = 0; i < cart.length; i++) {
//         	axios.delete(url + "/cart/" + cart[i].id) //==================>?
//             	.then((posRes) => {
//                 	console.log(posRes)
//                 	let indx = cart.findIndex((e, i) => {
//                	     return e.id === cart[i].id
//                 	})
//                 	cart.splice(indx, 1)
//                 	this.setState({
//                     	status: 'Delete ' + posRes.statusText
//                 	})
//             	}, (errRes) => {
//                 	console.log(errRes)
//                 	this.setState({
//                     	status: errRes.message
//                 	})
//             	})
//     	}
// 	}
// 	fetchCart = () => {
//     	axios.post(url + "/fetch/fetchCart", { "uname": window.sessionStorage.getItem('user') }).then((posRes) => {
//         	this.setState({
//             	status: 'Loading'
//         	})
//         	cart = posRes.data
//         	console.log('Cart data:- ', cart)
//         	this.setState({
//             	status: '',
//         	})
//     	}, (errRes) => {
//         	console.log(errRes)
//     	})
//     	let total = 0
//     	for (let i = 0; i < cart.length; i++) {
//         	total += cart[i].p_cost * cart[i].qty
//     	}
//     	this.setState({
//         	total: total
//     	})
// 	}
// 	calculateTotal = () => {
//     	let total = 0
//     	cart.forEach((e, i) => {
//         	total += e.qty * e.p_cost
//     	})
//     	return total
// 	}
// 	logout = () => {
//     	this.setState({
//         	login: false,
//         	user: ''
//     	})
//     	window.sessionStorage.removeItem('user')
// 	}
// }
 












// import axios from 'axios'
// import React from 'react'
// import url from './url'
// import Header from './Header'
// let cart = []
// export default class MainComponent extends React.Component {
// 	constructor() {
//     	super()
//     	this.state = {
//         	login: false,
//         	products: []
//     	}
// 	}
// 	componentDidMount() {
//     	axios.get(url + "/fetch")
//         	.then((posRes) => {
//             	this.setState({
//                 	products: posRes.data
//             	})
//         	}, (errRes) => {
//             	console.log(errRes)
//   	      })
// 	}
// 	render() {
//     	return (
// 			// change
//         	<div className='container col-lg-11 mt-5'>  
//             	<div hidden={this.state.login}>
// 				<form onSubmit={this.login} className="w-50 mx-auto p-4 rounded" style={{ backgroundColor: '#f5f5f5' }}>
//   <div className="form-group">
//     <label htmlFor="uname" className="font-weight-bold">Username</label>
//     <input
//       type="text"
//       id="uname"
//       className="form-control"
//       placeholder="Enter User name"
//       name="uname"
//       required
//     />
//   </div>
//   <div className="form-group">
//     <label htmlFor="upwd" className="font-weight-bold">Password</label>
//     <input
//       type="password"
//       id="upwd"
//       className="form-control"
//       placeholder="Enter Password"
//       name="upwd"
//       required
//     />
//   </div>
//   <div className="form-group text-center">
//     <button type="submit" className="btn btn-outline-success btn-block">
//       Login
//     </button>
//   </div>
// </form>


//     </div>





// <div hidden={!this.state.login} className="container mt-4">
//   <button onClick={this.logout} className='btn btn-danger float-right mt-4 mr-4'>Logout</button>
//   <Header />
//   <div className='d-flex justify-content-between align-items-center mt-3'>
//     <div className='h4 text-info'>Total amount: ${this.calculateTotal()}</div>
//     <button onClick={() => { this.buyNow() }} className='btn btn-success ml-4'>Buy Now</button>
//   </div>
//   <div className='row mt-4'>
//     <div className='col-lg-9'>
//       <div className='row g-4'>
//         {this.state.products.map((e, i) => (
//           <div className='col-sm-4 mb-4' >
//             <div className='card h-100'>
//               <img src={e.p_img} className='card-img-top' alt={e.p_name} />
//               <div className='card-body'>
//                 <h2 className='card-title'>{e.p_name}</h2>
//                 <h4 className='card-subtitle text-muted'>${e.p_cost}</h4>
//               </div>
//               <div className='card-footer'>
//                 <button
//                   onClick={() => { alert(e.p_desc) }}
//                   className='btn btn-outline-info btn-block btn-sm'
//                   data-toggle='tooltip'
//                   data-placement='bottom'
//                   title={e.p_desc}
//                 >
//                   Learn More
//                 </button>
//                 <button
//                   onClick={() => { this.addToCart(e) }}
//                   className='btn btn-outline-success btn-block btn-sm'
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//     <div className='col-lg-3'>
//       <div className='bg-light p-3 rounded'>
//         <h4 className='text-center mb-3'>Shopping Cart</h4>
//         {cart.map((e, i) => (
//           <div className='card mb-3' key={i}>
//             <div className='row no-gutters'>
//               <div className='col-4'>
//                 <img src={e.p_img} className='card-img' alt={e.p_name} />
//               </div>
//               <div className='col-8'>
//                 <div className='card-body'>
//                   <h6 className='card-title'>{e.p_name}</h6>
//                   <p className='card-text'>Quantity: {e.qty}</p>
//                   <button
//                     onClick={() => { this.reduce(e) }}
//                     className='btn btn-danger btn-sm'
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>
// </div>

				
//         	</div>
//     	)
// 	}
// 	login = (e) => {
//     	e.preventDefault()
//     	let obj = {
//         	uname: e.target.uname.value,
//         	upwd: e.target.upwd.value
//     	}
//     	axios.post(url + "/fetch/auth", obj)
//         	.then((posRes) => {
//             	console.log(posRes.data)
//             	if (posRes.data.auth == 'success') {
//                 	console.log('Object in auth :- ', obj)
//                 	this.setState({
//                     	...this.state,
//                     	login: true,
//                     	user: obj.uname
//                 	})
//                 	console.log('State after login:- ', this.state)
//                     window.sessionStorage.setItem('user', obj.uname)
//            	     this.fetchCart()
//             	}
// 				else{
// 					console.log();
// 				}
//         	}, (errRes) => {
//             	console.log(errRes)
//         	})
// 	}
// 	addToCart = (item) => {
//     	let present = false
//     	let i
//     	for (i = 0; i < cart.length; i++) {
//         	if (item.p_id == cart[i].p_id) {
//             	present = true
//             	break
//         	}
//     	}
//     	//if item is present in cart, update it
//     	if (present == true) {
//         	let myObj = cart[i]
//         	let id = myObj.id
//         	let obj = {
//             	"uname": this.state.user,
//             	"p_id": myObj.p_id,
//             	"qty": parseInt(myObj.qty) + 1,
//         	}
//         	axios.post(url + "/update/updateCart", obj)
//             	.then((posRes) => {
//                 	cart.forEach((e, i) => {
//                     	if (e.p_id == obj.p_id)
//                         	e.qty = obj.qty
//                 	})
// 	                console.log(posRes.statusText)
//                 	this.setState({
//                     	status: 'Update ' + posRes.statusText
//                 	})
//             	}, (errRes) => {
//                 	console.log(errRes)
//            	     this.setState({
//                     	status: errRes.message
//                 	})
//             	})
//     	}
//     	//if item is not present in cart, insert it
//     	else {
//         	let obj = {
//             	"uname": this.state.user,
//             	"p_name": item.p_name,
//             	"p_id": item.p_id,
//             	"qty": 1,
//             	"p_cost": item.p_cost,
//             	"p_img": item.p_img
//         	}
//         	axios.post(url + "/insert/cartInsert", obj)
//             	.then((posRes) => {
//                 	this.setState({
//                     	status: 'Record' + posRes.statusText
//                 	})
//                 	cart.push(obj)
//             	}, (errRes) => {
//                 	console.log(errRes)
//             	})
//     	}
//     	this.setState({
//         	total: this.calculateTotal()
//     	})
//     	console.log(cart)
// 	}
// 	reduce = (item) => {
//     	console.log('Item id:- ', item.id)
//     	if (item.qty == 1) {
//         	let obj = {
//             	"u_name": this.state.user,
//             	"p_id": item.p_id
//         	}
//         	axios.post(url + "/delete/deleteCart", obj)
//             	.then((posRes) => {
//                 	console.log(posRes)
//                 	let indx = cart.findIndex((e, i) => {
//                     	return e.p_id === item.p_id
//                 	})
//                 	cart.splice(indx, 1)
//                 	this.setState({
//                     	status: 'Delete ' + posRes.statusText
//                 	})
//             	}, (errRes) => {
//             	    console.log(errRes)
//                 	this.setState({
//                     	status: errRes.message
//                 	})
//             	})
//     	}
//     	else {
//         	let obj = {
//             	"u_name": this.state.user,
//             	"p_id": item.p_id,
//             	"qty": parseInt(item.qty) - 1,
//         	}
//         	axios.post(url + "/update/updateCart", obj)
//             	.then((posRes) => {
//                 	cart.forEach((e, i) => {
//                    	 if (e.p_id == obj.p_id)
//                         	e.qty = obj.qty
//                 	})
//                     console.log(posRes.statusText)
//                 	this.setState({
//                     	status: 'Update ' + posRes.statusText
//                 	})
//             	}, (errRes) => {
//                 	console.log(errRes)
//                 	this.setState({
//                     	status: errRes.message
//                 	})
//             	})
//     	}
// 	    this.setState({
//         	total: this.calculateTotal()
//     	})
// 	}
// 	buyNow = () => { // Check this functionality ????
//     	alert('Thank u for business with us Total amount :- ' + this.calculateTotal())
//     	for (let i = 0; i < cart.length; i++) {
//         	axios.delete(url + "/cart/" + cart[i].id) //==================>?
//             	.then((posRes) => {
//                 	console.log(posRes)
//                 	let indx = cart.findIndex((e, i) => {
//                	     return e.id === cart[i].id
//                 	})
//                 	cart.splice(indx, 1)
//                 	this.setState({
//                     	status: 'Delete ' + posRes.statusText
//                 	})
//             	}, (errRes) => {
//                 	console.log(errRes)
//                 	this.setState({
//                     	status: errRes.message
//                 	})
//             	})
//     	}
// 	}
// 	fetchCart = () => {
//     	axios.post(url + "/fetch/fetchCart", { "uname": window.sessionStorage.getItem('user') }).then((posRes) => {
//         	this.setState({
//             	status: 'Loading'
//         	})
//         	cart = posRes.data
//         	console.log('Cart data:- ', cart)
//         	this.setState({
//             	status: '',
//         	})
//     	}, (errRes) => {
//         	console.log(errRes)
//     	})
//     	let total = 0
//     	for (let i = 0; i < cart.length; i++) {
//         	total += cart[i].p_cost * cart[i].qty
//     	}
//     	this.setState({
//         	total: total
//     	})
// 	}
// 	calculateTotal = () => {
//     	let total = 0
//     	cart.forEach((e, i) => {
//         	total += e.qty * e.p_cost
//     	})
//     	return total
// 	}
// 	logout = () => {
// 		this.setState({
// 		  login: false,
// 		  user: ''
// 		});
	  
// 		// Clear the form input fields
// 		document.getElementById('uname').value = '';
// 		document.getElementById('upwd').value = '';
	  
// 		window.sessionStorage.removeItem('user');
// 	  }
	  
// }
 
























// import axios from 'axios';
// import React from 'react';
// import url from './url';
// import Header from './Header';

// let cart = []; // Global cart variable to store cart data

// export default class MainComponent extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       login: false,
//       products: [],
//       user: '',
//       total: 0,
//       status: '',
//     };
//   }

//   componentDidMount() {
//     axios.get(url + '/fetch').then(
//       (posRes) => {
//         this.setState({
//           products: posRes.data,
//         });
//       },
//       (errRes) => {
//         console.log(errRes);
//       }
//     );

//     // Check if the user is already logged in
//     const loggedInUser = window.sessionStorage.getItem('user');
//     if (loggedInUser) {
//       this.setState({
//         login: true,
//         user: loggedInUser,
//       });
//       this.fetchCart();
//     }
//   }

//   // Function to update the cart in session storage
//   updateSessionCart = (cartData) => {
//     window.sessionStorage.setItem('cart', JSON.stringify(cartData));
//   };
//   fetchCart = () => {
// 	const loggedInUser = window.sessionStorage.getItem('user');
// 	if (loggedInUser) {
// 	  const cartData = JSON.parse(window.sessionStorage.getItem('cart')) || [];
	  
// 	  // Filter out removed products (products with qty > 0)
// 	  cart = cartData.filter(item => item.qty > 0);
	  
// 	  this.setState({
// 		total: this.calculateTotal(),
// 	  });
// 	}
//   };
  
  
//   reduce = (item) => {
//     console.log('Item id:- ', item.id);
//     if (item.qty === 1) {
//       let obj = {
//         u_name: this.state.user,
//         p_id: item.p_id,
//       };
//       axios
//         .post(url + '/delete/deleteCart', obj)
//         .then(
//           (posRes) => {
//             console.log(posRes);
//             let indx = cart.findIndex((e, i) => {
//               return e.p_id === item.p_id;
//             });
//             cart.splice(indx, 1);
//             this.setState({
//               status: 'Delete ' + posRes.statusText,
//             });

//             // Update the cart in session storage
//             this.updateSessionCart(cart);
//           },
//           (errRes) => {
//             console.log(errRes);
//             this.setState({
//               status: errRes.message,
//             });
//           }
//         );
//     } else {
//       let obj = {
//         u_name: this.state.user,
//         p_id: item.p_id,
//         qty: parseInt(item.qty) - 1,
//       };
//       axios
//         .post(url + '/update/updateCart', obj)
//         .then(
//           (posRes) => {
//             cart.forEach((e, i) => {
//               if (e.p_id === obj.p_id) e.qty = obj.qty;
//             });
//             console.log(posRes.statusText);
//             this.setState({
//               status: 'Update ' + posRes.statusText,
//             });

//             // Update the cart in session storage
//             this.updateSessionCart(cart);
//           },
//           (errRes) => {
//             console.log(errRes);
//             this.setState({
//               status: errRes.message,
//             });
//           }
//         );
//     }
//     this.setState({
//       total: this.calculateTotal(),
//     });
//   };

//   // Function to calculate the total cost of items in the cart
//   calculateTotal = () => {
//     let total = 0;
//     cart.forEach((e) => {
//       total += e.p_cost * e.qty;
//     });
//     return total;
//   };

//   // Function to handle user logout
//   logout = () => {
// 	this.setState({
// 	  login: false,
// 	  user: '',
// 	});
  
// 	// Clear the form input fields
// 	document.getElementById('uname').value = '';
// 	document.getElementById('upwd').value = '';
  
// 	// Clear user data from session storage
// 	window.sessionStorage.removeItem('user');
  
// 	// Clear cart data from session storage
// 	window.sessionStorage.removeItem('cart');
//   };
  
//   login = (e) => {
// 	e.preventDefault();
// 	let obj = {
// 	  uname: e.target.uname.value,
// 	  upwd: e.target.upwd.value,
// 	};
// 	axios.post(url + '/fetch/auth', obj).then(
// 	  (posRes) => {
// 		console.log(posRes.data);
// 		if (posRes.data.auth === 'success') {
// 		  console.log('Object in auth :- ', obj);
// 		  this.setState({
// 			...this.state,
// 			login: true,
// 			user: obj.uname,
// 		  });
// 		  console.log('State after login:- ', this.state);
  
// 		  // Store user data in session storage
// 		  window.sessionStorage.setItem('user', obj.uname);
  
// 		  // Fetch the cart data
// 		  this.fetchCart();
// 		} else {
// 		  console.log();
// 		}
// 	  },
// 	  (errRes) => {
// 		console.log(errRes);
// 	  }
// 	);
//   };
  

//   // Function to handle adding an item to the cart
//   addToCart = (item) => {
//     let present = false;
//     let i;
//     for (i = 0; i < cart.length; i++) {
//       if (item.p_id == cart[i].p_id) {
//         present = true;
//         break;
//       }
//     }
//     //if item is present in cart, update it
//     if (present == true) {
//       let myObj = cart[i];
//       let id = myObj.id;
//       let obj = {
//         uname: this.state.user,
//         p_id: myObj.p_id,
//         qty: parseInt(myObj.qty) + 1,
//       };
//       axios
//         .post(url + '/update/updateCart', obj)
//         .then(
//           (posRes) => {
//             cart.forEach((e, i) => {
//               if (e.p_id == obj.p_id) e.qty = obj.qty;
//             });
//             console.log(posRes.statusText);
//             this.setState({
//               status: 'Update ' + posRes.statusText,
//             });
//             this.updateSessionCart(cart); // Update the cart in session storage
//           },
//           (errRes) => {
//             console.log(errRes);
//             this.setState({
//               status: errRes.message,
//             });
//           }
//         );
//     }
//     //if item is not present in cart, insert it
//     else {
//       let obj = {
//         uname: this.state.user,
//         p_name: item.p_name,
//         p_id: item.p_id,
//         qty: 1,
//         p_cost: item.p_cost,
//         p_img: item.p_img,
//       };
//       axios
//         .post(url + '/insert/cartInsert', obj)
//         .then(
//           (posRes) => {
//             this.setState({
//               status: 'Record' + posRes.statusText,
//             });
//             cart.push(obj);
//             this.updateSessionCart(cart); // Update the cart in session storage
//           },
//           (errRes) => {
//             console.log(errRes);
//           }
//         );
//     }
//     this.setState({
//       total: this.calculateTotal(),
//     });
//     console.log(cart);
//   };

//   // Function to handle buying items in the cart
//   buyNow = () => {
//     alert('Thank you for business with us. Total amount: $' + this.calculateTotal());

//     // Clear cart in session storage and state
//     window.sessionStorage.removeItem('cart');
//     cart = [];

//     this.setState({
//       total: 0,
//     });
//   };

//   render() {
//     return (
//       <div className='container col-lg-11 mt-5'>
//         <div hidden={this.state.login}>
//           <form onSubmit={this.login} className='w-50 mx-auto p-4 rounded' style={{ backgroundColor: '#f5f5f5' }}>
//             <div className='form-group'>
//               <label htmlFor='uname' className='font-weight-bold'>
//                 Username
//               </label>
//               <input type='text' id='uname' className='form-control' placeholder='Enter User name' name='uname' required />
//             </div>
//             <div className='form-group'>
//               <label htmlFor='upwd' className='font-weight-bold'>
//                 Password
//               </label>
//               <input type='password' id='upwd' className='form-control' placeholder='Enter Password' name='upwd' required />
//             </div>
//             <div className='form-group text-center'>
//               <button type='submit' className='btn btn-outline-success btn-block'>
//                 Login
//               </button>
//             </div>
//           </form>
//         </div>

//         <div hidden={!this.state.login} className='container mt-4'>
//           <button onClick={this.logout} className='btn btn-danger float-right mt-4 mr-4'>
//             Logout
//           </button>
//           <Header />
//           <div className='d-flex justify-content-between align-items-center mt-3'>
//             <div className='h4 text-info'>Total amount: ${this.calculateTotal()}</div>
//             <button onClick={() => { this.buyNow() }} className='btn btn-success ml-4'>
//               Buy Now
//             </button>
//           </div>
//           <div className='row mt-4'>
//             <div className='col-lg-9'>
//               <div className='row g-4'>
//                 {this.state.products.map((e, i) => (
//                   <div className='col-sm-4 mb-4' key={i}>
//                     <div className='card h-100'>
//                       <img src={e.p_img} className='card-img-top' alt={e.p_name} />
//                       <div className='card-body'>
//                         <h2 className='card-title'>{e.p_name}</h2>
//                         <h4 className='card-subtitle text-muted'>${e.p_cost}</h4>
//                       </div>
//                       <div className='card-footer'>
//                         <button
//                           onClick={() => {
//                             alert(e.p_desc);
//                           }}
//                           className='btn btn-outline-info btn-block btn-sm'
//                           data-toggle='tooltip'
//                           data-placement='bottom'
//                           title={e.p_desc}
//                         >
//                           Learn More
//                         </button>
//                         <button
//                           onClick={() => {
//                             this.addToCart(e);
//                           }}
//                           className='btn btn-outline-success btn-block btn-sm'
//                         >
//                           Add to Cart
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className='col-lg-3'>
//               <div className='bg-light p-3 rounded'>
//                 <h4 className='text-center mb-3'>Shopping Cart</h4>
//                 {cart.map((e, i) => (
//                   // Add a condition to check if the product should be displayed
//                   e.qty > 0 && (
//                     <div className='card mb-3' key={i}>
//                       <div className='row no-gutters'>
//                         <div className='col-4'>
//                           <img src={e.p_img} className='card-img' alt={e.p_name} />
//                         </div>
//                         <div className='col-8'>
//                           <div className='card-body'>
//                             <h6 className='card-title'>{e.p_name}</h6>
//                             <p className='card-text'>Quantity: {e.qty}</p>
//                             <button
//                               onClick={() => {
//                                 this.reduce(e);
//                               }}
//                               className='btn btn-danger btn-sm'
//                             >
//                               Remove
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   )
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }






















// import axios from 'axios'
// import React from 'react'
// import url from './url'
// import Header from './Header'
// let cart = []
// export default class MainComponent extends React.Component {
// 	constructor() {
//     	super()
//     	this.state = {
//         	login: true,
//         	products: []
//     	}
// 	}


// 	updateSessionCart = (cart) => {
// 		sessionStorage.setItem('cart', JSON.stringify(cart));
// 	  };
// 	componentDidMount() {
//     	axios.get(url + "/fetch")
//         	.then((posRes) => {
//             	this.setState({
//                 	products: posRes.data
//             	})
//         	}, (errRes) => {
//             	console.log(errRes)
//   	      })
// 	}

// 	render() {
//     	return (
//         	<div className='container mt-5'>
//             	<div hidden={this.state.login}>
//                 	<form onSubmit={this.login} className='btn btn-outline-dark text-white w-50'>
//                     	<div className='form-group my-2 btn btn-outline-info p-3 w-75'>
//                         	<label className='float-left'>Username</label>
//                         	<input type='text' placeholder='Enter User name' className='form-control' name='uname'></input>
//                     	</div>
//                     	<div className='form-group my-2 btn btn-outline-info p-3 w-75'>
//                         	<label className='float-left'>Password</label>
//                         	<input type='password' placeholder='Enter Password' className='form-control' name='upwd'></input>
//                     	</div>
//                     	<div className='form-group my-2 w-25 mx-auto' align='center'>
//                         	<input type='submit' className='btn btn-outline-success' value='Login'></input>
//                     	</div>
//                 	</form>
//             	</div>
//             	<div hidden={!this.state.login}>
//                 	<button onClick={this.logout} className='btn btn-outline-danger float-right mt-4 mr-5'>Logout</button>
//                 	<Header />
//                 	<div className='h4 text-info mb-2' align="right">
//                     	Total amount:- {this.calculateTotal()}
//                     	<button onClick={() => { this.buyNow() }} className='btn btn-outline-success mx-5'>Buy Now</button>
//                 	</div>
//                 	<div className='row'>
//                     	<div className='col-10'>
//                         	<div className='row row-cols-3'>
//                             	{this.state.products.map((e, i) => (
//                                 	<div className='col my-3'>
//                                     	<div className='card'>
//                                         	<div className='card-header'>
//                                                 <img src={e.p_img} className='card-img-top'></img>
//                                         	</div>
//                                     	</div>
//                                     	<div className='card-body'>
//                                         	<div className='h2 card-title'>{e.p_name}</div>
//                                         	<div className='h4 card-subtitle text-muted'>{e.p_cost}</div>
//                                     	</div>
//                                     	<div className='card-footer'>
//                                         	<button onClick={() => { alert(e.p_desc) }}
//                                                 className="btn btn-outline-info btn-block btn-sm"
//                                                 data-toggle="tooltip"
//                                                 data-placement="bottom"
//                                                 title={e.p_desc}>Learn More</button>
//                                         	<button onClick={() => { this.addToCart(e) }} class="btn btn-outline-success btn-block btn-sm">Add to Cart</button>
//                                     	</div>
//                                 	</div>
//                             	))}
//                         	</div>
//     	                </div>
//                     	<div className='col'>
//                         	<div className='row my-3'>
//                             	{cart.map((e, i) => (
//                                 	<div className='my-3'>
//                                     	<div className=' card'>
//                                         	<div className='card-header'>
//                                                 <img src={e.p_img} className='card-img-top'></img>
//                	                         </div>
//                                         	<div className='card-body'>
//                                                 <div className='h2 card-title'>{e.p_name}</div>
//                                                 <div className='h4 card-subtitle text-muted'>{e.qty}</div>
//                                         	</div>
//                                         	<div className='card-footer'>
//                     	                        <button onClick={() => { this.reduce(e) }} class="btn btn-outline-success btn-block btn-sm">Reduce</button>
//                                         	</div>
//                                     	</div>
//                                 	</div>
//                             	))}
//                         	</div>
//                     	</div>
//                 	</div>
//             	</div>
//         	</div>
//     	)
// 	}
// 	login = (e) => {
//     	e.preventDefault()
//     	let obj = {
//         	uname: e.target.uname.value,
//         	upwd: e.target.upwd.value
//     	}
//     	axios.post(url + "/fetch/auth", obj)
//         	.then((posRes) => {
//             	console.log(posRes.data)
//             	if (posRes.data.auth == 'success') {
//                 	console.log('Object in auth :- ', obj)
//                 	this.setState({
//                     	...this.state,
//                     	login: true,
//                     	user: obj.uname
//                 	})
//                 	console.log('State after login:- ', this.state)
//                     window.sessionStorage.setItem('user', obj.uname)
//            	     this.fetchCart()
//             	}
//         	}, (errRes) => {
//             	console.log(errRes)
//         	})
// 	}




// 	addToCart = (item) => {
// 		    let present = false;
// 		    let i;
// 		    for (i = 0; i < cart.length; i++) {
// 		      if (item.p_id == cart[i].p_id) {
// 		        present = true;
// 		        break;
// 		      }
// 		    }
// 		    //if item is present in cart, update it
// 		    if (present == true) {
// 		      let myObj = cart[i];
// 		      let id = myObj.id;
// 		      let obj = {
// 		        uname: this.state.user,
// 		        p_id: myObj.p_id,
// 		        qty: parseInt(myObj.qty) + 1,
// 		      };
// 		      axios
// 		        .post(url + '/update/updateCart', obj)
// 		        .then(
// 		          (posRes) => {
// 		            cart.forEach((e, i) => {
// 		              if (e.p_id == obj.p_id) e.qty = obj.qty;
// 		            });
// 		            console.log(posRes.statusText);
// 		            this.setState({
// 		              status: 'Update ' + posRes.statusText,
// 		            });
// 		            this.updateSessionCart(cart); // Update the cart in session storage
// 		          },
// 		          (errRes) => {
// 		            console.log(errRes);
// 		            this.setState({
// 		              status: errRes.message,
// 		            });
// 		          }
// 		        );
// 		    }
// 		    //if item is not present in cart, insert it
// 		    else {
// 		      let obj = {
// 		        uname: this.state.user,
// 		        p_name: item.p_name,
// 		        p_id: item.p_id,
// 		        qty: 1,
// 		        p_cost: item.p_cost,
// 		        p_img: item.p_img,
// 		      };
// 		      axios
// 		        .post(url + '/insert/cartInsert', obj)
// 		        .then(
// 		          (posRes) => {
// 		            this.setState({
// 		              status: 'Record' + posRes.statusText,
// 		            });
// 		            cart.push(obj);
// 		            this.updateSessionCart(cart); // Update the cart in session storage
// 		          },
// 		          (errRes) => {
// 		            console.log(errRes);
// 		          }
// 		        );
// 		    }
// 		    this.setState({
// 		      total: this.calculateTotal(),
// 		    });
// 		    console.log(cart);
// 		  };


// 	// addToCart = (item) => {
// 	// 	let present = false;
// 	// 	let i;
// 	// 	for (i = 0; i < cart.length; i++) {
// 	// 	  if (item.p_id === cart[i].p_id) {
// 	// 		present = true;
// 	// 		break;
// 	// 	  }
// 	// 	}
	  
// 	// 	// If the item is present in the cart, update it
// 	// 	if (present === true) {
// 	// 	  let myObj = cart[i];
// 	// 	  let obj = {
// 	// 		"uname": this.state.user,
// 	// 		"p_id": myObj.p_id,
// 	// 		"qty": parseInt(myObj.qty) + 1,
// 	// 	  };
	  
// 	// 	  axios.post(url + "/update/updateCart", obj)
// 	// 		.then((posRes) => {
// 	// 		  cart.forEach((e, i) => {
// 	// 			if (e.p_id === obj.p_id) {
// 	// 			  e.qty = obj.qty;
// 	// 			}
// 	// 		  });
// 	// 		  console.log(posRes.statusText);
// 	// 		  this.setState({
// 	// 			status: 'Update ' + posRes.statusText
// 	// 		  });
// 	// 		})
// 	// 		.catch((errRes) => {
// 	// 		  console.log(errRes);
// 	// 		  this.setState({
// 	// 			status: errRes.message
// 	// 		  });
// 	// 		});
// 	// 	}
// 	// 	// If the item is not present in the cart, insert it
// 	// 	else {
// 	// 	  let obj = {
// 	// 		"uname": this.state.user,
// 	// 		"p_name": item.p_name,
// 	// 		"p_id": item.p_id,
// 	// 		"qty": 1,
// 	// 		"p_cost": item.p_cost,
// 	// 		"p_img": item.p_img
// 	// 	  };
	  
// 	// 	  axios.post(url + "/insert/cartInsert", obj)
// 	// 		.then((posRes) => {
// 	// 		  this.setState({
// 	// 			status: 'Record ' + posRes.statusText
// 	// 		  });
// 	// 		  cart.push(obj);
// 	// 		})
// 	// 		.catch((errRes) => {
// 	// 		  console.log(errRes);
// 	// 		});
// 	// 	}
	  
// 	// 	this.setState({
// 	// 	  total: this.calculateTotal()
// 	// 	});
	  
// 	// 	console.log(cart);
// 	//   }
	  
// 	reduce = (item) => {
// 		console.log('Item id:- ', item.id);
// 		if (item.qty === 1) {
// 			let obj = {
// 				"uname": this.state.user, // Change "u_name" to "uname"
// 				"p_id": item.p_id,
// 			};
// 			axios
// 				.post(url + '/delete/deleteCart', obj)
// 				.then(
// 					(posRes) => {
// 						console.log(posRes);
// 						let indx = cart.findIndex((e, i) => {
// 							return e.p_id === item.p_id;
// 						});
// 						cart.splice(indx, 1);
// 						this.setState({
// 							status: 'Delete ' + posRes.statusText,
// 						});
	
// 						// Update the cart in session storage
// 						this.updateSessionCart(cart);
	
// 						// Remove the product from the database
// 						axios.delete(url + '/delete/deleteProduct/' + item.p_id)
// 							.then(
// 								(posRes) => {
// 									console.log('Product deleted from database:', posRes);
// 								},
// 								(errRes) => {
// 									console.log('Error deleting product from database:', errRes);
// 								}
// 							);
// 					},
// 					(errRes) => {
// 						console.log(errRes);
// 						this.setState({
// 							status: errRes.message,
// 						});
// 					}
// 				);
// 		} 
// 		else {
// 			let obj = {
// 				"uname": this.state.user,
// 				"p_id": item.p_id,
// 				"qty": parseInt(item.qty) - 1,
// 			}
	
// 			axios.post(url + "/update/updateCart", obj)
// 				.then((posRes) => {
// 					cart.forEach((e, i) => {
// 						if (e.p_id == obj.p_id)
// 							e.qty = obj.qty
// 					})
// 					console.log(posRes.statusText)
// 					this.setState({
// 						status: 'Update ' + posRes.statusText
// 					})
// 				}, (errRes) => {
// 					console.log(errRes)
// 					this.setState({
// 						status: errRes.message
// 					})
// 				})
// 		}
// 		this.setState({
// 			total: this.calculateTotal()
// 		})
// 	}
	
	
// buyNow = () => {
// 	alert('Thank you for your business with us. Total amount: $' + this.calculateTotal());
  
// 	// Clear cart in session storage and state
// 	window.sessionStorage.removeItem('cart');
// 	cart = [];
// 	this.setState({
// 	  total: 0,
// 	});
  
// 	// Remove all products from the database
// 	axios.delete(url + '/delete/deleteAllProducts')
// 	  .then(
// 		(posRes) => {
// 		  console.log('All products deleted from database:', posRes);
// 		},
// 		(errRes) => {
// 		  console.log('Error deleting all products from database:', errRes);
// 		}
// 	  );
//   };

  
// //   fetchCart = () => {
// // 	const loggedInUser = window.sessionStorage.getItem('user');
// // 	if (loggedInUser) {
// // 	  axios.post(url + '/fetchCart', { "uname": loggedInUser })
// // 		.then((posRes) => {
// // 		  this.setState({
// // 			status: 'Loading',
// // 		  });
  
// // 		  // Update cart and total state with fetched data
// // 		  cart = posRes.data;
// // 		  cart = cart.filter(item => item.qty > 0); // Filter out items with qty <= 0
// // 		  const total = this.calculateTotal(); // Calculate the total
  
// // 		  this.setState({
// // 			cart: cart, // Set the cart state
// // 			total: total, // Set the total state
// // 			status: '', // Clear the status
// // 		  });
// // 		})
// // 		.catch((errRes) => {
// // 		  console.log(errRes);
// // 		});
// // 	}
// //   };
  



// fetchCart = () => {
// 		const loggedInUser = window.sessionStorage.getItem('user');
// 		if (loggedInUser) {
// 		  const cartData = JSON.parse(window.sessionStorage.getItem('cart')) || [];
		  
// 		  // Filter out removed products (products with qty > 0)
// 		  cart = cartData.filter(item => item.qty > 0);
		  
// 		  this.setState({
// 			total: this.calculateTotal(),
// 		  });
// 		}
// 	  };
  
	  
// 	calculateTotal = () => {
//     	let total = 0
//     	cart.forEach((e, i) => {
//         	total += e.qty * e.p_cost
//     	})
//     	return total
// 	}
// 	logout = () => {
//     	this.setState({
//         	login: false,
//         	user: ''
//     	})
//     	window.sessionStorage.removeItem('user')
// 	}
// }
 




















// import axios from 'axios'
// import React from 'react'
// import url from './url'
// import Header from './Header'
// let cart = []
// export default class MainComponent extends React.Component {
// 	constructor() {
//     	super()
//     	this.state = {
//         	login: true,
//         	products: []
//     	}
// 	}
// 	componentDidMount() {
//     	axios.get(url + "/fetch")
//         	.then((posRes) => {
//             	this.setState({
//                 	products: posRes.data
//             	})
//         	}, (errRes) => {
//             	console.log(errRes)
//   	      })
// 	}
	
// 	render() {
//     	return (
//         	<div className='container mt-5'>
//             	<div hidden={this.state.login}>
//                 	<form onSubmit={this.login} className='btn btn-outline-dark text-white w-50'>
//                     	<div className='form-group my-2 btn btn-outline-info p-3 w-75'>
//                         	<label className='float-left'>Username</label>
//                         	<input type='text' placeholder='Enter User name' className='form-control' name='uname'></input>
//                     	</div>
//                     	<div className='form-group my-2 btn btn-outline-info p-3 w-75'>
//                         	<label className='float-left'>Password</label>
//                         	<input type='password' placeholder='Enter Password' className='form-control' name='upwd'></input>
//                     	</div>
//                     	<div className='form-group my-2 w-25 mx-auto' align='center'>
//                         	<input type='submit' className='btn btn-outline-success' value='Login'></input>
//                     	</div>
//                 	</form>
//             	</div>
//             	<div hidden={!this.state.login}>
//                 	<button onClick={this.logout} className='btn btn-outline-danger float-right mt-4 mr-5'>Logout</button>
//                 	<Header />
//                 	<div className='h4 text-info mb-2' align="right">
//                     	Total amount:- {this.calculateTotal()}
//                     	<button onClick={() => { this.buyNow() }} className='btn btn-outline-success mx-5'>Buy Now</button>
//                 	</div>
//                 	<div className='row'>
//                     	<div className='col-10'>
//                         	<div className='row row-cols-3'>
//                             	{this.state.products.map((e, i) => (
//                                 	<div className='col my-3'>
//                                     	<div className='card'>
//                                         	<div className='card-header'>
//                                                 <img src={e.p_img} className='card-img-top'></img>
//                                         	</div>
//                                     	</div>
//                                     	<div className='card-body'>
//                                         	<div className='h2 card-title'>{e.p_name}</div>
//                                         	<div className='h4 card-subtitle text-muted'>{e.p_cost}</div>
//                                     	</div>
//                                     	<div className='card-footer'>
//                                         	<button onClick={() => { alert(e.p_desc) }}
//                                                 className="btn btn-outline-info btn-block btn-sm"
//                                                 data-toggle="tooltip"
//                                                 data-placement="bottom"
//                                                 title={e.p_desc}>Learn More</button>
//                                         	<button onClick={() => { this.addToCart(e) }} class="btn btn-outline-success btn-block btn-sm">Add to Cart</button>
//                                     	</div>
//                                 	</div>
//                             	))}
//                         	</div>
//     	                </div>
//                     	<div className='col'>
//                         	<div className='row my-3'>
//                             	{cart.map((e, i) => (
//                                 	<div className='my-3'>
//                                     	<div className=' card'>
//                                         	<div className='card-header'>
//                                                 <img src={e.p_img} className='card-img-top'></img>
//                	                         </div>
//                                         	<div className='card-body'>
//                                                 <div className='h2 card-title'>{e.p_name}</div>
//                                                 <div className='h4 card-subtitle text-muted'>{e.qty}</div>
//                                         	</div>
//                                         	<div className='card-footer'>
//                     	                        <button onClick={() => { this.reduce(e) }} class="btn btn-outline-success btn-block btn-sm">Reduce</button>
//                                         	</div>
//                                     	</div>
//                                 	</div>
//                             	))}
//                         	</div>
//                     	</div>
//                 	</div>
//             	</div>
//         	</div>
//     	)
// 	}
// 	login = (e) => {
//     	e.preventDefault()
//     	let obj = {
//         	uname: e.target.uname.value,
//         	upwd: e.target.upwd.value
//     	}
//     	axios.post(url + "/fetch/auth", obj)
//         	.then((posRes) => {
//             	console.log(posRes.data)
//             	if (posRes.data.auth == 'success') {
//                 	console.log('Object in auth :- ', obj)
//                 	this.setState({
//                     	...this.state,
//                     	login: true,
//                     	user: obj.uname
//                 	})
//                 	console.log('State after login:- ', this.state)
//                     window.sessionStorage.setItem('user', obj.uname)
//            	     this.fetchCart()
//             	}
//         	}, (errRes) => {
//             	console.log(errRes)
//         	})
// 	}
// 	addToCart = (item) => {


		
//     	let present = false
//     	let i
//     	for (i = 0; i < cart.length; i++) {
//         	if (item.p_id == cart[i].p_id) {
//             	present = true
//             	break
//         	}
//     	}
		
//     	//if item is present in cart, update it
//     	if (present == true) {
//         	let myObj = cart[i]
//         	let id = myObj.id
//         	let obj = {
//             	"uname": this.state.user,
//             	"p_id": myObj.p_id,
//             	"qty": parseInt(myObj.qty) + 1,
//         	}
//         	axios.post(url + "/update/updateCart", obj)
//             	.then((posRes) => {
//                 	cart.forEach((e, i) => {
//                     	if (e.p_id == obj.p_id)
//                         	e.qty = obj.qty
//                 	})
// 	                console.log(posRes.statusText)
//                 	this.setState({
//                     	status: 'Update ' + posRes.statusText
//                 	})
//             	}, (errRes) => {
//                 	console.log(errRes)
//            	     this.setState({
//                     	status: errRes.message
//                 	})
//             	})
//     	}
//     	//if item is not present in cart, insert it
//     	else {
//         	let obj = {
//             	"uname": this.state.user,
//             	"p_name": item.p_name,
//             	"p_id": item.p_id,
//             	"qty": 1,
//             	"p_cost": item.p_cost,
//             	"p_img": item.p_img
//         	}
//         	axios.post(url + "/insert/cartInsert", obj)
//             	.then((posRes) => {
//                 	this.setState({
//                     	status: 'Record' + posRes.statusText
//                 	})
//                 	cart.push(obj)
//             	}, (errRes) => {
//                 	console.log(errRes)
//             	})
//     	}
//     	this.setState({
//         	total: this.calculateTotal()
//     	})
//     	console.log(cart)
// 	}
// 	reduce = (item) => {
//     	console.log('Item id:- ', item.id)
//     	if (item.qty == 1) {
//         	let obj = {
//             	"u_name": this.state.user,
//             	"p_id": item.p_id
//         	}
//         	axios.post(url + "/delete/deleteCart", obj)
//             	.then((posRes) => {
//                 	console.log(posRes)
//                 	let indx = cart.findIndex((e, i) => {
//                     	return e.p_id === item.p_id
//                 	})
//                 	cart.splice(indx, 1)
//                 	this.setState({
//                     	status: 'Delete ' + posRes.statusText
//                 	})
//             	}, (errRes) => {
//             	    console.log(errRes)
//                 	this.setState({
//                     	status: errRes.message
//                 	})
//             	})
//     	}
//     	else {
//         	let obj = {
//             	"u_name": this.state.user,
//             	"p_id": item.p_id,
//             	"qty": parseInt(item.qty) - 1,
//         	}
//         	axios.post(url + "/update/updateCart", obj)
//             	.then((posRes) => {
//                 	cart.forEach((e, i) => {
//                    	 if (e.p_id == obj.p_id)
//                         	e.qty = obj.qty
//                 	})
//                     console.log(posRes.statusText)
//                 	this.setState({
//                     	status: 'Update ' + posRes.statusText
//                 	})
//             	}, (errRes) => {
//                 	console.log(errRes)
//                 	this.setState({
//                     	status: errRes.message
//                 	})
//             	})
//     	}
// 	    this.setState({
//         	total: this.calculateTotal()
//     	})
// 	}
// 	buyNow = () => { // Check this functionality ????
//     	alert('Thank u for business with us Total amount :- ' + this.calculateTotal())
//     	for (let i = 0; i < cart.length; i++) {
//         	axios.delete(url + "/cart/" + cart[i].id) //==================>?
//             	.then((posRes) => {
//                 	console.log(posRes)
//                 	let indx = cart.findIndex((e, i) => {
//                	     return e.id === cart[i].id
//                 	})
//                 	cart.splice(indx, 1)
//                 	this.setState({
//                     	status: 'Delete ' + posRes.statusText
//                 	})
//             	}, (errRes) => {
//                 	console.log(errRes)
//                 	this.setState({
//                     	status: errRes.message
//                 	})
//             	})
//     	}
// 	}
// 	fetchCart = () => {
//     	axios.post(url + "/fetch/fetchCart", { "uname": window.sessionStorage.getItem('user') }).then((posRes) => {
//         	this.setState({
//             	status: 'Loading'
//         	})
//         	cart = posRes.data
//         	console.log('Cart data:- ', cart)
//         	this.setState({
//             	status: '',
//         	})
//     	}, (errRes) => {
//         	console.log(errRes)
//     	})
//     	let total = 0
//     	for (let i = 0; i < cart.length; i++) {
//         	total += cart[i].p_cost * cart[i].qty
//     	}
//     	this.setState({
//         	total: total
//     	})
// 	}
// 	calculateTotal = () => {
//     	let total = 0
//     	cart.forEach((e, i) => {
//         	total += e.qty * e.p_cost
//     	})
//     	return total
// 	}
// 	logout = () => {
//     	this.setState({
//         	login: false,
//         	user: ''
//     	})
//     	window.sessionStorage.removeItem('user')
// 	}
// }
































































// import axios from 'axios'
// import React from 'react'
// import url from './url'
// import Header from './Header'
// let cart = []
// export default class MainComponent extends React.Component {
// 	constructor() {
//     	super()
//     	this.state = {
//         	login: true,
//         	products: []
//     	}
// 	}
// 	componentDidMount() {
//     	axios.get(url + "/fetch")
//         	.then((posRes) => {
//             	this.setState({
//                 	products: posRes.data
//             	})
//         	}, (errRes) => {
//             	console.log(errRes)
//   	      })
// 	}
	
// 	render() {
//     	return (
//         	<div className='container mt-5'>
//             	<div hidden={this.state.login}>
//                 	<form onSubmit={this.login} className='btn btn-outline-dark text-white w-50'>
//                     	<div className='form-group my-2 btn btn-outline-info p-3 w-75'>
//                         	<label className='float-left'>Username</label>
//                         	<input type='text' placeholder='Enter User name' className='form-control' name='uname'></input>
//                     	</div>
//                     	<div className='form-group my-2 btn btn-outline-info p-3 w-75'>
//                         	<label className='float-left'>Password</label>
//                         	<input type='password' placeholder='Enter Password' className='form-control' name='upwd'></input>
//                     	</div>
//                     	<div className='form-group my-2 w-25 mx-auto' align='center'>
//                         	<input type='submit' className='btn btn-outline-success' value='Login'></input>
//                     	</div>
//                 	</form>
//             	</div>
//             	<div hidden={!this.state.login}>
//                 	<button onClick={this.logout} className='btn btn-outline-danger float-right mt-4 mr-5'>Logout</button>
//                 	<Header />
//                 	<div className='h4 text-info mb-2' align="right">
//                     	Total amount:- {this.calculateTotal()}
//                     	<button onClick={() => { this.buyNow() }} className='btn btn-outline-success mx-5'>Buy Now</button>
//                 	</div>
//                 	<div className='row'>
//                     	<div className='col-10'>
//                         	<div className='row row-cols-3'>
//                             	{this.state.products.map((e, i) => (
//                                 	<div className='col my-3'>
//                                     	<div className='card'>
//                                         	<div className='card-header'>
//                                                 <img src={e.p_img} className='card-img-top'></img>
//                                         	</div>
//                                     	</div>
//                                     	<div className='card-body'>
//                                         	<div className='h2 card-title'>{e.p_name}</div>
//                                         	<div className='h4 card-subtitle text-muted'>{e.p_cost}</div>
//                                     	</div>
//                                     	<div className='card-footer'>
//                                         	<button onClick={() => { alert(e.p_desc) }}
//                                                 className="btn btn-outline-info btn-block btn-sm"
//                                                 data-toggle="tooltip"
//                                                 data-placement="bottom"
//                                                 title={e.p_desc}>Learn More</button>
//                                         	<button onClick={() => { this.addToCart(e) }} class="btn btn-outline-success btn-block btn-sm">Add to Cart</button>
//                                     	</div>
//                                 	</div>
//                             	))}
//                         	</div>
//     	                </div>
//                     	<div className='col'>
//                         	<div className='row my-3'>
//                             	{cart.map((e, i) => (
//                                 	<div className='my-3'>
//                                     	<div className=' card'>
//                                         	<div className='card-header'>
//                                                 <img src={e.p_img} className='card-img-top'></img>
//                	                         </div>
//                                         	<div className='card-body'>
//                                                 <div className='h2 card-title'>{e.p_name}</div>
//                                                 <div className='h4 card-subtitle text-muted'>{e.qty}</div>
//                                         	</div>
//                                         	<div className='card-footer'>
//                     	                        <button onClick={() => { this.reduce(e) }} class="btn btn-outline-success btn-block btn-sm">Reduce</button>
//                                         	</div>
//                                     	</div>
//                                 	</div>
//                             	))}
//                         	</div>
//                     	</div>
//                 	</div>
//             	</div>
//         	</div>
//     	)
// 	}
// 	login = (e) => {
//     	e.preventDefault()
//     	let obj = {
//         	uname: e.target.uname.value,
//         	upwd: e.target.upwd.value
//     	}
//     	axios.post(url + "/fetch/auth", obj)
//         	.then((posRes) => {
//             	console.log(posRes.data)
//             	if (posRes.data.auth == 'success') {
//                 	console.log('Object in auth :- ', obj)
//                 	this.setState({
//                     	...this.state,
//                     	login: true,
//                     	user: obj.uname
//                 	})
//                 	console.log('State after login:- ', this.state)
//                     window.sessionStorage.setItem('user', obj.uname)
//            	     this.fetchCart()
//             	}
//         	}, (errRes) => {
//             	console.log(errRes)
//         	})
// 	}
// 	addToCart = (item) => {


		
//     	let present = false
//     	let i
//     	for (i = 0; i < cart.length; i++) {
//         	if (item.p_id == cart[i].p_id) {
//             	present = true
//             	break
//         	}
//     	}
		
//     	//if item is present in cart, update it
//     	if (present == true) {
//         	let myObj = cart[i]
//         	let id = myObj.id
//         	let obj = {
//             	"uname": this.state.user,
//             	"p_id": myObj.p_id,
//             	"qty": parseInt(myObj.qty) + 1,
//         	}
//         	axios.post(url + "/update/updateCart", obj)
//             	.then((posRes) => {
//                 	cart.forEach((e, i) => {
//                     	if (e.p_id == obj.p_id)
//                         	e.qty = obj.qty
//                 	})
// 	                console.log(posRes.statusText)
//                 	this.setState({
//                     	status: 'Update ' + posRes.statusText
//                 	})
//             	}, (errRes) => {
//                 	console.log(errRes)
//            	     this.setState({
//                     	status: errRes.message
//                 	})
//             	})
//     	}
//     	//if item is not present in cart, insert it
//     	else {
//         	let obj = {
//             	"uname": this.state.user,
//             	"p_name": item.p_name,
//             	"p_id": item.p_id,
//             	"qty": 1,
//             	"p_cost": item.p_cost,
//             	"p_img": item.p_img
//         	}
//         	axios.post(url + "/insert/cartInsert", obj)
//             	.then((posRes) => {
//                 	this.setState({
//                     	status: 'Record' + posRes.statusText
//                 	})
//                 	cart.push(obj)
//             	}, (errRes) => {
//                 	console.log(errRes)
//             	})
//     	}
//     	this.setState({
//         	total: this.calculateTotal()
//     	})
//     	console.log(cart)
// 	}
// 		reduce = (item) => {
// 			console.log('Item id:- ', item.id);
// 			if (item.qty === 1) {
// 				let obj = {
// 					"uname": this.state.user,
// 					"p_id": item.p_id,
// 				};
// 				axios.post(url + "/delete/deleteCart", obj)
// 					.then((posRes) => {
// 						console.log(posRes);
// 						let indx = cart.findIndex((e, i) => {
// 							return e.p_id === item.p_id;
// 						});
// 						cart.splice(indx, 1);
// 						this.setState({
// 							status: 'Delete ' + posRes.statusText,
// 						});
// 					})
// 					.catch((errRes) => {
// 						console.log(errRes);
// 						this.setState({
// 							status: errRes.message,
// 						});
// 					});
// 			} else {
// 				let obj = {
// 					"uname": this.state.user,
// 					"p_id": item.p_id,
// 					"qty": parseInt(item.qty) - 1,
// 				};
// 				axios.post(url + "/update/updateCart", obj)
// 					.then((posRes) => {
// 						cart.forEach((e, i) => {
// 							if (e.p_id === obj.p_id) e.qty = obj.qty;
// 						});
// 						console.log(posRes.statusText);
// 						this.setState({
// 							status: 'Update ' + posRes.statusText,
// 						});
// 					})
// 					.catch((errRes) => {
// 						console.log(errRes);
// 						this.setState({
// 							status: errRes.message,
// 						});
// 					});
// 			}
// 			this.setState({
// 				total: this.calculateTotal(),
// 			});
// 		};
		
// 	buyNow = () => { // Check this functionality ????
//     	alert('Thank u for business with us Total amount :- ' + this.calculateTotal())
//     	for (let i = 0; i < cart.length; i++) {
//         	axios.delete(url + "/cart/" + cart[i].id) //==================>?
//             	.then((posRes) => {
//                 	console.log(posRes)
//                 	let indx = cart.findIndex((e, i) => {
//                	     return e.id === cart[i].id
//                 	})
//                 	cart.splice(indx, 1)
//                 	this.setState({
//                     	status: 'Delete ' + posRes.statusText
//                 	})
//             	}, (errRes) => {
//                 	console.log(errRes)
//                 	this.setState({
//                     	status: errRes.message
//                 	})
//             	})
//     	}
// 	}
// 	fetchCart = () => {
//     	axios.post(url + "/fetch/fetchCart", { "uname": window.sessionStorage.getItem('user') }).then((posRes) => {
//         	this.setState({
//             	status: 'Loading'
//         	})
//         	cart = posRes.data
//         	console.log('Cart data:- ', cart)
//         	this.setState({
//             	status: '',
//         	})
//     	}, (errRes) => {
//         	console.log(errRes)
//     	})
//     	let total = 0
//     	for (let i = 0; i < cart.length; i++) {
//         	total += cart[i].p_cost * cart[i].qty
//     	}
//     	this.setState({
//         	total: total
//     	})
// 	}
// 	calculateTotal = () => {
//     	let total = 0
//     	cart.forEach((e, i) => {
//         	total += e.qty * e.p_cost
//     	})
//     	return total
// 	}
// 	logout = () => {
//     	this.setState({
//         	login: false,
//         	user: ''
//     	})
//     	window.sessionStorage.removeItem('user')
// 	}
// }




















// import axios from 'axios'
// import React from 'react'
// import url from './url'
// import Header from './Header'
// let cart = []
// export default class MainComponent extends React.Component {
// 	constructor() {
//     	super()
//     	this.state = {
// 			isLoggedIn: false,
//         	products: []
//     	}
// 	}
// 	componentDidMount() {
//     	axios.get(url + "/fetch")
//         	.then((posRes) => {
//             	this.setState({
//                 	products: posRes.data
//             	})
//         	}, (errRes) => {
//             	console.log(errRes)
//   	      })
// 	}
	
// 	render() {
// 		if (!this.state.isLoggedIn) {

//     	return (
//         	<div className='container mt-5'>
//             	<div hidden={this.state.login}>
//                 	<form onSubmit={this.login} className='btn btn-outline-dark text-white w-50'>
//                     	<div className='form-group my-2 btn btn-outline-info p-3 w-75'>
//                         	<label className='float-left'>Username</label>
//                         	<input type='text' placeholder='Enter User name' className='form-control' name='uname'></input>
//                     	</div>
//                     	<div className='form-group my-2 btn btn-outline-info p-3 w-75'>
//                         	<label className='float-left'>Password</label>
//                         	<input type='password' placeholder='Enter Password' className='form-control' name='upwd'></input>
//                     	</div>
//                     	<div className='form-group my-2 w-25 mx-auto' align='center'>
//                         	<input type='submit' className='btn btn-outline-success' value='Login'></input>
//                     	</div>
//                 	</form>
//             	</div>
//             	<div hidden={!this.state.login}>
//                 	<button onClick={this.logout} className='btn btn-outline-danger float-right mt-4 mr-5'>Logout</button>
//                 	<Header />
//                 	<div className='h4 text-info mb-2' align="right">
//                     	Total amount:- {this.calculateTotal()}
//                     	<button onClick={() => { this.buyNow() }} className='btn btn-outline-success mx-5'>Buy Now</button>
//                 	</div>
//                 	<div className='row'>
//                     	<div className='col-10'>
//                         	<div className='row row-cols-3'>
//                             	{this.state.products.map((e, i) => (
//                                 	<div className='col my-3'>
//                                     	<div className='card'>
//                                         	<div className='card-header'>
//                                                 <img src={e.p_img} className='card-img-top'></img>
//                                         	</div>
//                                     	</div>
//                                     	<div className='card-body'>
//                                         	<div className='h2 card-title'>{e.p_name}</div>
//                                         	<div className='h4 card-subtitle text-muted'>{e.p_cost}</div>
//                                     	</div>
//                                     	<div className='card-footer'>
//                                         	<button onClick={() => { alert(e.p_desc) }}
//                                                 className="btn btn-outline-info btn-block btn-sm"
//                                                 data-toggle="tooltip"
//                                                 data-placement="bottom"
//                                                 title={e.p_desc}>Learn More</button>
//                                         	<button onClick={() => { this.addToCart(e) }} class="btn btn-outline-success btn-block btn-sm">Add to Cart</button>
//                                     	</div>
//                                 	</div>
//                             	))}
//                         	</div>
//     	                </div>
//                     	<div className='col'>
//                         	<div className='row my-3'>
//                             	{cart.map((e, i) => (
//                                 	<div className='my-3'>
//                                     	<div className=' card'>
//                                         	<div className='card-header'>
//                                                 <img src={e.p_img} className='card-img-top'></img>
//                	                         </div>
//                                         	<div className='card-body'>
//                                                 <div className='h2 card-title'>{e.p_name}</div>
//                                                 <div className='h4 card-subtitle text-muted'>{e.qty}</div>
//                                         	</div>
//                                         	<div className='card-footer'>
//                     	                        <button onClick={() => { this.reduce(e) }} class="btn btn-outline-success btn-block btn-sm">Reduce</button>
//                                         	</div>
//                                     	</div>
//                                 	</div>
//                             	))}
//                         	</div>
//                     	</div>
//                 	</div>
//             	</div>
//         	</div>
//     	)
// 	}
// }
// 	login = (e) => {
//     	e.preventDefault()
//     	let obj = {
//         	uname: e.target.uname.value,
//         	upwd: e.target.upwd.value
//     	}
//     	axios.post(url + "/fetch/auth", obj)
//         	.then((posRes) => {
//             	console.log(posRes.data)
//             	if (posRes.data.auth == 'success') {
//                 	console.log('Object in auth :- ', obj)
//                 	this.setState({
//                     	...this.state,
//                     	login: true,
//                     	user: obj.uname
//                 	})
//                 	console.log('State after login:- ', this.state)
//                     window.sessionStorage.setItem('user', obj.uname)
//            	     this.fetchCart()
//             	}
//         	}, (errRes) => {
//             	console.log(errRes)
//         	})
// 	}
// 	addToCart = (item) => {


		
//     	let present = false
//     	let i
//     	for (i = 0; i < cart.length; i++) {
//         	if (item.p_id == cart[i].p_id) {
//             	present = true
//             	break
//         	}
//     	}
		
//     	//if item is present in cart, update it
//     	if (present == true) {
//         	let myObj = cart[i]
//         	let id = myObj.id
//         	let obj = {
//             	"uname": this.state.user,
//             	"p_id": myObj.p_id,
//             	"qty": parseInt(myObj.qty) + 1,
//         	}
//         	axios.post(url + "/update/updateCart", obj)
//             	.then((posRes) => {
//                 	cart.forEach((e, i) => {
//                     	if (e.p_id == obj.p_id)
//                         	e.qty = obj.qty
//                 	})
// 	                console.log(posRes.statusText)
//                 	this.setState({
//                     	status: 'Update ' + posRes.statusText
//                 	})
//             	}, (errRes) => {
//                 	console.log(errRes)
//            	     this.setState({
//                     	status: errRes.message
//                 	})
//             	})
//     	}
//     	//if item is not present in cart, insert it
//     	else {
//         	let obj = {
//             	"uname": this.state.user,
//             	"p_name": item.p_name,
//             	"p_id": item.p_id,
//             	"qty": 1,
//             	"p_cost": item.p_cost,
//             	"p_img": item.p_img
//         	}
//         	axios.post(url + "/insert/cartInsert", obj)
//             	.then((posRes) => {
//                 	this.setState({
//                     	status: 'Record' + posRes.statusText
//                 	})
//                 	cart.push(obj)
//             	}, (errRes) => {
//                 	console.log(errRes)
//             	})
//     	}
//     	this.setState({
//         	total: this.calculateTotal()
//     	})
//     	console.log(cart)
// 	}
// 		reduce = (item) => {
// 			console.log('Item id:- ', item.id);
// 			if (item.qty === 1) {
// 				let obj = {
// 					"uname": this.state.user,
// 					"p_id": item.p_id,
// 				};
// 				axios.post(url + "/delete/deleteCart", obj)
// 					.then((posRes) => {
// 						console.log(posRes);
// 						let indx = cart.findIndex((e, i) => {
// 							return e.p_id === item.p_id;
// 						});
// 						cart.splice(indx, 1);
// 						this.setState({
// 							status: 'Delete ' + posRes.statusText,
// 						});
// 					})
// 					.catch((errRes) => {
// 						console.log(errRes);
// 						this.setState({
// 							status: errRes.message,
// 						});
// 					});
// 			} else {
// 				let obj = {
// 					"uname": this.state.user,
// 					"p_id": item.p_id,
// 					"qty": parseInt(item.qty) - 1,
// 				};
// 				axios.post(url + "/update/updateCart", obj)
// 					.then((posRes) => {
// 						cart.forEach((e, i) => {
// 							if (e.p_id === obj.p_id) e.qty = obj.qty;
// 						});
// 						console.log(posRes.statusText);
// 						this.setState({
// 							status: 'Update ' + posRes.statusText,
// 						});
// 					})
// 					.catch((errRes) => {
// 						console.log(errRes);
// 						this.setState({
// 							status: errRes.message,
// 						});
// 					});
// 			}
// 			this.setState({
// 				total: this.calculateTotal(),
// 			});
// 		};
		
// 	buyNow = () => { // Check this functionality ????
//     	alert('Thank u for business with us Total amount :- ' + this.calculateTotal())
//     	for (let i = 0; i < cart.length; i++) {
//         	axios.delete(url + "/cart/" + cart[i].id) //==================>?
//             	.then((posRes) => {
//                 	console.log(posRes)
//                 	let indx = cart.findIndex((e, i) => {
//                	     return e.id === cart[i].id
//                 	})
//                 	cart.splice(indx, 1)
//                 	this.setState({
//                     	status: 'Delete ' + posRes.statusText
//                 	})
//             	}, (errRes) => {
//                 	console.log(errRes)
//                 	this.setState({
//                     	status: errRes.message
//                 	})
//             	})
//     	}
// 	}
// 	fetchCart = () => {
//     	axios.post(url + "/fetch/fetchCart", { "uname": window.sessionStorage.getItem('user') }).then((posRes) => {
//         	this.setState({
//             	status: 'Loading'
//         	})
//         	cart = posRes.data
//         	console.log('Cart data:- ', cart)
//         	this.setState({
//             	status: '',
//         	})
//     	}, (errRes) => {
//         	console.log(errRes)
//     	})
//     	let total = 0
//     	for (let i = 0; i < cart.length; i++) {
//         	total += cart[i].p_cost * cart[i].qty
//     	}
//     	this.setState({
//         	total: total
//     	})
// 	}
// 	calculateTotal = () => {
//     	let total = 0
//     	cart.forEach((e, i) => {
//         	total += e.qty * e.p_cost
//     	})
//     	return total
// 	}
// 	logout = () => {
//     	this.setState({
//         	login: false,
//         	user: ''
//     	})
//     	window.sessionStorage.removeItem('user')
// 	}
// }

























// import axios from 'axios'
// import React from 'react'
// import url from './url'
// import Header from './Header'
// let cart = []
// export default class MainComponent extends React.Component {
// 	constructor() {
//     	super()
//     	this.state = {
// 			isLoggedIn: false,
//         	products: []
//     	}
// 	}
// 	componentDidMount() {
//     	axios.get(url + "/fetch")
//         	.then((posRes) => {
//             	this.setState({
//                 	products: posRes.data
//             	})
//         	}, (errRes) => {
//             	console.log(errRes)
//   	      })
// 	}
	

// 	// render() {
// 	// 	if (!this.state.isLoggedIn) {
// 	// 	  return (
// 	// 		<div className='container mt-5 d-flex justify-content-center align-items-center'>
// 	// 		  <div hidden={this.state.login}>
// 	// 			<form onSubmit={this.login} className='card p-4'>
// 	// 			  <h2 className='text-center mb-4'>Login</h2>
// 	// 			  <div className='form-group'>
// 	// 				<label className='text-info'>Username</label>
// 	// 				<input
// 	// 				  type='text'
// 	// 				  placeholder='Enter User name'
// 	// 				  className='form-control'
// 	// 				  name='uname'
// 	// 				/>
// 	// 			  </div>
// 	// 			  <div className='form-group'>
// 	// 				<label className='text-info'>Password</label>
// 	// 				<input
// 	// 				  type='password'
// 	// 				  placeholder='Enter Password'
// 	// 				  className='form-control'
// 	// 				  name='upwd'
// 	// 				/>
// 	// 			  </div>
// 	// 			  <div className='form-group text-center'>
// 	// 				<button type='submit' className='btn btn-success btn-lg btn-block'>Login</button>
// 	// 			  </div>
// 	// 			</form>
// 	// 		  </div>
	  
// 	// 		  <div hidden={!this.state.login}>
// 	// 			<button onClick={this.logout} className='btn btn-danger float-right mt-4 mr-5'>Logout</button>
// 	// 			<Header />
// 	// 			<div className='h4 text-info mb-2 text-right'>
// 	// 			  Total amount: {this.calculateTotal()}
// 	// 			  <button onClick={() => { this.buyNow() }} className='btn btn-success mx-5'>Buy Now</button>
// 	// 			</div>
// 	// 			<div className='row justify-content-center'>
// 	// 			  <div className='col-md-9'>
// 	// 				<div className='row row-cols-3'>
// 	// 				  {this.state.products.map((e, i) => (
// 	// 					<div className='col my-3' key={i}>
// 	// 					  <div className='card'>
// 	// 						<div className='card-body'>
// 	// 						  <img src={e.p_img} className='card-img-top' alt={e.p_name}></img>
// 	// 						  <h5 className='card-title text-dark'>{e.p_name}</h5>
// 	// 						  <p className='card-text text-muted'>{e.p_cost}</p>
// 	// 						  <div className='card-footer'>
// 	// 							<button
// 	// 							  onClick={() => { alert(e.p_desc) }}
// 	// 							  className="btn btn-outline-info btn-block btn-sm"
// 	// 							  data-toggle="tooltip"
// 	// 							  data-placement="bottom"
// 	// 							  title={e.p_desc}
// 	// 							>
// 	// 							  Learn More
// 	// 							</button>
// 	// 							<button
// 	// 							  onClick={() => { this.addToCart(e) }}
// 	// 							  className="btn btn-success btn-block btn-sm"
// 	// 							>
// 	// 							  Add to Cart
// 	// 							</button>
// 	// 						  </div>
// 	// 						</div>
// 	// 					  </div>
// 	// 					</div>
// 	// 				  ))}
// 	// 				</div>
// 	// 			  </div>
// 	// 			  <div className='col-md-3'>
// 	// 				<div className='row my-3'>
// 	// 				  {cart.map((e, i) => (
// 	// 					<div className='my-3' key={i}>
// 	// 					  <div className='card'>
// 	// 						<div className='card-body'>
// 	// 						  <img src={e.p_img} className='card-img-top' alt={e.p_name}></img>
// 	// 						  <h5 className='card-title text-dark'>{e.p_name}</h5>
// 	// 						  <p className='card-text text-muted'>{e.qty}</p>
// 	// 						  <div className='card-footer'>
// 	// 							<button
// 	// 							  onClick={() => { this.reduce(e) }}
// 	// 							  className="btn btn-danger btn-block btn-sm" // Changed color to red
// 	// 							>
// 	// 							  Reduce
// 	// 							</button>
// 	// 						  </div>
// 	// 						</div>
// 	// 					  </div>
// 	// 					</div>
// 	// 				  ))}
// 	// 				</div>
// 	// 			  </div>
// 	// 			</div>
// 	// 		  </div>
// 	// 		</div>
// 	// 	  );
// 	// 	}
// 	//   }
	  
// 	render() {
// 		if (!this.state.isLoggedIn) {
// 		  return (
// 			<div className='container mt-5'>
// 			  <div hidden={this.state.login}>
// 				<form onSubmit={this.login} className='card p-4'>
// 				  <h2 className='text-center mb-4'>Login</h2>
// 				  <div className='form-group'>
// 					<label className='text-info'>Username</label>
// 					<input
// 					  type='text'
// 					  placeholder='Enter User name'
// 					  className='form-control'
// 					  name='uname'
// 					/>
// 				  </div>
// 				  <div className='form-group'>
// 					<label className='text-info'>Password</label>
// 					<input
// 					  type='password'
// 					  placeholder='Enter Password'
// 					  className='form-control'
// 					  name='upwd'
// 					/>
// 				  </div>
// 				  <div className='form-group text-center'>
// 					<button type='submit' className='btn btn-success btn-lg btn-block'>Login</button>
// 				  </div>
// 				</form>
// 			  </div>
	  
// 			  <div hidden={!this.state.login}>
// 				<button onClick={this.logout} className='btn btn-danger float-right mt-4 mr-5'>Logout</button>
// 				<Header />
// 				<div className='h4 text-info mb-2 text-right'>
// 				  Total amount: {this.calculateTotal()}
// 				  <button onClick={() => { this.buyNow() }} className='btn btn-success mx-2 mx-sm-3 mt-2 mt-sm-0'>Buy Now</button>
// 				</div>
// 				<div className='row justify-content-center'>
// 				  <div className='col-12 col-sm-9'>
// 					<div className='row row-cols-1 row-cols-sm-2 row-cols-md-3'>
// 					  {this.state.products.map((e, i) => (
// 						<div className='col my-3' key={i}>
// 						  <div className='card'>
// 							<div className='card-body'>
// 							  <img src={e.p_img} className='card-img-top' alt={e.p_name}></img>
// 							  <h5 className='card-title text-dark'>{e.p_name}</h5>
// 							  <p className='card-text text-muted'>{e.p_cost}</p>
// 							  <div className='card-footer'>
// 								<button
// 								  onClick={() => { alert(e.p_desc) }}
// 								  className="btn btn-outline-info btn-block btn-sm"
// 								  data-toggle="tooltip"
// 								  data-placement="bottom"
// 								  title={e.p_desc}
// 								>
// 								  Learn More
// 								</button>
// 								<button
// 								  onClick={() => { this.addToCart(e) }}
// 								  className="btn btn-success btn-block btn-sm"
// 								>
// 								  Add to Cart
// 								</button>
// 							  </div>
// 							</div>
// 						  </div>
// 						</div>
// 					  ))}
// 					</div>
// 				  </div>
// 				  <div className='col-12 col-sm-3'>
// 					<div className='row my-3'>
// 					  {cart.map((e, i) => (
// 						<div className='my-3' key={i}>
// 						  <div className='card'>
// 							<div className='card-body'>
// 							  <img src={e.p_img} className='card-img-top' alt={e.p_name}></img>
// 							  <h5 className='card-title text-dark'>{e.p_name}</h5>
// 							  <p className='card-text text-muted'>{e.qty}</p>
// 							  <div className='card-footer'>
// 								<button
// 								  onClick={() => { this.reduce(e) }}
// 								  className="btn btn-danger btn-block btn-sm"
// 								>
// 								  Reduce
// 								</button>
// 							  </div>
// 							</div>
// 						  </div>
// 						</div>
// 					  ))}
// 					</div>
// 				  </div>
// 				</div>
// 			  </div>
// 			</div>
// 		  );
// 		}
// 	  }
	  
	  

// 	login = (e) => {
//     	e.preventDefault()
//     	let obj = {
//         	uname: e.target.uname.value,
//         	upwd: e.target.upwd.value
//     	}
//     	axios.post(url + "/fetch/auth", obj)
//         	.then((posRes) => {
//             	console.log(posRes.data)
//             	if (posRes.data.auth == 'success') {
//                 	console.log('Object in auth :- ', obj)
//                 	this.setState({
//                     	...this.state,
//                     	login: true,
//                     	user: obj.uname
//                 	})
//                 	console.log('State after login:- ', this.state)
//                     window.sessionStorage.setItem('user', obj.uname)
//            	     this.fetchCart()
//             	}
//         	}, (errRes) => {
//             	console.log(errRes)
//         	})
// 	}
// 	addToCart = (item) => {


		
//     	let present = false
//     	let i
//     	for (i = 0; i < cart.length; i++) {
//         	if (item.p_id == cart[i].p_id) {
//             	present = true
//             	break
//         	}
//     	}
		
//     	//if item is present in cart, update it
//     	if (present == true) {
//         	let myObj = cart[i]
//         	let id = myObj.id
//         	let obj = {
//             	"uname": this.state.user,
//             	"p_id": myObj.p_id,
//             	"qty": parseInt(myObj.qty) + 1,
//         	}
//         	axios.post(url + "/update/updateCart", obj)
//             	.then((posRes) => {
//                 	cart.forEach((e, i) => {
//                     	if (e.p_id == obj.p_id)
//                         	e.qty = obj.qty
//                 	})
// 	                console.log(posRes.statusText)
//                 	this.setState({
//                     	status: 'Update ' + posRes.statusText
//                 	})
//             	}, (errRes) => {
//                 	console.log(errRes)
//            	     this.setState({
//                     	status: errRes.message
//                 	})
//             	})
//     	}
//     	//if item is not present in cart, insert it
//     	else {
//         	let obj = {
//             	"uname": this.state.user,
//             	"p_name": item.p_name,
//             	"p_id": item.p_id,
//             	"qty": 1,
//             	"p_cost": item.p_cost,
//             	"p_img": item.p_img
//         	}
//         	axios.post(url + "/insert/cartInsert", obj)
//             	.then((posRes) => {
//                 	this.setState({
//                     	status: 'Record' + posRes.statusText
//                 	})
//                 	cart.push(obj)
//             	}, (errRes) => {
//                 	console.log(errRes)
//             	})
//     	}
//     	this.setState({
//         	total: this.calculateTotal()
//     	})
//     	console.log(cart)
// 	}
// 		reduce = (item) => {
// 			console.log('Item id:- ', item.id);
// 			if (item.qty === 1) {
// 				let obj = {
// 					"uname": this.state.user,
// 					"p_id": item.p_id,
// 				};
// 				axios.post(url + "/delete/deleteCart", obj)
// 					.then((posRes) => {
// 						console.log(posRes);
// 						let indx = cart.findIndex((e, i) => {
// 							return e.p_id === item.p_id;
// 						});
// 						cart.splice(indx, 1);
// 						this.setState({
// 							status: 'Delete ' + posRes.statusText,
// 						});
// 					})
// 					.catch((errRes) => {
// 						console.log(errRes);
// 						this.setState({
// 							status: errRes.message,
// 						});
// 					});
// 			} else {
// 				let obj = {
// 					"uname": this.state.user,
// 					"p_id": item.p_id,
// 					"qty": parseInt(item.qty) - 1,
// 				};
// 				axios.post(url + "/update/updateCart", obj)
// 					.then((posRes) => {
// 						cart.forEach((e, i) => {
// 							if (e.p_id === obj.p_id) e.qty = obj.qty;
// 						});
// 						console.log(posRes.statusText);
// 						this.setState({
// 							status: 'Update ' + posRes.statusText,
// 						});
// 					})
// 					.catch((errRes) => {
// 						console.log(errRes);
// 						this.setState({
// 							status: errRes.message,
// 						});
// 					});
// 			}
// 			this.setState({
// 				total: this.calculateTotal(),
// 			});
// 		};
		
// 	buyNow = () => { // Check this functionality ????
//     	alert('Thank u for business with us Total amount :- ' + this.calculateTotal())
//     	for (let i = 0; i < cart.length; i++) {
//         	axios.delete(url + "/cart/" + cart[i].id) //==================>?
//             	.then((posRes) => {
//                 	console.log(posRes)
//                 	let indx = cart.findIndex((e, i) => {
//                	     return e.id === cart[i].id
//                 	})
//                 	cart.splice(indx, 1)
//                 	this.setState({
//                     	status: 'Delete ' + posRes.statusText
//                 	})
//             	}, (errRes) => {
//                 	console.log(errRes)
//                 	this.setState({
//                     	status: errRes.message
//                 	})
//             	})
//     	}
// 	}
// 	fetchCart = () => {
//     	axios.post(url + "/fetch/fetchCart", { "uname": window.sessionStorage.getItem('user') }).then((posRes) => {
//         	this.setState({
//             	status: 'Loading'
//         	})
//         	cart = posRes.data
//         	console.log('Cart data:- ', cart)
//         	this.setState({
//             	status: '',
//         	})
//     	}, (errRes) => {
//         	console.log(errRes)
//     	})
//     	let total = 0
//     	for (let i = 0; i < cart.length; i++) {
//         	total += cart[i].p_cost * cart[i].qty
//     	}
//     	this.setState({
//         	total: total
//     	})
// 	}
// 	calculateTotal = () => {
//     	let total = 0
//     	cart.forEach((e, i) => {
//         	total += e.qty * e.p_cost
//     	})
//     	return total
// 	}
// 	logout = () => {
//     	this.setState({
//         	login: false,
//         	user: ''
//     	})
//     	window.sessionStorage.removeItem('user')
// 	}
// }















import axios from 'axios';
import React from 'react';
import url from './url';
import Header from './Header';

let cart = [];

export default class MainComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      products: [],
      uname: '', // Add uname and upwd fields to the component's state
      upwd: '',
    };
  }

  componentDidMount() {
    axios.get(url + '/fetch').then(
      (posRes) => {
        this.setState({
          products: posRes.data,
        });
      },
      (errRes) => {
        console.log(errRes);
      }
    );
  }

  render() {
    if (!this.state.isLoggedIn) {
      return (
        <div className='container mt-5'>
          <div hidden={this.state.login}>
            <form onSubmit={this.login} className='card p-4'>
              <h2 className='text-center mb-4'>Login</h2>
              <div className='form-group'>
                <label className='text-info'>Username</label>
                <input
                  type='text'
                  placeholder='Enter User name'
                  className='form-control'
                  name='uname'
                  value={this.state.uname} // Bind value to the state
                  onChange={(e) => this.setState({ uname: e.target.value })} // Update state on change
                />
              </div>
              <div className='form-group'>
                <label className='text-info'>Password</label>
                <input
                  type='password'
                  placeholder='Enter Password'
                  className='form-control'
                  name='upwd'
                  value={this.state.upwd} // Bind value to the state
                  onChange={(e) => this.setState({ upwd: e.target.value })} // Update state on change
                />
              </div>
              <div className='form-group text-center'>
                <button type='submit' className='btn btn-success btn-lg btn-block'>
                  Login
                </button>
              </div>
            </form>
          </div>

          <div hidden={!this.state.login}>
            <button onClick={this.logout} className='btn btn-danger float-right mt-4 mr-5'>
              Logout
            </button>
            <Header />
            <div className='h4 text-info mb-2 text-right'>
              Total amount: {this.calculateTotal()}
              <button onClick={() => { this.buyNow() }} className='btn btn-success mx-2 mx-sm-3 mt-2 mt-sm-0'>
                Buy Now
              </button>
            </div>
            <div className='row justify-content-center'>
              <div className='col-12 col-sm-9'>
                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3'>
                  {this.state.products.map((e, i) => (
                    <div className='col my-3' key={i}>
                      <div className='card'>
                        <div className='card-body'>
                          <img src={e.p_img} className='card-img-top' alt={e.p_name}></img>
                          <h5 className='card-title text-dark'>{e.p_name}</h5>
                          <p className='card-text text-muted'>{e.p_cost}</p>
                          <div className='card-footer'>
                            <button
                              onClick={() => { alert(e.p_desc) }}
                              className='btn btn-outline-info btn-block btn-sm'
                              data-toggle='tooltip'
                              data-placement='bottom'
                              title={e.p_desc}
                            >
                              Learn More
                            </button>
                            <button
                              onClick={() => { this.addToCart(e) }}
                              className='btn btn-success btn-block btn-sm'
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className='col-12 col-sm-3'>
                <div className='row my-3'>
                  {cart.map((e, i) => (
                    <div className='my-3' key={i}>
                      <div className='card'>
                        <div className='card-body'>
                          <img src={e.p_img} className='card-img-top' alt={e.p_name}></img>
                          <h5 className='card-title text-dark'>{e.p_name}</h5>
                          <p className='card-text text-muted'>{e.qty}</p>
                          <div className='card-footer'>
                            <button
                              onClick={() => { this.reduce(e) }}
                              className='btn btn-danger btn-block btn-sm'
                            >
                              Reduce
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
	  
	  

	login = (e) => {
    	e.preventDefault()
    	let obj = {
        	uname: e.target.uname.value,
        	upwd: e.target.upwd.value
    	}
    	axios.post(url + "/fetch/auth", obj)
        	.then((posRes) => {
            	console.log(posRes.data)
            	if (posRes.data.auth == 'success') {
                	console.log('Object in auth :- ', obj)
                	this.setState({
                    	...this.state,
                    	login: true,
                    	user: obj.uname,
						uname: '', // Clear the username field
						upwd: '', // Clear the password field
                	})
                	console.log('State after login:- ', this.state)
                    window.sessionStorage.setItem('user', obj.uname)
           	     this.fetchCart()
            	}
        	}, (errRes) => {
            	console.log(errRes)
        	})
	}
	addToCart = (item) => {


		
    	let present = false
    	let i
    	for (i = 0; i < cart.length; i++) {
        	if (item.p_id == cart[i].p_id) {
            	present = true
            	break
        	}
    	}
		
    	//if item is present in cart, update it
    	if (present == true) {
        	let myObj = cart[i]
        	let id = myObj.id
        	let obj = {
            	"uname": this.state.user,
            	"p_id": myObj.p_id,
            	"qty": parseInt(myObj.qty) + 1,
        	}
        	axios.post(url + "/update/updateCart", obj)
            	.then((posRes) => {
                	cart.forEach((e, i) => {
                    	if (e.p_id == obj.p_id)
                        	e.qty = obj.qty
                	})
	                console.log(posRes.statusText)
                	this.setState({
                    	status: 'Update ' + posRes.statusText
                	})
            	}, (errRes) => {
                	console.log(errRes)
           	     this.setState({
                    	status: errRes.message
                	})
            	})
    	}
    	//if item is not present in cart, insert it
    	else {
        	let obj = {
            	"uname": this.state.user,
            	"p_name": item.p_name,
            	"p_id": item.p_id,
            	"qty": 1,
            	"p_cost": item.p_cost,
            	"p_img": item.p_img
        	}
        	axios.post(url + "/insert/cartInsert", obj)
            	.then((posRes) => {
                	this.setState({
                    	status: 'Record' + posRes.statusText
                	})
                	cart.push(obj)
            	}, (errRes) => {
                	console.log(errRes)
            	})
    	}
    	this.setState({
        	total: this.calculateTotal()
    	})
    	console.log(cart)
	}
		reduce = (item) => {
			console.log('Item id:- ', item.id);
			if (item.qty === 1) {
				let obj = {
					"uname": this.state.user,
					"p_id": item.p_id,
				};
				axios.post(url + "/delete/deleteCart", obj)
					.then((posRes) => {
						console.log(posRes);
						let indx = cart.findIndex((e, i) => {
							return e.p_id === item.p_id;
						});
						cart.splice(indx, 1);
						this.setState({
							status: 'Delete ' + posRes.statusText,
						});
					})
					.catch((errRes) => {
						console.log(errRes);
						this.setState({
							status: errRes.message,
						});
					});
			} else {
				let obj = {
					"uname": this.state.user,
					"p_id": item.p_id,
					"qty": parseInt(item.qty) - 1,
				};
				axios.post(url + "/update/updateCart", obj)
					.then((posRes) => {
						cart.forEach((e, i) => {
							if (e.p_id === obj.p_id) e.qty = obj.qty;
						});
						console.log(posRes.statusText);
						this.setState({
							status: 'Update ' + posRes.statusText,
						});
					})
					.catch((errRes) => {
						console.log(errRes);
						this.setState({
							status: errRes.message,
						});
					});
			}
			this.setState({
				total: this.calculateTotal(),
			});
		};
		
	buyNow = () => { // Check this functionality ????
    	alert('Thank u for business with us Total amount :- ' + this.calculateTotal())
    	for (let i = 0; i < cart.length; i++) {
        	axios.delete(url + "/cart/" + cart[i].id) //==================>?
            	.then((posRes) => {
                	console.log(posRes)
                	let indx = cart.findIndex((e, i) => {
               	     return e.id === cart[i].id
                	})
                	cart.splice(indx, 1)
                	this.setState({
                    	status: 'Delete ' + posRes.statusText
                	})
            	}, (errRes) => {
                	console.log(errRes)
                	this.setState({
                    	status: errRes.message
                	})
            	})
    	}
	}
	fetchCart = () => {
    	axios.post(url + "/fetch/fetchCart", { "uname": window.sessionStorage.getItem('user') }).then((posRes) => {
        	this.setState({
            	status: 'Loading'
        	})
        	cart = posRes.data
        	console.log('Cart data:- ', cart)
        	this.setState({
            	status: '',
        	})
    	}, (errRes) => {
        	console.log(errRes)
    	})
    	let total = 0
    	for (let i = 0; i < cart.length; i++) {
        	total += cart[i].p_cost * cart[i].qty
    	}
    	this.setState({
        	total: total
    	})
	}
	calculateTotal = () => {
    	let total = 0
    	cart.forEach((e, i) => {
        	total += e.qty * e.p_cost
    	})
    	return total
	}
	logout = () => {
    	this.setState({
        	login: false,
        	user: ''
    	})
    	window.sessionStorage.removeItem('user')
	}
}




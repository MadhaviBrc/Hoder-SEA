import React, { Component } from 'react';
import AUX from '../../hoc/Aux_';

 
 
class Loggedin extends Component {
    render() {
        return (
        <AUX>
            		   {/*Page header*/}
						{/*<div class="page-header">
							<div class="page-leftheader">
								<h4 class="page-title">Congratulations you are successfully logged in.</h4>
							</div>
		</div>*/}
						{/*End Page header*/}


						{/*Row*/}
						<div className='left-bar'>
			 <i class="fa fa-user" aria-hidden="true"></i><h3>User Profile</h3>
				 <ul class="sidebar-submenu in">
					 
				<img src="../static/assets/images/profile.jpg" alt="profile pic"/>
<li><a href="#"><i textaria-hidden="true"></i><b>Sravani</b></a></li>
<li><a href="#"><i aria-hidden="true"></i>Functional Advisor</a></li>
<li><a href="#"><i aria-hidden="true"></i>Hoder-SEA</a></li>
</ul>
			 </div>
			 <div className='container grid'>
				 <div class="row">
				 <div class="col-md-6 col-xl-3">
					 <div class="widget-rounded-circle card-box">
						 <div class="row">
							 <div class="col-6">
							 <i class="fa fa-male" aria-hidden="true"></i>
							 </div>
							 <div class="col-6">
								 <div class="text-right">
									 <h3 class="mt-1 text-dark">Students</h3>
									 <p class="text-muted mb-1 text-truncate">40</p>
								 </div>
							 </div>
						 </div> 
					 </div>
				 </div>

				 <div class="col-md-6 col-xl-3">
					 <div class="widget-rounded-circle card-box">
						 <div class="row">
							 <div class="col-6">
							 <i class="fa fa-user-o" aria-hidden="true"></i>
							 </div>
							 <div class="col-6">
								 <div class="text-right">
									 <h3 class="text-dark mt-1">Staff</h3>
									 <p class="text-muted mb-1 text-truncate">200</p>
								 </div>
							 </div>
						 </div>
					 </div> 
				 </div>

				 <div class="col-md-6 col-xl-3">
					 <div class="widget-rounded-circle card-box">
						 <div class="row">
							 <div class="col-6">
							 <i class="fa fa-book" aria-hidden="true"></i>
							 </div>
							 <div class="col-6">
								 <div class="text-right">
									 <h3 class="text-dark mt-1">Departments</h3>
									 <p class="text-muted mb-1 text-truncate">6</p>
								 </div>
							 </div>
						 </div> 
					 </div> 
				 </div> 

				 <div class="col-md-6 col-xl-3">
					 <div class="widget-rounded-circle card-box">
						 <div class="row">
							 <div class="col-6">
							 <i class="fa fa-phone" aria-hidden="true"></i>
							 </div>
							 <div class="col-6">
								 <div class="text-right">
									 <h3 class="text-dark mt-1">Contact</h3>
									 <p class="text-muted mb-1 text-truncate">Email-Id</p>
								 </div>
							 </div>
						 </div> 
					 </div> 
				 </div> 
			 </div>
			 
				 </div>
				
		</AUX> 
)
    }
}
export default Loggedin;
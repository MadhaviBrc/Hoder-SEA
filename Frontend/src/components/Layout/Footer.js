import React, { Component } from "react";
import { render } from "react-dom";
import AUX from '../../hoc/Aux_';


class Footer extends React.Component {
	render() {		
		return (
			<AUX>
            
			<footer class="footer">
                <div class="container">
                    <div class="row align-items-center flex-row-reverse">
                        <div class="col-md-12 col-sm-12 mt-3 mt-lg-0 text-center">
                            Copyright © 2020 <a href="#">Hodersea</a>. Designed by <a href="#">Hodersea Pvt.Ltd</a> All rights reserved.
                        </div>
                    </div>
                </div>
            </footer>
				
			</AUX>
		);
	}
}export default Footer;
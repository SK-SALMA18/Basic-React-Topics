import React from "react";
function Footer()
{
    return(
        <React.Fragment>
            <footer id="footer" >
                <div className="container p-4">
                    <div className="row">
                        <div className="col-sm-4"></div>
                        <h5><b>About us</b></h5>
                        <p>You can allow our link through this about us link</p>
                    </div>
                    <div className="col-sm-2">
                            <h5><b>Navagation</b></h5>
                            <p><a href="">Home</a></p>
                            <p><a href="">About Us</a></p>
                            <p><a href="">Contact us</a></p>
                            <p><a href="">Services</a></p>
                        </div>
                        <div className="col-sm-2">
                            <h5><b>Address</b></h5>
                            <p>India</p>
                            <p>Pin 12345</p>
                            <p>+919988456781</p>
                        </div>
                </div>
            </footer>
        </React.Fragment>
    )
}
export default Footer;
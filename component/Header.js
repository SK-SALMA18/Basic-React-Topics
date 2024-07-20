import React from "react";
function Header()
{
    return(
        <React.Fragment>
           <nav class="navbar navbar-expand-lg header">
            <div class="container">
                <div class="navbar-header">
                <a class="navbar-brand" href="#">Ecommerce</a>
                </div>
                        <ul class="nav navbar-nav">
                        <li class="active"><a href="#">Home</a></li>
                        <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Shopping Item <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                            <li><a href="#">jwellery</a></li>
                            <li><a href="#">make up items</a></li>
                            <li><a href="#">grocery</a></li>
                            </ul>
                        </li>
                        <li><a href="#"><span class="glyphicon glyphicon-heart"></span>Whistle</a></li>
                        <li><a href="#"><span class="glyphicon glyphicon-cart"></span>Cart</a></li>
                        </ul>
                        <ul class="nav navbar-nav navbar-right">
                        <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                        </ul>
                    </div>
</nav>
        </React.Fragment>
    )
}
export default Header;
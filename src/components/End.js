import React from "react";
import { Link } from "react-router-dom";
import './End.css';

function End() {
    return(
        <div className="End">
            <Link to="/"><img src={"../images/icon.png"} alt="icon"></img></Link>
            <p>Copyright 2023 Make you University | All Rights Reserved</p>
            <i>makeyouuniversity@gmail.com</i>
        </div>
    );
}
export default End;
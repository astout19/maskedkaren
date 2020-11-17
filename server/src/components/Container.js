import React from "react";
import "../styles/Container.css";

// Component for container
function Container(props) {
    return <div className="container">{props.children}</div>
}

export default Container;
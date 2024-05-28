import React from "react";

import './MainHeader.css';


//props-children ==> refers to things passed between opening and closing tags of the component 
const MainHeader = props =>{
    return <header className="main-header">
      {props.children}

    </header>
}
export default MainHeader;
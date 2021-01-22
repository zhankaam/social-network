import preloader from "../images/Spin-1.4s-137px (1).svg";
import React from "react";


export let Preloader = (props: any) => {
    return <div style={{backgroundColor: 'white'}}>
    <img src={preloader} />
    </div>
}
import React from "react";
import {Preloader} from "../assets/common/Preloader";

export function withSuspense<WCP>(WrappedComponent: React.ComponentType<WCP>)  {

     return (props: WCP) => {
         return <React.Suspense fallback={<div>loading...</div>}>
             <WrappedComponent {...props}/>
         </React.Suspense>
     }
}
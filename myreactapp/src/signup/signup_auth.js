import React from "react";
import Authform from "./signup";
import { sendUserAuthRequest } from "../api-helpers/api-helpers";

const Auth = () => {
    const getData=(data)=>{
        console.log("Auth",data);
        sendUserAuthRequest(data.inputs,data.signup)
        .then((res)=>console.log(res)
        ).catch((err)=>console.log(err))
    };
    return ( 
        <div>
            <Authform onSubmit={getData} />
        </div>
     );
}
 
export default Auth;
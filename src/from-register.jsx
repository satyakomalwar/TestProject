import { useState} from "react";

export function ReactFormDemo()
{
    const[userDetails,setUserDetails]=useState({UserName:'',Age:0,Mobile:'',City:''});

    function handleUserName(e){
        setUserDetails({
            UserName:e.target.value,
            Age:userDetails.Age,
            Mobile:userDetails.Mobile,
            City:userDetails.City
        })

    }

    function handleAge(e){
        setUserDetails({
            UserName:userDetails.UserName,
            Age:parseInt(e.target.value),
            Mobile:userDetails.Mobile,
            City:userDetails.City

        })
    }

    function handleMobile(e){
        setUserDetails({
            UserName:userDetails.UserName,
            Age:userDetails.Age,
            Mobile:e.target.value,
            City:userDetails.City
        })
    }

    function handleCity(e){
        setUserDetails({
            UserName:userDetails.UserName,
            Age:userDetails.Age,
            Mobile:userDetails.Mobile,
            City:e.target.value 
        })
    }
    
    function handleSubmit(e){
        e.preventDefault();
        alert(JSON.stringify(userDetails));
    }

    return(
        <div className="container-fluid">
            <form onSubmit={handleSubmit}>
                <h3>Register User</h3>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" onChange={handleUserName}/></dd>
                    <dt>Age</dt>
                    <dd><input type="number" onChange={handleAge}/></dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" onChange={handleMobile}/></dd>
                    <dt>City</dt>
                    <dd>
                        <select onChange={handleCity}>
                            <option>Choose City</option>
                            <option>Delhi</option>
                            <option>Hyderabad</option>
                        </select>
                    </dd>
                </dl>
                <button className="btn btn-primary" >Register</button>
            </form>

        </div>
    )
}
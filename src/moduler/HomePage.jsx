import { useState } from "react";

export default function HomePage({ updateLogInStatus, updateUserInfo }) {
    //const status = "HomePage";
    const [userName, setUserName] = useState("");

    function handleClick(event) {
        event.preventDefault();
        updateLogInStatus("ShopPage");
        updateUserInfo(userName);
    }

    function handleChange(event) {
        setUserName(event.target.value);
        console.log(userName)
    }


    return (
        <>
            <form>
                <input type="text" placeholder="Name" onChange={handleChange}></input>
                <button onClick={handleClick}>Log In</button>
            </form>
        </>
    )
}
import ReactDOM from "react-dom/client";
import { useState } from "react";
import HomePage from "./moduler/HomePage.jsx"
import ShopPage from "./moduler/ShopPage.jsx";
import ShoppingCartPage from "./moduler/ShoppingCartPage.jsx";


function App() {
    //useState and setter for username
    const [stateName, setStateName] = useState('');
    function updateUserInfo(userName) {
        setStateName(userName);
        console.log(userName);
    }

    //useState for log in value and a method that sets the value
    const [stateIsLoggedIn, setStateIsLoggedIn] = useState("HomePage");
    function updateLogInStatus(status) {
        setStateIsLoggedIn(status)
    }

    //useState and setter for total amount of products
    const [total, setTotal] = useState(0);
    function totalProducts(tot) {
        setTotal(tot);
    }

    //useState to get total price from ShopPage and send it to ShoppingCart
    const [totalPrice, setTotalPrice] = useState(0);
    function totalPriceMain(tot) {
        setTotalPrice(tot);
    }

    const [totalTShirt1, setTotalTShirt1] = useState(0);
    const [totalTShirt2, setTotalTShirt2] = useState(0);
    const [totalTShirt3, setTotalTShirt3] = useState(0);
    const [totalTShirt4, setTotalTShirt4] = useState(0);
    const [totalTShirt5, setTotalTShirt5] = useState(0);
    function totalTshirts(totTshirt1, totTshirt2, totTshirt3, totTshirt4, totTshirt5) {
        setTotalTShirt1(totTshirt1);
        setTotalTShirt2(totTshirt2);
        setTotalTShirt3(totTshirt3);
        setTotalTShirt4(totTshirt4);
        setTotalTShirt5(totTshirt5);
    }


    return (
        //this return renders different components depending on the stateIsLoggedIn value.
        <>
            {stateIsLoggedIn == "ShopPage" && <ShopPage updateLogInStatus={updateLogInStatus} stateName={stateName} totalProducts={totalProducts} totalPriceMain={totalPriceMain} totalTshirts={totalTshirts} />}
            {stateIsLoggedIn == "HomePage" && <HomePage updateLogInStatus={updateLogInStatus} updateUserInfo={updateUserInfo} />}
            {stateIsLoggedIn == "Cart" && <ShoppingCartPage updateLogInStatus={updateLogInStatus} stateName={stateName} total={total} totalPrice={totalPrice} totalTShirt1={totalTShirt1} totalTShirt2={totalTShirt2} totalTShirt3={totalTShirt3} totalTShirt4={totalTShirt4} totalTShirt5={totalTShirt5} />}
        </>
    )
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
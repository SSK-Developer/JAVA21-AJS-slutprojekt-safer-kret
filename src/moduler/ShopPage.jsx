import { useState } from "react";
import ProductStructure from "./ProductStructure";

export default function ShopPage({ updateLogInStatus, stateName, totalProducts, totalPriceMain, totalTshirts }) {

    const product1 = {
        Name: "Beige T-Shirt",
        price: 99,
        url: "https://img01.ztat.net/article/spp-media-p1/3a6c7e6105a240d989acfb689ef8efc5/f00a25d8da9a404d946ba9bb331c1f0d.jpg?imwidth=300&filter=packshot",
        id: 1
    }

    const product2 = {
        Name: "Marinblå T-Shirt",
        price: 99,
        url: "https://img01.ztat.net/article/spp-media-p1/e89125a77218434f94aa4230a422d086/34e24723b609433bacf278442637da0c.jpg?imwidth=300&filter=packshot",
        id: 2
    }

    const product3 = {
        Name: "Vit T-Shirt",
        price: 99,
        url: "https://img01.ztat.net/article/spp-media-p1/4e556655698446d2b0180b8567e07533/9f01cff01ec142e9bb98dbab842f4f75.jpg?imwidth=300&filter=packshot",
        id: 3
    }

    const product4 = {
        Name: "Grön T-Shirt",
        price: 99,
        url: "https://img01.ztat.net/article/spp-media-p1/ecb02e3516394d689985a80ec0cc7ff1/39b19613363544f584004acb06301fbd.jpg?imwidth=300&filter=packshot",
        id: 4
    }

    const product5 = {
        Name: "Svart T-Shirt",
        price: 99,
        url: "https://img01.ztat.net/article/spp-media-p1/b89405a7864b4edf8e6f8af006586cab/3c8bcfe4a3934ae0a7f6cc45c290643c.jpg?imwidth=300&filter=packshot",
        id: 5
    }

    //useState
    const [sum, setSum] = useState(0);
    const [Price, setPrice] = useState(0);
    const [tShirt1, setTShirt1] = useState(0);
    const [tShirt2, setTShirt2] = useState(0);
    const [tShirt3, setTShirt3] = useState(0);
    const [tShirt4, setTShirt4] = useState(0);
    const [tShirt5, setTShirt5] = useState(0);
    
    //Add 1 to sum and receive current product price and multipli to sum
    function totalSum(price, id) {
        setSum(sum + 1)
        setPrice((sum + 1) * price)

        if (id == 1) {
            setTShirt1(tShirt1 + 1);
        }
        else if (id == 2) {
            setTShirt2(tShirt2 + 1);
        }
        else if (id == 3) {
            setTShirt3(tShirt3 + 1);
        }
        else if (id == 4) {
            setTShirt4(tShirt4 + 1);
        }
        else {
            setTShirt5(tShirt5 + 1);
        }
    }

    //Subtract 1 to sum and receive current product price and multipli to sum
    function removeFromSum(price, id) {
        setSum(sum - 1);
        setPrice((sum - 1) * price)

        if (id == 1) {
            setTShirt1(tShirt1 - 1);
        }
        else if (id == 2) {
            setTShirt2(tShirt2 - 1);
        }
        else if (id == 3) {
            setTShirt3(tShirt3 - 1);
        }
        else if (id == 4) {
            setTShirt4(tShirt4 - 1);
        }
        else {
            setTShirt5(tShirt5 - 1);
        }
    }
    console.log("tshirt1: " + tShirt1);
    console.log("tshirt2: " + tShirt2);
    console.log("tshirt3: " + tShirt3);
    console.log("tshirt4: " + tShirt4);
    console.log("tshirt5: " + tShirt5);

    //function that directs to homepage
    function clickToHomePage(event) {
        event.preventDefault();
        updateLogInStatus("HomePage");
    }

    //function that directs to Cart and sends the final total amount of products to ShoppingCartPage.jsx
    function goToCart() {
        totalProducts(sum);
        totalPriceMain(Price);
        totalTshirts(tShirt1, tShirt2, tShirt3, tShirt4, tShirt5);
        updateLogInStatus("Cart");
    }

    console.log(sum)
    console.log(Price)
    return (
        <>
            <h1>Welcome {stateName}</h1>
            <p>Shopping-Cart (amount of products): {sum}</p>
            <button onClick={goToCart}>Go to cart</button>
            <button onClick={clickToHomePage}>Log Out</button>
            <br />
            <ProductStructure pInfo={product1} totalSum={totalSum} removeFromSum={removeFromSum} />
            <ProductStructure pInfo={product2} totalSum={totalSum} removeFromSum={removeFromSum} />
            <ProductStructure pInfo={product3} totalSum={totalSum} removeFromSum={removeFromSum} />
            <ProductStructure pInfo={product4} totalSum={totalSum} removeFromSum={removeFromSum} />
            <ProductStructure pInfo={product5} totalSum={totalSum} removeFromSum={removeFromSum} />
        </>
    )
}
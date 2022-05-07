export default function ShoppingCartPage({ stateName, updateLogInStatus, total, totalPrice, totalTShirt1, totalTShirt2, totalTShirt3, totalTShirt4, totalTShirt5 }) {

    //function that directs to homepage
    function clickToHomePage(event) {
        event.preventDefault();
        updateLogInStatus("HomePage");
    }

    //function to purchase products and direct to homepage
    function purchase(event) {
        event.preventDefault();
        updateLogInStatus("HomePage");
        alert("You purchased " + total + " products with the price of: " + totalPrice + "$")
    }

    function product1() {
        if (totalTShirt1 > 0) {
            return (
                <>
                    <img src="https://img01.ztat.net/article/spp-media-p1/3a6c7e6105a240d989acfb689ef8efc5/f00a25d8da9a404d946ba9bb331c1f0d.jpg?imwidth=30&filter=packshot"></img>
                    <p>amount: {totalTShirt1}X</p>
                </>
            )
        }
    }

    function product2() {
        if (totalTShirt2 > 0) {
            return (
                <>
                    <img src="https://img01.ztat.net/article/spp-media-p1/e89125a77218434f94aa4230a422d086/34e24723b609433bacf278442637da0c.jpg?imwidth=30&filter=packshot"></img>
                    <p>amount: {totalTShirt2}X</p>
                </>
            )
        }
    }

    function product3() {
        if (totalTShirt3 > 0) {
            return (
                <>
                    <img src="https://img01.ztat.net/article/spp-media-p1/4e556655698446d2b0180b8567e07533/9f01cff01ec142e9bb98dbab842f4f75.jpg?imwidth=30&filter=packshot"></img>
                    <p>amount: {totalTShirt3}X</p>
                </>
            )
        }
    }

    function product4() {
        if (totalTShirt4 > 0) {
            return (
                <>
                    <img src="https://img01.ztat.net/article/spp-media-p1/ecb02e3516394d689985a80ec0cc7ff1/39b19613363544f584004acb06301fbd.jpg?imwidth=30&filter=packshot"></img>
                    <p>amount {totalTShirt4}X</p>
                </>
            )
        }
    }

    function product5() {
        if (totalTShirt5 > 0) {
            return (
                <>
                    <img src="https://img01.ztat.net/article/spp-media-p1/b89405a7864b4edf8e6f8af006586cab/3c8bcfe4a3934ae0a7f6cc45c290643c.jpg?imwidth=30&filter=packshot"></img>
                    <p>amount {totalTShirt5}X</p>
                </>
            )
        }
    }

    return (

        <>
            <h1>Thanks for ordering {stateName}</h1>
            <h1>Total products: {total}</h1>
            <h1>Total price: {totalPrice}$</h1>
            {product1()}
            {product2()}
            {product3()}
            {product4()}
            {product5()}
            <button onClick={purchase}>Purchase</button>
            <button onClick={clickToHomePage}>Log Out</button>
        </>
    )
}

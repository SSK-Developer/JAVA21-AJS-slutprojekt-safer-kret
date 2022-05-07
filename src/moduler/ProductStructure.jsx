export default function ProductStructure({ pInfo, totalSum, removeFromSum }) {
    
    const { Name, price, url, id } = pInfo

    //add +1 amount to cart and send the current product price
    function addToCart() {
        totalSum(price, id)
    }
    //subtract -1 amount from cart and send the current product price
    function removeFromCart() {
        removeFromSum(price, id);
    }

    return (
        <>
            <h2>{Name}</h2>
            <h2>{price}$</h2>
            <img src={url}></img>
            <button onClick={addToCart}>+</button>
            <button onClick={removeFromCart}>-</button>
        </>
    )
}
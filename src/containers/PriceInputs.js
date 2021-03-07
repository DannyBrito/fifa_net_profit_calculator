
const PriceInputs = ({sellPrice,buyPrice, handleChange}) =>{

    return(
        <div className="price_input_container">
            <div className="input_box">
                <label htmlFor="buyPrice">Buy Price: </label>
                <input type="number" name="buyPrice" value={buyPrice.toString()} onChange={handleChange}/>
            </div>
            <div className="input_box">
                <label htmlFor="sellPricePrice"> Sell Price: </label>
                <input type="number" name="sellPrice" value={sellPrice.toString()} onChange={handleChange}/>
            </div>
        </div>
    )
}

export default PriceInputs
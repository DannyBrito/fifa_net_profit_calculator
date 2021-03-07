import PricesDisplay from '../containers/PricesDisplay'
import {useEffect,useState} from 'react'
import PriceInputs from '../containers/PriceInputs'
const Main = () =>{


    const eaTax = 0.05
    const [sellPrice,setSellPrice] = useState(0)
    const [buyPrice, setBuyPrice] = useState(0)
    const [profit, setProfit] = useState({amount:0,color:''})

    useEffect(()=>{
        let taxTotal = sellPrice * eaTax
        let newProfit = sellPrice - taxTotal - buyPrice
        newProfit = Math.floor(newProfit)
        let color = ( newProfit> 0)? 'gain' : 'loss'
        setProfit({ color, amount:newProfit})

    },[sellPrice,buyPrice])

    const handleChange = (event) =>{
        const targetName = event.target.name
        let newValue = event.target.value
        newValue = (newValue === '')? 0 : parseInt(newValue)
        switch (targetName) {
            case 'sellPrice':
                setSellPrice(newValue)
                break;
            case 'buyPrice':
                setBuyPrice(newValue)
                break;
            default:
                break;
        }
    }

    return(
        <div className="Main">

            <PricesDisplay profit={profit.amount} sellPrice={sellPrice} buyPrice={buyPrice} profitColor={profit.color}/>

            <PriceInputs sellPrice={sellPrice} buyPrice={buyPrice} handleChange={handleChange}/>

        </div>
    )
}

export default Main
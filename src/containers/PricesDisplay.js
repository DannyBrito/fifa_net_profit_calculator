import { Card, CardContent, Typography } from "@material-ui/core"

const PricesDisplay = ({buyPrice,sellPrice,profit,profitColor}) =>{


    return(
        <div className="prices_card_container">
            <Card className="Main_card Buy_card">
            <CardContent>
                <Typography  color="textSecondary">
                    Buy Price
                </Typography>
                <Typography variant="h3">
                    {buyPrice}
                </Typography>
            </CardContent>
            </Card>

            <Card className="Main_card Sell_card">
            <CardContent>
                <Typography  color="textSecondary">
                    Sell Price
                </Typography>
                <Typography variant="h3">
                    {sellPrice}
                </Typography>
            </CardContent>
            </Card>

            <Card className="Main_card Profit_card">
            <CardContent>
                <Typography  color="textSecondary">
                    Net Profit
                </Typography>
                <Typography variant="h3" className={profitColor}>
                    {profit}
                </Typography>
            </CardContent>
            </Card>
        </div>
    )
}

export default PricesDisplay
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const stockData = [
     {
        name: "Apple",
        symbol: "AAPL",
        openingPrice: 190.60,
        percentageChange: 3.17,
        currentPrice: 195.5,
        exchange:"Nasdaq",
        marketCap:"3.00 T. $"
      },
       {
        name: "Microsoft",
        symbol: "MSFT",
        openingPrice: 345.24,
        percentageChange: -5.90,
        currentPrice: 325.65,
        exchange:"Nasdaq",
        marketCap:"2.57 T. $"
      },
       {
        name: "Amazon",
        symbol: "AMZN",
        openingPrice: 134.68,
        percentageChange: 0.38,
        currentPrice: 135.5,
        exchange:"Nasdaq",
        marketCap:"1.38 T. $"
      },
      {
        name: "NVIDIA",
        symbol: "NVDA",
        openingPrice: 454.72,
        percentageChange: 4.16,
        currentPrice: 476.59,
        exchange:"Nasdaq",
        marketCap:"1.12 T. $"
      },
       {
        name: "Alphabet className A",
        symbol: "GOOGL",
        openingPrice: 125.42,
        percentageChange: -0.88,
        currentPrice: 124.15,
        exchange:"Nasdaq",
        marketCap:"1.60 T. $"
      }
    
]
 




app.get('/api/stock', (req, res) => {
  res.json(stockData);
});


const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

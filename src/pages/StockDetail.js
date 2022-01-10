import data from "../data";

function StockDetail(props) {
  console.log("stock detail received", props);
  const symbol = props.match.params.symbol;

  const stockData = data.find((stock) => stock.symbol === symbol);
  return (
    <table>
      <caption>
        <h1>Most Active Stocks</h1>
      </caption>
      <thead>
        <tr>
          <th>Company Name</th>
          <th>Price</th>
          <th>Change</th>
          <th>High</th>
          <th>Low</th>
          <th>Open</th>
        </tr>
      </thead>
      <tbody>
        <tr className="sctock-ul">
          <td>{stockData.name}</td>
          <td>{stockData.lastPrice}</td>
          <td>{stockData.change}</td>
          <td>{stockData.high}</td>
          <td>{stockData.low}</td>
          <td>{stockData.open}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default StockDetail;

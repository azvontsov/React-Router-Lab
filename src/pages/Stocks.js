import data from "../data";

function Stocks() {
  return (
    <main>
      <ul>
        {data.map(({ name, symbol }, index) => {
          return (
            <li key={index}>
              <a href={`/stocks/${symbol}`}>
                {name} ({symbol})
              </a>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default Stocks;

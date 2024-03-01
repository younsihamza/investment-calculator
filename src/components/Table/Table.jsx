import { calculateInvestmentResults , formatter } from "../../util/investment";
export default function Table({ tableValue }) {
  const tablePrice = calculateInvestmentResults(tableValue);
  console.log(tablePrice);
  return (
    <table id="result" >
      <thead>
        <tr>
          <td>Year</td>
          <td>Investment Value</td>
          <td>Interest (Year)</td>
          <td>Total Interest</td>
          <td>Invested Capital</td>
        </tr>
      </thead>
      <tbody>
        {tablePrice.map((item) => {
          return (
            <tr className="center">
              <td>{item.year}</td>
              <td>{formatter.format(item.investmentValue)}</td>
              <td>{formatter.format(item.interest)}</td>
              <td>{formatter.format(item.Totalinterest)}</td>
              <td>{formatter.format(item.investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

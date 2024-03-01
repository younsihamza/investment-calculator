
export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const annualData = [];
  let investedCapital = initialInvestment;
  let TotalInterest = 0;
  for(let i = 1 ; i <= duration ; i++)
  {
    const annual = {};
    annual.interest = investedCapital * expectedReturn / 100; 
    TotalInterest +=  annual.interest
    investedCapital +=  annualInvestment;
    annual.investmentValue = TotalInterest + investedCapital;
    annual.year = i;
    annual.investedCapital = investedCapital;
    annual.Totalinterest = TotalInterest;
    annualData.push(annual);
  }
  return annualData;
}


export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

//index.js
import amortize from 'amortize'


export const getAffordabilityNumbers = ( input ) => {
/**
input: 
purchasePrice
rehabAmount
mortgageLength
cashDownRate
interestRate
appraisalPrice
monthlyPretaxIncome
monthlyDebt
cashInBank
**/
    var oneMonthDetails = amortize({
      amount: input.purchasePrice * ( 1 - input.cashDownRate/100 ),
      rate: input.interestRate,
      totalTerm: input.mortgageLength * 12,
      amortizeTerm: 1,
    });

    // adjust some of the input as negative values in balance sheet
    var monthlyPretaxIncome = parseFloat(input.monthlyPretaxIncome)
    var rehabAmount = parseFloat(input.rehabAmount) * -1 
    var cashDownRate = parseFloat(input.cashDownRate / 100)
    var monthlyDebtPayment = parseFloat(input.monthlyDebtPayment * -1)
    var purchasePrice = parseFloat(input.purchasePrice * -1)
    var propTaxRate = parseFloat(input.propTaxRate) /100
    var insurance = parseFloat(input.insurance) *-1
    var monthlyInsurance = insurance / 12
    var incomeTaxBracket = parseFloat(input.incomeTaxBracket) /100
    var cashInBank = parseFloat(input.cashInBank)
    var stdDebtRatio = parseFloat(input.stdDebtRatio) /100
    var closingCost = parseFloat(input.closingCostRate) /100 * purchasePrice
    var appraisalPrice = parseFloat(input.appraisalPrice)
    var hoaFees = parseFloat(input.hoa) * -1


    var appraisalBalance = purchasePrice + appraisalPrice
    var appraisalBalance = appraisalBalance < 0 ? appraisalBalance : 0 
 

    var monthlyHoa = hoaFees == 0 ? 0 : hoaFees /12
    var monthlyInterest = oneMonthDetails.interest * -1;
    var monthlyPropTax = purchasePrice * propTaxRate / 12;
    var monthlyPrincipal = oneMonthDetails.principal * -1;
    var monthlyPIIT = monthlyInterest + monthlyPropTax + monthlyPrincipal + monthlyInsurance + monthlyHoa;
    var monthlyTaxSavings = (monthlyInterest + monthlyPropTax) * incomeTaxBracket
    var monthlyCostAfterTax = monthlyPIIT - monthlyTaxSavings;
    var monthlyPayment = monthlyInterest + monthlyPrincipal;
    

    var cashDownCost = purchasePrice * (cashDownRate)
    var cashBeforeReserve = cashInBank + cashDownCost + rehabAmount + closingCost + appraisalBalance
    var reserveRequirementCost = monthlyPIIT * 6
    var cashAfterReserve = cashBeforeReserve + reserveRequirementCost
    var monthlyDebtsCost = monthlyPIIT + monthlyDebtPayment;
    var debtRatio = (monthlyDebtsCost / monthlyPretaxIncome) * -1;
   
    return {
        closingCost,
        monthlyInterest,
        monthlyPropTax,
        monthlyPrincipal,
        monthlyInsurance,
        monthlyPIIT,
        monthlyTaxSavings,
        monthlyCostAfterTax,
        monthlyPayment, 
        monthlyHoa,
        cashInBank,
        cashDownCost,
        rehabAmount, 
        cashBeforeReserve, 
        cashAfterReserve,
        reserveRequirementCost,
        monthlyPretaxIncome, 
        cashDownRate, 
        monthlyDebtPayment, 
        purchasePrice, 
        incomeTaxBracket,
        debtRatio,
        monthlyDebtsCost,
        stdDebtRatio, 
        appraisalBalance
    }

}

export const getCashFlowStatement = ( input ) => {
    /* input: {
        purchasePrice, 
        interestRate, 
        monthlyRent, 
        occupancyRate, 
        operatingExpensesRate, 
        hoaFees, 
        taxBracket,
        cashDownRate,
        insuranceCost, 
        depreciationRate,
        propertyTaxRate,
        mortgageLength
    */
    var purchasePrice = parseFloat(input.purchasePrice) * -1
    var interestRate = parseFloat(input.interestRate) /100
    var monthlyRent = parseFloat(input.monthlyRent)
    var occupancyRate = parseFloat(input.occupancyRate) /100
    var operatingExpensesRate = parseFloat(input.operatingExpensesRate) /100
    var hoaFees = parseFloat(input.hoaFees) * -1
    var taxBracket = parseFloat(input.taxBracket) /100
    var cashDownRate = parseFloat(input.cashDownRate) /100
    var insuranceCost = parseFloat(input.insuranceCost) * -1
    var depreciationRate = parseFloat(input.depreciationRate) /100
    var propertyTaxRate = parseFloat(input.propertyTaxRate) /100
    var mortgageLength = parseFloat(input.mortgageLength)

    var propertyTax = purchasePrice * propertyTaxRate
    var loanAmount = purchasePrice * ( 1 - cashDownRate )
    var cashDownAmount = purchasePrice * cashDownRate
    var rentalIncome = monthlyRent * 12;
    var vacancyLoss = rentalIncome * (1 - occupancyRate) * -1;
    var operatingExpenses = (rentalIncome * operatingExpensesRate * -1) + hoaFees * 12
    var netOperatingIncome = rentalIncome + vacancyLoss + operatingExpenses;

    var details = amortize({
      amount: loanAmount * -1,
      rate: interestRate * 100,
      totalTerm: mortgageLength * 12,
      amortizeTerm: 12
    });

    var mortgageInterest = details.interest * -1;
    var depreciation = purchasePrice * depreciationRate / 27.5;
    var taxableIncome = netOperatingIncome + mortgageInterest + depreciation + propertyTax;
    var annualDebtService = (details.interest + details.principal) * -1;
    var pretaxCashflow = netOperatingIncome + annualDebtService + propertyTax + insuranceCost;
    var afterTaxCashFlow = 0;
    var taxDue = 0;
    if (taxableIncome > 0){
      taxDue = taxableIncome * taxBracket;
      afterTaxCashFlow = pretaxCashflow - taxDue;
    }else{
      afterTaxCashFlow = pretaxCashflow;
    }
    var taxSavings = (pretaxCashflow * taxBracket)  - (taxableIncome * taxBracket);

    return ({
        rentalIncome, 
        monthlyRentalIncome: rentalIncome / 12,
        occupancyRate,
        vacancyLoss,
        monthlyVacancyLoss: vacancyLoss / 12,
        operatingExpensesRate,
        operatingExpenses, 
        monthlyOperatingExpenses: operatingExpenses /12,
        netOperatingIncome,
        monthlyNetOperatingIncome: netOperatingIncome /12,
        annualDebtService, 
        monthlyAnnualDebtService: annualDebtService /12,
        propertyTaxRate,
        propertyTax,
        monthlyPropertyTax: propertyTax /12,
        insuranceCost, 
        monthlyInsuranceCost: insuranceCost /12,
        pretaxCashflow,
        monthlyPretaxCashflow: pretaxCashflow /12,
        mortgageInterest,
        depreciation,
        depreciationRate,
        propertyTax,
        taxableIncome,
        taxDue,
        afterTaxCashFlow,
        monthlyAfterTaxCashFlow: afterTaxCashFlow /12,
        taxBracket

    })

}

// export const getMonthlyMortgageData = (purchasePrice, interestRate, mortgageLength, cashDownRate) => {
// 	var oneMonthDetails = amortize({
//       amount: purchasePrice * ( 1 - cashDownRate/100 ),
//       rate: interestRate,
//       totalTerm: mortgageLength * 12,
//       amortizeTerm: 1,
//     });
//     var propTaxRate = 0.0125/12;
//     var monthlyInsurance = 800/12 * -1;
//     var incomeTaxBracket = 0.33;

//     var monthlyInterest = oneMonthDetails.interest * -1;
//     var monthlyPropTax = purchasePrice * propTaxRate / 12 * -1;
//     var monthlyPrincipal = oneMonthDetails.principal * -1;
//     var monthlyPIIT = monthlyInterest + monthlyPropTax + monthlyPrincipal + monthlyInsurance;
//     var monthlyTaxSavings = (monthlyInterest + monthlyPropTax) * incomeTaxBracket
//     var monthlyCostAfterTax = monthlyPIIT - monthlyTaxSavings;
//     var monthlyPayment = monthlyInterest + monthlyPrincipal;

// 	return {
// 		monthlyInterest,
//     	monthlyPropTax,
//     	monthlyPrincipal,
//     	monthlyPIIT,
//     	monthlyTaxSavings,
//     	monthlyCostAfterTax,
//     	monthlyPayment, 
//         monthlyInsurance
// 	}
// }


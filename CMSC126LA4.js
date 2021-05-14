function taxCompute(){
    var income = document.getElementById('income_input').value;
    var dependents_input = document.getElementById('dependents_input').value;

    //Gross Income Computation (with 13th month pay)
    var grossIncome = (income * 13);

    //Form fill-up error checking
    if (income <= "0"){
    alert("Please input monthly income greater than or equal to 1 Php.");
    return;}
    var worker = document.getElementsByName('worker');
        if(worker[0].checked)
        {
            var deductions = income * 0.13875
        }
        else if(worker[1].checked)
        {
            var deductions = income * 0.15875
        } else {
            alert('Please confirm if government worker or not.');
            return;
        }

    //Dependents Condition
    var dependents;
    if (dependents_input >= 4){
    dependents = 4;}
    else{
    dependents = dependents_input;}
    
    //Net Taxable Income Computation
    var netTaxableIncome = ((grossIncome) - (50000 + (dependents * 50000) + (deductions*12)));
    
    //Payable Tax Computation
    if (netTaxableIncome >= 1 && netTaxableIncome <= 250000){
        var payableTax = 0;}
    else if (netTaxableIncome >= 250000 && netTaxableIncome <= 400000){
        var payableTax = (0.20 * (netTaxableIncome - 250000));}
    else if (netTaxableIncome >= 400000 && netTaxableIncome <= 800000){
        var payableTax = (30000 + ((netTaxableIncome - 400000) * 0.25));}
    else if (netTaxableIncome >= 800000 && netTaxableIncome <= 2000000){
        var payableTax = (130000 + ((netTaxableIncome - 800000) * 0.30));}
    else if (netTaxableIncome >= 2000000 && netTaxableIncome <= 8000000){
        var payableTax = (490000 + ((netTaxableIncome - 2000000) * 0.32));}
    else if (netTaxableIncome > 8000000){
        var payableTax = (2410000 + ((netTaxableIncome - 8000000) * 0.35));}
    else {
        var payableTax = 0;
    }
    document.getElementById('result').innerHTML = "Your total payable tax is: " + payableTax + " Php";
    document.getElementById('programInfo').innerHTML = "This program is aimed to calculate the user's payable tax & their salary deductions.";
    document.getElementById('creatorInfo').innerHTML = "Daniel John Cahatian";
}

    function deductionCompute(){
var income = document.getElementById('income_input').value;
var dependents_input = document.getElementById('dependents_input').value;

//Gross Income Computation (with 13th month pay)
var grossIncome = (income * 13);

//Form fill-up error checking
if (income <= "0"){
alert("Please input monthly income greater than or equal to 1 Php.");
return;}
var worker = document.getElementsByName('worker');
if(worker[0].checked)
{
    var deductions = income * 0.13875
}
else if(worker[1].checked)
{
    var deductions = income * 0.15875
} else {
    alert('Please confirm if government worker or not.');
    return;
}

//Dependents Condition
var dependents;
if (dependents_input >= 4){
dependents = 4;}
else{
dependents = dependents_input;}

//Net Taxable Income Computation
var netTaxableIncome = ((grossIncome) - (50000 + (dependents * 50000) + (deductions*12)));

//Payable Tax Computation
if (netTaxableIncome >= 1 && netTaxableIncome <= 250000){
var payableTax = 0;}
else if (netTaxableIncome >= 250000 && netTaxableIncome <= 400000){
var payableTax = (0.20 * (netTaxableIncome - 250000));}
else if (netTaxableIncome >= 400000 && netTaxableIncome <= 800000){
var payableTax = (30000 + ((netTaxableIncome - 400000) * 0.25));}
else if (netTaxableIncome >= 800000 && netTaxableIncome <= 2000000){
var payableTax = (130000 + ((netTaxableIncome - 800000) * 0.30));}
else if (netTaxableIncome >= 2000000 && netTaxableIncome <= 8000000){
var payableTax = (490000 + ((netTaxableIncome - 2000000) * 0.32));}
else if (netTaxableIncome > 8000000){
var payableTax = (2410000 + ((netTaxableIncome - 8000000) * 0.35));}
else {
var payableTax = 0;
}
document.getElementById('result').innerHTML = "Your total deduction is: " + (50000 + (dependents * 50000) + (deductions*12)) + " Php";
document.getElementById('programInfo').innerHTML = "This program is aimed to calculate the user's payable tax & their salary deductions.";
document.getElementById('creatorInfo').innerHTML = "Daniel John Cahatian";
}

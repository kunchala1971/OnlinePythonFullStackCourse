let grossBillAmountElement=document.getElementById("gross_bill_amount");
let discountAmountElement=document.getElementById("dis_amount");
let netAmountElement=document.getElementById("net_amount");
let taxAmountElement=document.getElementById("tax_percent");
let amountElement=document.getElementById("amount");
let tipAmountElement=document.getElementById("tip_amount");
let netBillAmountElement=document.getElementById("net_bill_amount");
function submitHandler()
{
	alert("Payment is Over");
}
function getNetAmount()
{
let net_amount=parseInt(grossBillAmountElement.value)-parseInt(discountAmountElement.value);
netAmountElement.value=net_amount;
}
function getAmount()
{
	let net_amount=parseInt(grossBillAmountElement.value)-parseInt(discountAmountElement.value);
	let amount=net_amount+(net_amount*parseInt(taxAmountElement.value))/100;
	amountElement.value=amount;
}
function getNetBillAmount()
{
	let net_amount=parseInt(grossBillAmountElement.value)-parseInt(discountAmountElement.value);
	let amount=net_amount+(net_amount*parseInt(taxAmountElement.value))/100;
	let netBillAmount=amount+parseInt(tipAmountElement.value);
	netBillAmountElement.value=netBillAmount;
}
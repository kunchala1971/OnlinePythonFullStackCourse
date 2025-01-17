let grossBillAmountElement=document.getElementById("gross_bill_amount");
let discountAmountElement=document.getElementById("dis_amount");
let netAmountElement=document.getElementById("net_amount");
let taxAmountElement=document.getElementById("tax_percent");
let amountElement=document.getElementById("amount");
let tipAmountElement=document.getElementById("tip_amount");
let netBillAmountElement=document.getElementById("net_bill_amount");
let bill_split_nosElement=document.getElementById("bill_split_nos");
let for_each_amountElement=document.getElementById("for_each_amount");

function submitHandler()
{
	alert("Payment is Over");
}
function getNetAmount()
{
let net_amount=parseInt(grossBillAmountElement.value)-parseInt(discountAmountElement.value);
netAmountElement.value=parseInt(net_amount);
}
function getAmount()
{
	let net_amount=parseInt(grossBillAmountElement.value)-parseInt(discountAmountElement.value);
	let amount=net_amount+(net_amount*parseInt(taxAmountElement.value))/100;
	amountElement.value=parseInt(amount);
}
function getNetBillAmount()
{
	let net_amount=parseInt(grossBillAmountElement.value)-parseInt(discountAmountElement.value);
	let amount=net_amount+(net_amount*parseInt(taxAmountElement.value))/100;
	let netBillAmount=amount+parseInt(tipAmountElement.value);
	netBillAmountElement.value=parseInt(netBillAmount);
}
function getSplitAmount()
{
	let net_amount=parseInt(netBillAmountElement.value);
	let forEachAmount=parseInt(net_amount/parseInt(bill_split_nosElement.value));
	for_each_amountElement.value=parseInt(forEachAmount);

}
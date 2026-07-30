alert("Script Loaded");
// =================================
// LIYAS WARRANTY PORTAL
// Warranty Registration Script
// =================================


document.addEventListener("DOMContentLoaded", function(){


const form = document.getElementById("warrantyForm");


if(form){


form.addEventListener("submit", async function(e){


e.preventDefault();



const data = {

customerName:
document.getElementById("customerName").value.trim(),

mobile:
document.getElementById("mobile").value.trim(),

dealerName:
document.getElementById("dealerName").value.trim(),

productModel:
document.getElementById("productModel").value.trim(),

serialNumber:
document.getElementById("serialNumber").value.trim(),

purchaseDate:
document.getElementById("purchaseDate").value

};


console.log("From Data:", data);
const result = await registerWarranty(data);
alert(JSON.stringify(result));
console.log("Result:", result);


const message =
document.getElementById("message");



if(result.success){


message.innerHTML =
"<span style='color:#00ff00'>"+result.message+"</span>";

form.reset();


}
else{


message.innerHTML =
"<span style='color:red'>"+result.message+"</span>";


}



});


}



});

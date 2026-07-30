// script.js

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("warrantyForm");

    if (!form) return;

    form.addEventListener("submit", async function (e) {

        e.preventDefault();

        const customerName = document.getElementById("customerName").value.trim();
        const mobile = document.getElementById("mobile").value.trim();
        const dealerName = document.getElementById("dealerName").value.trim();
        const productModel = document.getElementById("productModel").value.trim();
        const serialNumber = document.getElementById("serialNumber").value.trim();
        const purchaseDate = document.getElementById("purchaseDate").value;

        if (
            !customerName ||
            !mobile ||
            !dealerName ||
            !productModel ||
            !serialNumber ||
            !purchaseDate
        ) {
            alert("Please fill all fields.");
            return;
        }

        console.log({
            customerName,
            mobile,
            dealerName,
            productModel,
            serialNumber,
            purchaseDate
        });

        document.getElementById("message").innerHTML =
            "<span style='color:lime'>Warranty Registered Successfully.</span>";

        form.reset();

    });

});

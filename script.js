alert("CONFIG FILE LOADED");
document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("warrantyForm");
    const message = document.getElementById("message");
    const button = document.getElementById("registerBtn");

    if (!form) {
        alert("FORM NOT FOUND");
        return;
    }

    alert("SCRIPT LOADED");

    form.addEventListener("submit", async function(e){

        e.preventDefault();

        button.disabled = true;
        button.innerHTML = "Registering...";

        message.innerHTML = "<span style='color:yellow'>Step 1 : Button Click OK</span>";

        await new Promise(resolve => setTimeout(resolve,1000));

        message.innerHTML = "<span style='color:lime'>Step 2 : Script Working OK</span>";

        await new Promise(resolve => setTimeout(resolve,1000));

        message.innerHTML = "<span style='color:cyan'>Step 3 : Now Calling Supabase...</span>";

        try{

            const result = await registerWarranty({

                customerName: document.getElementById("customerName").value.trim(),
                mobile: document.getElementById("mobile").value.trim(),
                dealerName: document.getElementById("dealerName").value.trim(),
                productModel: document.getElementById("productModel").value.trim(),
                serialNumber: document.getElementById("serialNumber").value.trim(),
                purchaseDate: new Date().toISOString().split("T")[0]

            });

            message.innerHTML =
            "<span style='color:lime'>Step 4 : Supabase Returned -> "
            + JSON.stringify(result) +
            "</span>";

        }catch(err){

            message.innerHTML =
            "<span style='color:red'>Step 4 ERROR : "
            + err.message +
            "</span>";

        }

        button.disabled = false;
        button.innerHTML = "Register Warranty";

    });

});

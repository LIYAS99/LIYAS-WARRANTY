// =================================
// LIYAS WARRANTY PORTAL
// New Script Version 2
// =================================

alert("LIYAS NEW SCRIPT LOADED v2");


document.addEventListener("DOMContentLoaded", function () {


    const form = document.getElementById("warrantyForm");


    if (!form) {
        console.log("Warranty form not found");
        return;
    }



    form.addEventListener("submit", async function (e) {


        e.preventDefault();


        const data = {

            customerName: document.getElementById("customerName").value.trim(),

            mobile: document.getElementById("mobile").value.trim(),

            dealerName: document.getElementById("dealerName").value.trim(),

            productModel: document.getElementById("productModel").value.trim(),

            serialNumber: document.getElementById("serialNumber").value.trim(),

            purchaseDate: document.getElementById("purchaseDate").value

        };



        const message = document.getElementById("message");


        message.innerHTML = "Saving Warranty...";



        try {


            const result = await registerWarranty(data);



            console.log("Supabase Result:", result);



            if (result.success) {


                message.innerHTML =
                "<span style='color:lime'>Warranty Registered Successfully</span>";


                form.reset();


            } else {


                message.innerHTML =
                "<span style='color:red'>" + result.message + "</span>";


            }



        } catch (error) {


            console.error("Error:", error);


            message.innerHTML =
            "<span style='color:red'>Error Connecting Database</span>";

        }


    });



});

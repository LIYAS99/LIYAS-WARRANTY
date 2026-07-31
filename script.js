// ======================================
// LIYAS WARRANTY PORTAL
// script.js v2
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("warrantyForm");
    const message = document.getElementById("message");
    const button = document.getElementById("registerBtn");

    if (!form) return;

    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        button.disabled = true;
        button.innerHTML = "Registering...";

        message.innerHTML = "";

        const today = new Date().toISOString().split("T")[0];

        const data = {
            customerName: document.getElementById("customerName").value.trim(),
            mobile: document.getElementById("mobile").value.trim(),
            dealerName: document.getElementById("dealerName").value.trim(),
            productModel: document.getElementById("productModel").value.trim(),
            serialNumber: document.getElementById("serialNumber").value.trim(),
            purchaseDate: today
        };

        try {

            const result = await registerWarranty(data);

            if (result.success) {

                message.innerHTML =
                    "<span style='color:#00cc66;font-weight:bold;'>✅ Warranty Registered Successfully</span>";

                form.reset();

            } else {

                message.innerHTML =
                    "<span style='color:red;font-weight:bold;'>" + result.message + "</span>";

            }

        } catch (error) {

            console.error(error);

            message.innerHTML =
                "<span style='color:red;font-weight:bold;'>Database Connection Error</span>";

        }

        button.disabled = false;
        button.innerHTML = "Register Warranty";

    });

});

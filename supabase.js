// ======================================
// LIYAS WARRANTY PORTAL
// supabase.js
// ======================================

async function registerWarranty(data) {

    try {

        const {
            customerName,
            mobile,
            dealerName,
            productModel,
            serialNumber,
            purchaseDate
        } = data;

        // Duplicate Check
        const { data: existing, error: checkError } = await supabase
            .from("warranties")
            .select("serial_number")
            .eq("serial_number", serialNumber);

        if (checkError) {
            console.log("Duplicate Check Error:", checkError);

            return {
                success: false,
                message: checkError.message
            };
        }

        if (existing.length > 0) {
            return {
                success: false,
                message: "Serial Number Already Registered"
            };
        }

        // Insert Data
        const { data: insertedData, error: insertError } = await supabase
            .from("warranties")
            .insert([
                {
                    customer_name: customerName,
                    mobile: mobile,
                    dealer_name: dealerName,
                    product_model: productModel,
                    serial_number: serialNumber,
                    purchase_date: purchaseDate
                }
            ])
            .select();

        if (insertError) {

            console.log("Insert Error:", insertError);

            return {
                success: false,
                message: insertError.message
            };

        }

        console.log("Inserted:", insertedData);

        return {
            success: true,
            message: "Warranty Registered Successfully"
        };

    } catch (err) {

        console.log("Supabase Exception:", err);

        return {
            success: false,
            message: err.message
        };

    }

}

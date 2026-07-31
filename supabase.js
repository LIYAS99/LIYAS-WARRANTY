// =====================================
// LIYAS WARRANTY PORTAL
// supabase.js
// =====================================

async function registerWarranty(data) {

    try {

        const { data: duplicate, error: duplicateError } =
        await window.db
        .from("warranties")
        .select("serial_number")
        .eq("serial_number", data.serialNumber);

        if (duplicateError) {
            return {
                success:false,
                message:duplicateError.message
            };
        }

        if (duplicate.length > 0){
            return{
                success:false,
                message:"Serial Number Already Registered"
            };
        }

        const { error } =
        await window.db
        .from("warranties")
        .insert([

            {
                customer_name:data.customerName,
                mobile:data.mobile,
                dealer_name:data.dealerName,
                product_model:data.productModel,
                serial_number:data.serialNumber,
                purchase_date:data.purchaseDate
            }

        ]);

        if(error){

            return{
                success:false,
                message:error.message
            };

        }

        return{

            success:true,
            message:"Warranty Registered Successfully"

        };

    }catch(err){

        return{

            success:false,
            message:err.message

        };

    }

}

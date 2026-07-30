// =================================
// LIYAS WARRANTY PORTAL
// Supabase Database Connection
// =================================


async function registerWarranty(data) {

    const { customerName, mobile, dealerName, productModel, serialNumber, purchaseDate } = data;


    // Check duplicate serial number

    const { data: existing, error: checkError } =
        await supabase
        .from("warranties")
        .select("serial_number")
        .eq("serial_number", serialNumber);


    if(checkError){
        return {
            success:false,
            message:"Database error"
        };
    }


    if(existing.length > 0){

        return {
            success:false,
            message:"This serial number is already registered"
        };

    }



    // Insert warranty data

    const { error } = await supabase
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
    ]);



    if(error){

        return {
            success:false,
            message:error.message
        };

    }


    return {
        success:true,
        message:"Warranty Registered Successfully"
    };

}

const Table = require("./model");
const sendEmail = require("./send_email");



exports.addRow = async(req,res,next)=>{


    const table = await Table.create(req.body);

    res.status(200).json({
        success:true,
        table,
        message: "Row created successfully",
    })

}

exports.Allrows = async(req,res,next)=>{
    
    const table = await Table.find();

    res.status(200).json({
        success:true,
        message:"Table is here",
        table
    })
}

exports.updateRow = async(req,res,next)=>{

    let table = await Table.findById(req.params.id);
  
    if(!table){
  
      return ( res.status(404).json({
        success:true,
        message:"Row not found",
        
      })
      )
    }
    
    table = await Table.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
  
  
    res.status(200).json({
      success: true,
      message:"Row updated successfully",
      table,
    })
  
  
  }



  exports.deleteRow = async (req, res, next) => {
    const table = await Table.findById(req.params.id);
  
    if (!table) {
      return ( res.status(404).json({
        success:true,
        message:"Row not found",
        
      }))
    }
  
    
   
    await table.remove();
  
    res.status(200).json({
      success: true,
      message: "Row Deleted Successfully",
    });
  };




  exports.sendrow = async(req,res,next) =>{

   let email = req.body.email;
   
   let send= req.body.send;

  //  console.log(send)

  //  console.log(email)


  const message = `ROWS PRESENT IN JSON FORMAT :-  \n\n ${JSON.stringify(send)}`

  console.log(message)



  try{

    await sendEmail({

      email:email,
      subject:"Table rows (full stack table)",
      message,


    })
    res.status(200).json({
      success: true,
      message: `email sent to ${email} successfully`,
    });
  }catch(err){

    console.log(err);
  }

  }
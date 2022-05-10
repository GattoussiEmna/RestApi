const router = require('express').Router()
const User = require('../models/User')

//CRUD
//1.Create***************

router.post('/create' , async(req, res)=>{
    const {name , email , password} = req.body
    try {
        const existingUser = await User.findOne({email})
        if ( existingUser){
            return res
             .status(400)
             .json({status: true , msg :"User Already Exists !"})
        }
        const user  = await User.create({
            name,
            email,
            password
        })
            return res
              .status(200)
              .json({ status: true, msg: "User Created Successfully !", data : user });
}

catch (err){
                return res
                  .status(500)
                  .json({ status: false, msg: "ERROR !" });


}
})

//2.READ**************
router.get('/all', async(req,res)=>{

    try {
        const users = await User.find()
            return res
              .status(200)
              .json({ status: true, msg: "My List of users", data : users });
}

catch (err){
                return res
                  .status(500)
                  .json({ status: false, msg: "ERROR !" });


}
})

//3.UPDATE*********
router.put('/updatedUser/:id' , async (req,res)=>{
    let {id}=req.params
    const {name , email , password} = req.body
    try {
      const users = await User.findByIdAndUpdate(id ,{...req.body} , {new:true});
      return res
        .status(200)
        .json({ status: true, msg: "user is updated", data: users });
    } catch (err) {
      return res.status(500).json({ status: false, msg: "ERROR !" });
    }
})

//4.DELETE

router.delete("/deletedUser/:id", async (req, res) => {
  let { id } = req.params;
  try {
    const users = await User.findByIdAndDelete(
      id,
     
    );
    return res
      .status(200)
      .json({ status: true, msg: "user is deleted" });
  } catch (err) {
    return res.status(500).json({ status: false, msg: "ERROR !" });
  }
});


module.exports = router
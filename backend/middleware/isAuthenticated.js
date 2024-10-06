import jwt from "jsonwebtoken";
const isAuthenticated=async(req, res, next)=>{
    try{
        const token=req.cookies.token;
        if(!token){
            return res.status(401).json({message:"You are not authenticated"})
        }
        const decode=await jwt.verify(token,process.env.JWT_SECRET_KEY);
        if(!decode){
            return res.status(401).json({message:"Token is not valid"})
        };
        req.id=decode.userId;
        next();
    } catch(err){
        console.error(err);
        return res.status(500).json({message:"Server error"})
    }
}
export default isAuthenticated;
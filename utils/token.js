

export const checkToken = (req,res,next) => {
    const { authorization: token } = req.headers
     if(!token){
        return res.status(401).json(
            {
                message: "Unauthorized, no token provided,login to get access",
                status: 401
            
            })
    }
    next(); 
}




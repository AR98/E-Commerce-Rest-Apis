import jwt from 'jsonwebtoken';

export const createToken = (user) => {
    const token=jwt.sign({id: user._id, email: user.email, isAdmin: user.isAdmin},
        process.env.SECRET_KEY, 
        {expiresIn: "3h"}
        )
    return token;    
}

export const verifyAuth = (req, res, next) => {
    try {
       const token = req.headers.authorization;
       if(token){
        jwt.verify(token, process.env.SECRET_KEY, (error, user) =>{
            if(error) res.status(401).json({ message: error });
            req.user = user;
            next();
        });
       }
       
      } catch (error) {
        //   console.log(error);
        res.status(401).json({ message: error });
      }
}

export const verifyAuthAndAdmin = (req, res, next) => {
    try {
       verifyAuth(req,res, () => {
           if(req.user.isAdmin){
               next();
           }
           else{
            res.status(403).json({ message: "Not Authorized" });
           }
       })
       
      } catch (error) {
        res.status(401).json({ message: error });
      }
}

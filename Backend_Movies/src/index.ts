import express , {Request,Response, Router} from 'express' ;
import cors from 'cors' ;
import "dotenv/config" ;
import mongoose from 'mongoose'
import users_routes from './routs/user.routes'
import auth_routes from './routs/auth.routes'

const app = express()
const PORT = 3500
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())


app.use('/api/users',users_routes)
app.use('/api/auth',auth_routes)




mongoose.connect(process.env.DB_CONNECTION as string).then(()=>{
    console.log('connected  successfully' );
    app.listen(PORT)
}
)


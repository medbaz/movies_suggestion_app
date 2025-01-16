import express , {Request,Response, Router} from 'express' ;
import cors from 'cors' ;
import "dotenv/config" ;
import mongoose from 'mongoose'

const app = express()
const PORT = 3000
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

import add_users_route from './routs/user.routes'

app.use('/api/users',add_users_route)






mongoose.connect(process.env.DB_CONNECTION as string).then(()=>{
    console.log('connected  successfully' );
    app.listen(PORT)
}
)


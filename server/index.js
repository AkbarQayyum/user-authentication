const express = require('express');
const app = express()
app.use(express.json());
require('dotenv').config()
require('./config/connection')
const UserRoutes = require('./routes/user/index')
const cors = require('cors')
app.use(cors())
app.use('/user',UserRoutes)

app.listen(process.env.PORT,console.log(`server started on ${process.env.PORT}`))


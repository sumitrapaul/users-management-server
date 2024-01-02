const express=require('express')
const cors=require('cors')
const app=express()
const port=process.env.PORT || 5000

const users=[
    {id:1, name:'Puja', email:'puja@gmail.com'},
{id:2, name:'Priya', email:'priya@gmail.com'},
{id:3, name:'Pijus', email:'pijus@gmail.com'}
]

//user k dekhaccilona tai
app.use(cors())
app.use(express.json())

app.get('/', (req, res) =>{
    res.send('Users management servers is running')
})

app.get('/users', (req, res) =>{
    res.send(users)
})


//object passilamna tar jonno
app.post('/users', (req, res)=>{
    console.log(req.body);

    //display te dekhanor jonno user k
    const newuser=req.body
    newuser.id=users.length+1
    users.push(newuser)
    res.send(newuser)
})

app.listen(port, () =>{
    console.log(`Server is running on port:${port}`)
})
const express = require('express');
const pool = require('./db')

const app = express();

app.use(express.json());

// routes
app.get('/', async (req, res)=>{
    try{
        const top100 = await pool.query("SELECT * from counties limit 10;")
        res.json(top100.rows);

    } catch (err) {
        console.error(err.message)
    }
})

app.get('/:id', async (req, res)=>{
    const { id } = req.params;
    try{
        const spec1 = await pool.query("SELECT * from counties WHERE id = $1", [id])
        res.json(spec1.rows);

    } catch (err) {
        console.error(err.message)
    }
})

app.listen(3000, ()=>{
    console.log("Hello world")
})
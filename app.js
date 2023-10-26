const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3300;

app.use (express.json())

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'hello123',
  database: 'menu'

})

con.connect((err)=> {
  if(err){
    console.log(err)
  }else{
    console.log("CONNECTED !!")
  }
})


// ******************************CATEGORY*****************************
// GET all categories
app.get('/categories', (req, res) => {
  con.query("SELECT * FROM menu.categories", function(err,result){
    if(err){
      console.log(err)
    }else{
      res.send(result)
    }
  })
})

// GET categories by id
app.get("/categories/:id",(req,res)=>{
  const fetchid = req.params.id;
  con.query('SELECT * FROM menu.categories WHERE id_categories=?', fetchid,(err,result)=>{
    if(err){
      console.log(err)
    }else{
      if(result.length==0){
        res.send("please enter a valid id");
      }else{
        res.send(result)
      }}
  })
})

// CREATE/POST add a new item category
app.post('/categories',(req,res)=>{
  const id_categories = req.body.id_categories;
  const category_name = req.body.category_name;

  con.query('INSERT INTO categories VALUES(?,?)',[id_categories,category_name],(err,result)=>{
    if(err){
      console.log(err)
    }else{
      res.send("POSTED")
    }
  })
})

// UPDATE  change an item category properties
app.put('/categories/:id',function (req, res) {
  con.query('UPDATE `categories` SET `category_name`=? WHERE `id_categories`=?', [req.body.category_name, req.params.id], function (error, results) 
  {
      if(error){
          console.log(error)
          res.status(400).send("error")
      }
      res.end(JSON.stringify(results));
  });
});

// DELETE delete an item category
app.delete('/categories/:id',function (req, res) {
  console.log(req.params.id)
  console.log(req.body);
  con.query('DELETE FROM `categories` WHERE `id_categories`= ?', [req.params.id], function (error, results, fields) {
      if(error){
          console.log(error)
          res.status(400).send("error")
      }
      res.send('deleted!');
  });
});

// ******************************ITEMS*****************************
// GET all items
app.get('/items', (req, res) => {
  con.query("SELECT * FROM menu.items", function(err,result){
    if(err){
      console.log(err)
    }else{
      res.send(result)
    }
  })
})

// GET an item by id
app.get("/items/:id",(req,res)=>{
  const fetchid = req.params.id;
  con.query('SELECT * FROM menu.items WHERE id_item=?', fetchid,(err,result)=>{
    if(err){
      console.log(err)
    }else{
      if(result.length==0){
        res.send("please enter a valid id");
      }else{
        res.send(result)
      }}
  })
})

// CREATE/POST add a new item
app.post('/items',(req,res)=>{
  const id_item = req.body.id_item;
  const category_name = req.body.category_name;
  const name = req.body.name;
  const desc = req.body.desc;
  const price = req.body.price;

  con.query('INSERT INTO items VALUES(?,?,?,?,?)',[id_item,category_name,name,desc,price],(err,result)=>{
    if(err){
      console.log(err)
    }else{
      res.send("POSTED")
    }
  })
})

// UPDATE  change an item properties
app.put('/items/:id',function (req, res) {
  con.query('UPDATE `items` SET `category_name`=?, `name`=?, `desc`=?, `price`=? WHERE `id_item`=?', [req.body.category_name,req.body.name,req.body.desc, req.body['price'], req.params.id], function (error, results) 
  {
      if(error){
          console.log(error)
          res.status(400).send("error")
      }
      res.end(JSON.stringify(results));
  });
});

// DELETE delete an item
app.delete('/items/:id',function (req, res) {
  console.log(req.params.id)
  console.log(req.body);
  con.query('DELETE FROM `items` WHERE `id_item`= ?', [req.params.id], function (error, results, fields) {
      if(error){
          console.log(error)
          res.status(400).send("error")
      }
      res.send('deleted!');
  });
});


// ******************************FORMULA*****************************
// GET all formulas
app.get('/formulas', (req, res) => {
  con.query("SELECT * FROM menu.formulas", function(err,result){
    if(err){
      console.log(err)
    }else{
      res.send(result)
    }
  })
})

// GET formula by id
app.get("/formulas/:id",(req,res)=>{
  const fetchid = req.params.id;
  con.query('SELECT * FROM menu.formulas WHERE id_item=?', fetchid,(err,result)=>{
    if(err){
      console.log(err)
    }else{
      if(result.length==0){
        res.send("please enter a valid id");
      }else{
        res.send(result)
      }}
  })
})

// CREATE/POST add a new formula
app.post('/formulas',(req,res)=>{
  const id_item = req.body.id_item;
  const name = req.body.name;
  const category_name = req.body.category_name;
  const price = req.body.price;

  con.query('INSERT INTO formulas VALUES(?,?,?,?)',[id_item,name,category_name,price],(err,result)=>{
    if(err){
      console.log(err)
    }else{
      res.send("POSTED")
    }
  })
})

// UPDATE  change a formula
app.put('/formulas/:id',function (req, res) {
  con.query('UPDATE `formulas` SET  `name`=?,`category_name`=?, `price`=? WHERE `id_item`=?', [req.body.name, req.body.category_name, req.body.price, req.params.id], function (error, results) 
  {
      if(error){
          console.log(error)
          res.status(400).send("error")
      }
      res.end(JSON.stringify(results));
  });
});

// DELETE delete an item category
app.delete('/formulas/:id',function (req, res) {
  console.log(req.params.id)
  console.log(req.body);
  con.query('DELETE FROM `formulas` WHERE `id_item`= ?', [req.params.id], function (error, results, fields) {
      if(error){
          console.log(error)
          res.status(400).send("error")
      }
      res.send('deleted!');
  });
});


app.listen(port, () => {
  console.log(`L'application Express écoute sur le port ${port}`);
});





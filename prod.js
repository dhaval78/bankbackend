const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const secretKey = 'yourSecretKey123'; 
var cors=require("cors");
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Credentials", "true"); 
  next();
});
app.use(cors());

app.use(bodyParser.json());

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  
  if (!token) {
    return res.status(403).json({ error: 'Token not provided' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    
    if (err) {
      return res.status(401).json({ error: 'Failed to authenticate token' });
    }

    req.decoded = decoded;
    next();
  });
};

const data = [
    {
    prodCode: "DS2S245",
    category: "Dining",
    desc: [
    "Two seater Dining Set",
    "Built from High quality wood",
    "1 year warranty"
    ],
    img:
    "https://ik.imagekit.io/durian1985/Durian/durian/product/800x800/product_2022100611101665054647_13767.jpg?tr=w-250,q-100,lo-true",
    ingredients: [
    { ingName: "Dining Table", qty: 1 },
    { ingName: "Chair", qty: 2 }
    ],
    title: "Two seater Dining Set"
    },
    {
    prodCode: "DS6S761",
    category: "Dining",
    desc: [
    "Six Seater Dining Set in Antique Cherry Colour",
    "Assembly by Skilled Carpenters",
    "Made from Teak wood"
    ],
    img:
    "https://hometown.gumlet.io/media/product/17/3773/24524/1.jpg?h=250&w=250",
    ingredients: [
    { ingName: "Dining Table", qty: 1 },
    { ingName: "Chair", qty: 4 },
    { ingName: "Bench", qty: 1 }
    ],
    title: "Six Seater Dining Set"
    },
    {
    prodCode: "DS4S177",
    category: "Dining",
    desc: [
    "Mild Steel Four Seater Dining Set in Black Colour",
    "Knock-down construction for easy transportation"
    ],
    img:
    "https://hometown.gumlet.io/media/product/08/2453/47088/1.jpg?h=250&w=250",
    ingredients: [
    { ingName: "Dining Table", qty: 1 },
    { ingName: "Chair", qty: 4 }
    ],
    title: "Mild Steel Dining Set"
    },
    {
    prodCode: "DC2S705",
    category: "Dining",
    desc: [
    "Solid Wood Dining Chair Set of Two in Dark Walnut Colour",
    "Beautiful design carved on dining chair",
    "Dining chair seat upholstered in dark brown Fabric"
    
    ],
    img:
    "https://hometown.gumlet.io/media/product/95/4773/25442/1.jpg?h=250&w=250",
    ingredients: [{ ingName: "Chair", qty: 2 }],
    title: "Dining Chair Set"
    },
    {
    prodCode: "BN1S388",
    category: "Dining",
    desc: [
    "Solid Wood Dining Bench in Dark Walnut Colour",
    "Comfortable bench for a relaxed dinner"
    ],
    img:
    "https://hometown.gumlet.io/media/product/42/9863/21594/1.jpg?h=250&w=250",
    ingredients: [{ ingName: "Bench", qty: 1 }],
    title: "Dining Bench"
    },
    {
    prodCode: "SF2S532",
    category: "Drawing",
    desc: [
    "Characteristic Rising Track Arm Rest Design",
    "Premium High Gloss Leatherette Upholstery",
    "Independent Headrest And Lumber Support"
    ],
    img:
    "https://hometown.gumlet.io/media/product/34/8273/20436/1.jpg?h=250&w=250",
    ingredients: [{ ingName: "Sofa", qty: 1 }],
    title: "Two Seater Sofa"
    },
    {
    prodCode: "SF2S206",
    category: "Drawing",
    desc: ["Two Seater Sofa in Brown Colour", "Assembly by Skilled Carpenters"],
    img:
    "https://hometown.gumlet.io/media/product/10/1063/29152/1.jpg?h=250&w=250",
    ingredients: [{ ingName: "Sofa", qty: 1 }],
    title: "Two Seater Sofa"
    },
    {
    prodCode: "SFBD311",
    category: "Drawing",
    desc: [
    "Sofa Cum bed in Brown Colour",
    "Ply-wood construction with hand polished finish",
    "Removable fabric cover on best quality foam mattress",
    "Throw cushions and bolsters come with the product"
    ],
    img:
    "https://images.woodenstreet.de/image/cache/data%2Fsofa-beds%2Fpaxton-fabric-sofa-cum-bed%2Fdark-olive-green%2F1-810x702.jpg",
    ingredients: [{ ingName: "Sofa", qty: 1 }, { ingName: "Cushions", qty: 2 }],
    title: "Sofa cum Bed"
    },
    {
    prodCode: "BDQS381",
    category: "Bedroom",
    desc: [
    "Wood Box Storage King Size Bed in Wenge Colour ",
    "Box Storage included for Maximum space utilization",
    "Mattress is included"
    ],
    img:
    "https://hometown.gumlet.io/media/product/20/6863/13794/1.jpg?mode=fill&h=250&w=250",
    ingredients: [{ ingName: "Bed", qty: 1 }, { ingName: "Mattress", qty: 2 }],
    title: "King size Bed"
    },
    {
    prodCode: "BDQS229",
    category: "Bedroom",
    desc: [
    "Wood Hydraulic Storage Queen Size Bed",
    "Half hydraulic storage",
    "Superior E2 grade MDF used with melamine finish"
    ],
    img:
    "https://hometown.gumlet.io/media/product/69/4863/58856/1.jpg?h=250&w=250",
    ingredients: [{ ingName: "Bed", qty: 1 }],
    title: "Queen size Bed"
    },
    {
    prodCode: "ST1T425",
    category: "Study",
    desc: [
    "Wood Study Table in Walnut Colour",
    "Assembly by Skilled Carpenters",
    " Built from High Quality Wood"
    ],
    img:
    "https://hometown.gumlet.io/media/product/67/9153/12554/1.jpg?h=250&w=250",
    ingredients: [{ ingName: "Study Table", qty: 1 }],
    title: "Study Table"
    },
    {
    prodCode: "ST1T588",
    category: "Study",
    desc: [
    " Wood Study Table in Highgloss White & Blue Colour ",
    "Study table comes with bookshelf on top, 5 drawers & 1 open shelf ",
    " Superior quality MDF with stain resistant melamine finish"
    ],
    img:
    "https://hometown.gumlet.io/media/product/28/9153/97824/1.jpg?h=250&w=250",
    ingredients: [{ ingName: "Study Table", qty: 1 }],
    title: "Study Table"
    }
    ]

    app.get('/products', (req, res) => {
   
      const categoryFilter = req.query.category;
    
    
      if (categoryFilter) {
        const filteredProducts = data.filter(product => product.category.toLowerCase() === categoryFilter.toLowerCase());
        res.json(filteredProducts);
      } else {
        
        res.json(data);
      }
    });
    
app.post('/login', (req, res) => {
  
  const { email, password } = req.body;

 
  if (email === 'email@test.com' && password === 'test'||email === 'admin@admin.com' && password === 'admin') {
    const token = jwt.sign({ email }, secretKey, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

app.post('/products/add', verifyToken, (req, res) => {
 
  const { prodCode, category, desc, img, ingredients, title } = req.body;


  if (!prodCode || !category || !desc || !img || !ingredients || !title) {
    return res.status(400).json({ error: 'Please provide all required fields' });
  }

 
  const newProduct = {
    prodCode,
    category,
    desc,
    img,
    ingredients,
    title,
  };

  
  data.push(newProduct);

  res.status(201).json({ message: 'Product added successfully', product: newProduct });
});

app.put('/products/edit/:prodCode', verifyToken, (req, res) => {

  const { prodCode } = req.params;
  const { category, desc, img, ingredients, title } = req.body;

  
  const productIndex = data.findIndex(product => product.prodCode === prodCode);

  
  if (productIndex === -1) {
    return res.status(404).json({ error: 'Product not found' });
  }

 
  if (category) data[productIndex].category = category;
  if (desc) data[productIndex].desc = desc;
  if (img) data[productIndex].img = img;
  if (ingredients) data[productIndex].ingredients = ingredients;
  if (title) data[productIndex].title = title;

  res.json({ message: 'Product updated successfully', product: data[productIndex] });
});


app.get('/products/:prodCode', (req, res) => {
  const { prodCode } = req.params;

 
  const product = data.find((p) => p.prodCode === prodCode);

  
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }

  
  res.json(product);
})

app.delete('/products/delete/:prodCode', verifyToken, (req, res) => {
  const { prodCode } = req.params;

  const productIndex = data.findIndex(product => product.prodCode === prodCode);

 
  if (productIndex === -1) {
    return res.status(404).json({ error: 'Product not found' });
  }


  const deletedProduct = data.splice(productIndex, 1)[0];


  res.json({ message: 'Product deleted successfully', product: deletedProduct });
});
const PORT = 2410;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
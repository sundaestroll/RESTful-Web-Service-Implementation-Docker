const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(cors());

app.use(express.static('public'));

const rawData = fs.readFileSync('database.json');
const jsonData = JSON.parse(rawData);

app.get('/customers', (req, res) => {
  const customers = jsonData.customers;
  res.json(customers);
});

app.get('/customers/:id', (req, res) => {
  const customerId = req.params.id;
  const customer = jsonData.customers.find((c) => c.customer_id === customerId);
  if (!customer) {
    res.status(404).json({ error: 'Customer not found' });
  } else {
    res.json(customer);
  }
});

app.get('/customers/:id/orders', (req, res) => {
    const customerId = req.params.id;
    const customer = jsonData.customers.find((c) => c.customer_id === customerId);
    if (!customer) {
      res.status(404).json({ error: 'Customer not found' });
    } else {
      res.json(customer.orders); 
    }
  });
  
  
  

app.get('/customers/:id/orders/:orderId', (req, res) => {
  const customerId = req.params.id;
  const orderId = req.params.orderId;
  const customer = jsonData.customers.find((c) => c.customer_id === customerId);

  if (!customer) {
    return res.status(404).json({ error: 'Customer not found' });
  }

  const order = customer.orders.find((o) => o.order_id == orderId); 
  if (!order) {
    return res.status(404).json({ error: 'Order not found' });
  }

  res.json(order);
});

  

app.get('/', (req, res) => {
  res.send('Welcome to Seungahs mall!');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

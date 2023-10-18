import { AppDataSource } from "./data-source"
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const dataSource = require('./routes');
const routes = require('./routes')


app.use(routes);
app.use(dataSource);

app.listen(3000);
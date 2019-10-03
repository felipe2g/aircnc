const express = require('express');
const mongoose =require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');


const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@bd-passyy-cxnz6.mongodb.net/semana-09?retryWrites=true&w=majority',
 {
     useNewUrlParser: true,
     useUnifiedTopology: true,
 });

//GET (BUSCAR INFORMAÇÃO NO BACKEND)
//POST (CRIAR NOVA INFORMAÇÃO)
//PUT (EDITAR INFORMAÇÃO)
//DELETE (DELETAR INFORMAÇÃO)

//REQ.QUERY.PARAMS = PARAMETROS NA URL (PARA FILTROS)
//REQ.QUERY.BODY = PARAMETROS NO CORPO DA REQUISIÇÃO (PARA EDIÇÃO, DELETE)

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333);
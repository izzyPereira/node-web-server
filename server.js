//////////////////////////////////////
//servidor WEB, com recurso a Express
//////////////////////////////////////

const express = require('express'); //Express: routing
const hbs = require ('hbs'); // Handlebars: uso de templates para criação de páginas

const app = express();
app.set('view engine', 'hbs');  // definir motor de leitura de templates Handlebars

//o que fazemos numa app Express: criar routes -- routing!


//repositório de páginas estáticas
app.use(express.static(__dirname + '/public'));


//route raiz, utiliza HTML normal / Handlebars
app.get('/', //local
       (request, response) => { //callback
          //quando chegar a resposta, diz:
          //response.send('<h1>Hello, from Express!</h1>');
          response.render('welcome.hbs', {
              title: "Mudamos a informação",
              text: "Ver acima"
          });
       }
);
//route about, retorna JSON
app.get('/about',
    (request, response) => {
        response.render('welcome.hbs', {
            title: "Ajuda",
            text: "Informação pertinente"
        });
    }
);

app.get('/carochao', 
    (request, response) => {
        response.render('carochao.hbs', {
            title: "Vida em Marte",
            text: "Há indícios de vida em Marte. Ludus Semper Fi"
        });
    }
);
app.get('/resposta',
    (request, reponse) => {
        response.render('carochao.hbs', {
            title: "Aqui está a resposta:",
            text: `` 
        });
    }
);


app.listen(2600);    /*portas a escutar devem sempre ser acima de 1024, 
                       essas são usadas para outros serviços*/
// para parar o servidor: CTRL + C


/*
o que fazer com o Dark Sky?
Partials / peças para templates com Handlebars
que estrutura usar para a página?
o que ficar no servidor / o que ficar no cliente?
ver Bootstrap
*/
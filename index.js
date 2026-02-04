const express = require ('express');
const app = express();
const path = require ('path');

app.use(express.static(path.join(__dirname, 'views/planetas')));

// set EJS as templating engine
app.set('view engine', 'ejs');

app.get('/', (req, res)=> { //   / representa la ruta principal

    res.render('pages/planetas'); //pages/auth la 
    console.log('pagina planetas cargada');
});
app.get('/mercurio', (req, res) =>{ // local host

    res.render('Pages/mercurio');
    console.log('pagina mercurio cargada');
});
app.get('/venus', (req, res) =>{ // local host

    res.render('Pages/venus');
    console.log('pagina venus cargada');
});
app.get('/venus', (req, res) =>{ // local host

    res.render('Pages/venus');
    console.log('pagina venus cargada');
});
app.get('/tierra', (req, res) =>{ // local host

    res.render('Pages/tierra');
    console.log('pagina tierra cargada');
});
app.get('/marte', (req, res) =>{ // local host

    res.render('Pages/marte');
    console.log('pagina marte cargada');
});
app.get('/jupiter', (req, res) =>{ // local host

    res.render('Pages/jupiter');
    console.log('pagina jupiter cargada');
});
app.get('/saturno', (req, res) =>{ // local host

    res.render('Pages/saturno');
    console.log('pagina saturno cargada');
});
app.get('/urano', (req, res) =>{ // local host

    res.render('Pages/urano');
    console.log('pagina urano cargada');
});
app.get('/neptuno', (req, res) =>{ // local host

    res.render('Pages/neptuno');
    console.log('pagina neptuno cargada');
});

app.get('/planetas', (req, res) =>{ // local host

    res.render('Pages/planetas');
    console.log('pagina planetas cargada');
});

const server = app.listen(4000, function () {
	console.log ('listening to port 4000')

	console.log('hola mundo')
});
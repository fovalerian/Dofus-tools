var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'html');

app.get('/', function(req, res) {
    res.render('index.html.twig')
})

.get('/chez-moi', function(req, res) {
    res.setHeader('Content-type', 'text/plain');
    res.send('Vous êtes chez moi bande de petit **** de ****. \n OUST')
})

.get('/:etagenum/etage', function(req, res) {
    res.render('etage.html.twig', {etage: req.params.etagenum, autresParams: 'memeObjet'} )
});

app.listen(8080);
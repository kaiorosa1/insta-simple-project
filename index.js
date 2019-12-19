const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/public', express.static(process.cwd() + '/public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render(process.cwd() + '/views/index');
});

app.listen(port, () => console.log(`Insta API app listening on port ${port}!`));
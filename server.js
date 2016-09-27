var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
    'article-one':{
        title:'Article 1 | Amrith M',
    date:'Sept 27',
    heading:'Page One',
    content:`<p>Renovild is an application to let us know any particular location. This app is a part of out project to rewamp abandoned buildings. In renovild , any user can create and account, search for a location and save that particular location into a database. This database is managed by us </p>`},
    'article-two':{
        title:'Article 2 | Amrith M',
    date:'Sept 28',
    heading:'Page Two',
    content:`<p>Renovild is an application to let us know any particular location. This app is a part of out project to rewamp abandoned buildings. In renovild , any user can create and account, search for a location and save that particular location into a database. This database is managed by us </p>`},
    'article-three':{
        title:'Article 3 | Amrith M',
        date:'Sept 29',
        heading:'Page Three',
        content:`<p>Renovild is an application to let us know any particular location. This app is a part of out project to rewamp abandoned buildings. In renovild , any user can create and account, search for a location and save that particular location into a database. This database is managed by us </p>`}
};
function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
var htmlTemplate=`<!DOCTYPE html>
<html>
<head>
    <title>${title}</title>
</head>
<body>
    <div class="container">
        <a href="/">Home</a>
        <hr/>
        <h3>${heading}</h3>
        <div>
            ${date}
    </div>
    <div>
        ${content}
        </div>
        </div>
</body>
</html>
`;
    return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName',function(req,res){
    var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));
    
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

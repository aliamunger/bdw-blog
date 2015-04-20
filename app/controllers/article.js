var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article');
  posts = require ('../../config/posts');

module.exports = function (app) {
  app.use('/article', router);
};




router.get('/', function (req, res, next) {

   

    Article.find({}, function(err, articles){


    res.render('article/list', {   //render is html, send is json
      title: 'My Articles',
      articles: articles
    });


  });


});



router.get('/:id', function(req, res, next) {

  var id = req.params.id;

// this is finding articles in the mongo database

  Article.findOne({ _id: id}, function(err, article){ 

    res.render('article/show', { 
      title: 'My Articles',
      article: article // return all articles to the list.swig
    });

  });
});





router.get('/:id/edit', function(req, res, next) {

  var id = req.params.id;

// this is finding articles in the mongo database

  Article.findOne({ _id: id}, function(err, article){ 

    res.render('article/edit', { 
      title: 'My Articles',
      article: article // return all articles to the list.swig
    });

  });
});







router.post('/:id', function (req, res, next) {

    var id = req.params.id;
    
    console.log(req.body);
    
    Article.findOneAndUpdate({ _id: id }, req.body, function(err, article){
        console.log(article);
        

        if(err) return next(err)
        res.redirect('back');

    });

});


  



router.get('/bootstrap', function (req, res, next) {

  

    Article.create(posts.posts, function(err, articles){

      if(err) return next(err);
      res.send(articles);
    });

    
  
});


//localhost:3000/article -
//localhost:3000/article/1/edit
//localhost:3000/article/1/update
//localhost:3000/article
//localhost:3000/article
//localhost:3000/article
//localhost:3000/article


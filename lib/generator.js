var path = require('path');

module.exports = function(locals){

  return locals.posts.reduce(function(result, post){
    var data = [{
      path: path.join(post.path, 'index.json'),
      data: JSON.stringify({'summary': post.content})
    }];
    return result.concat(data);
  }, []);

};
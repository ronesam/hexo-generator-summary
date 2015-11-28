'use strict';
module.exports = function(locals){
  var config = this.config;
  var summary_dir = config.summary_dir || 'summary';

  return locals.posts.reduce(function(result, post){
    console.log(post.path);
  }, []);
};
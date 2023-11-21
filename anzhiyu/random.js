var posts=["2023/11/20/python爬虫图片/","2023/11/20/Linux代理/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
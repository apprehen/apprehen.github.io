var posts=["2023/11/20/Linux代理/","2023/11/21/Nginx基本使用/","2023/11/20/python爬虫图片/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
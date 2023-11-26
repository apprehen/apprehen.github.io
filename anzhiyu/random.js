var posts=["2023/11/21/Javascript详解/","2023/11/20/Linux代理/","2023/11/21/Nginx基本使用/","2023/11/25/Vue源码分析/","2023/11/25/git使用/","2023/11/20/python爬虫图片/","2023/11/25/打包工具/","2023/11/25/操作系统/","2023/11/25/数据结构/","2023/11/26/浏览器工作原理/","2023/11/25/计算机网络/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
var posts=["posts/b79900c3.html","posts/e43d6ac6.html","posts/7251401c.html","posts/7537191c.html","posts/938f2f9c.html","posts/9ac48510.html","posts/49ae955a.html","posts/d681bdaf.html","posts/34b82b37.html","posts/317b894e.html","posts/ea5e4ee3.html","posts/86f0144.html","posts/9c0aba3e.html","posts/bca27d91.html","posts/f5cc586d.html","posts/dbeddcc1.html","posts/79666db.html","posts/e28d3347.html","posts/e255a10a.html","posts/8b326882.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
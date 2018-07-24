---
---
var articleData = {{ site.data.articles | jsonify }};
var imgs = site.data.articles.articles[page.firstArticle].images

console.log(imgs)
console.log(articleData)
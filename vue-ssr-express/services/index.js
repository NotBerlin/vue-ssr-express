// nodejs 服务器
const Vue = require('vue');
const server = require('express')();

const template = require('fs').readFileSync('../public/index.html', 'utf-8');

const renderer = require('vue-server-renderer').createRenderer({
  template,
});

const context = {
  title: 'vue ssr',
  metas: `
        <meta name="keyword" content="vue,ssr">
        <meta name="description" content="vue srr demo">
    `,
};

server.get('*', (req, res) => {
  const app = new Vue({
    data: {
      url: req.url
    },
    template: `<div>The visited URL is: {{ url }}</div>`,
  });

  try {
    renderer
      .renderToString(app, context, (err, html) => {
        console.log(html);
        if (err) {
          res.status(500).end('Internal Server Error')
          return;
        }
        res.end(html);
      });
  } catch (error) {
    console.log(error)
    res.status(500).end('Internal Server Error')
  }
  
})

server.listen(3000, () => {
  console.log('服务器启动成功～')
});
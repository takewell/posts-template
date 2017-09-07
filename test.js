'use strict';
const ejs = require('ejs');
const assert = require('assert');

// ejs のテンプレートにおける XSS 脆弱性のテスト
ejs.renderFile('./views/posts.ejs', {
  posts: [{
    id: 1,
    content: '<script>alert(\'test\');</script>',
    postedBy: 'guest',
    trackingCookie: '2639292283224063_ddcc625203464a9e10af58fc3eb92eed7df4b9b5',
    createAt: new Date(),
    updateAt: new Date()
  }],
  user: 'guest'
}, (err, str) => {
  assert(str.indexOf("&lt;script&gt;alert(&#39;test&#39;);&lt;/script&gt;") > 0);
  console.log('テストが正常に完了しました。');
});
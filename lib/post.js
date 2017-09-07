'use strict';
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  'postgres://takei:postgres@localhost/secret_board', { logging: false }
);
const Post = sequelize.define('Post', {
  // 主キー
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  // 投稿内容
  content: {
    type: Sequelize.TEXT
  },
  // ユーザ名
  postedBy: {
    type: Sequelize.STRING
  },
  // クッキーID
  trackingCookie: {
    type: Sequelize.STRING
  }
}, {
  // Postにテーブル名を固定する
  freezeTableName: true,
  timestamps: true
});

Post.sync();
module.exports = Post;
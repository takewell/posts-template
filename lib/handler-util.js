'use strict';
const fs = require('fs');

function handleLogout(req, res) {
  res.writeHead(401, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  res.end('<!DOCTYPE html><html lang = "ja" ><head><meta charset = "UTF-8" ><title> Logout </title></head><body><h1> ログアウトしました </h1> <a href = "/posts" > ログイン </a> </body ></html>');
}

function handleNotFound(req, res) {
  res.writeHead(404, {
    'Content-Type': 'text/plain; charset=utf-8'
  });
  res.end('Not Found');
}

function handleBadRequest(req, res) {
  res.writeHead(400, {
    'Content-Type': 'text/plain; charset=utf-8'
  });
  res.end('Bad Request');
}

function handleFavicon(req, res) {
  res.writeHead(200, {
    'Content-Type': 'image/png'
  });
  const favicon = fs.readFileSync('./post-favicon.png');
  res.end(favicon);
}

module.exports = {
  handleLogout: handleLogout,
  handleNotFound: handleNotFound,
  handleBadRequest: handleBadRequest,
  handleFavicon: handleFavicon
};
'use strict';
const assert = require('node:assert');
const test = require('node:test');
const todo = require('./index.js');

test('add/list の基本', () => {
  todo.add('ノートを買う');
  todo.add('鉛筆を買う');
  assert.deepStrictEqual(todo.list(), ['ノートを買う', '鉛筆を買う']);
});

test('done/donelist の基本', () => {
  todo.done('鉛筆を買う');
  assert.deepStrictEqual(todo.list(), ['ノートを買う']);
  assert.deepStrictEqual(todo.donelist(), ['鉛筆を買う']);
});

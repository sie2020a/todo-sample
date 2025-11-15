'use strict';
// { name, isDone }
const tasks = [];

/** 追加 */
function add(taskName) {
  tasks.push({ name: taskName, isDone: false });
}

/** 未完了の一覧(文字列配列) */
function list() {
  return tasks.filter(t => !t.isDone).map(t => t.name);
}

module.exports = { add, list };

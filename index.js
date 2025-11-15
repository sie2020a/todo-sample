'use strict';
// { name: タスク名, isDone: 真偽 }
const tasks = [];

/** 追加 */
function add(taskName) {
  tasks.push({ name: taskName, isDone: false });
}

/** 未完の一覧 */
function list() {
  return tasks.filter(t => !t.isDone).map(t => t.name);
}

/** 完了にする */
function done(taskName) {
  const i = tasks.findIndex(t => t.name === taskName);
  if (i !== -1) tasks[i].isDone = true;
}

/** 完了済みの一覧 */
function donelist() {
  return tasks.filter(t => t.isDone).map(t => t.name);
}

module.exports = { add, list, done, donelist };

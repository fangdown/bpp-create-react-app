import { createElement, render, renderDom } from './element'
import diff from './diff'
import patch from './patch'

let vDom = createElement('ul', { class: 'list' }, [
  createElement('li', { class: 'item' }, ['周杰伦']),
  createElement('li', { class: 'item' }, ['林俊杰']),
  createElement('li', { class: 'item' }, ['成龙'])
])

console.log('vdom', vDom)
let el = render(vDom)
// 插不进去root中。需另外给个div
renderDom(el, document.getElementById('diff'))

// 创建另一个新的虚拟DOM
let vDom2 = createElement('ul', { class: 'list-group' }, [
  createElement('li', { class: 'item active' }, ['七里香']),
  createElement('li', { class: 'item' }, ['一千年以后']),
  createElement('li', { class: 'item' }, ['需要人陪'])
])

let patches = diff(vDom, vDom2)
console.log('patches', patches)
// {
//   '0': [
//     {
//       attr: { class: "list-group" },
//       type: "ATTR"
//     }
//   ]
// }

// 将变化打补丁，更新到el
patch(el, patches);
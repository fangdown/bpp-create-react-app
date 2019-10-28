import { render, setAttr } from "./element"

let allPatches
let index = 0
function patch (node, patches){
  allPatches = patches
  walk(node)
}

function walk(node){
  let current = allPatches[index++]
  if(current) {
    doPatch(node, current)
  }
  let childNodes = node.childNodes
  childNodes.forEach( child => walk(child))
}

function doPatch(node, patches){
 patches.forEach(patch => {
   switch(patch.type){
      case 'REMOVE':
        node.parentNode.remove(node)
       break;
      case 'REPLACE':
        let newNode = patch.newNode
        // 要点
        newNode = newNode instanceof Element ? render(newNode) : document.createTextNode(newNode)
        node.parentNode.replaceChild(newNode, node)
        break;
      case 'TEXT': 
        node.textContent = patch.text
        break;
      case 'ATTR':
        for(let key in patch.attr){
          let value = patch.attr[key]
          if(value){
            setAttr(node, key, value)
          } else{
            node.removeAttribute(key)
          }
        }
        break;
   }
 })
}
export default patch
let num = 0 // 很重要，patch的key就是它

function diff(oldTree, newTree){
  let patches = {}
  let index = 0
  walk(oldTree, newTree, index, patches)
  return patches // 得到补丁集合
}

function walk(oldNode, newNode, index, patches){
  // 每个元素都应由一个补丁
  let current = []
  /**
   * 1. 新节点不存在，删除
   * 2. 都是文本且不相同， 替换文本
   * 3. 节点相同，判断属性是否有变化，收集属性
   * 4. 节点相同， 递归children
   * 5. 其他情况，替换新节点
   */
  if(!newNode){
    current.push({type: 'REMOVE', index})
  } else if(isString(oldNode) && isString(newNode)){
    if(oldNode !== newNode){
      current.push({type: 'TEXT', text: newNode})
    }
  } else if(oldNode.type === newNode.type){
    let attr = diffAttr(oldNode.props, newNode.props)
    if(Object.keys(attr).length > 0){
      current.push({type: 'ATTR', attr})
    }
    diffChildren(oldNode.children, newNode.children, patches)
  } else {
    current.push({type: 'REPLACE', newNode})
  }
  if(current.length){
    patches[index] = current
  }
}

function isString(obj){
  return typeof obj ==='string'
}

function diffAttr(oldAttrs, newAttrs){
  let patch = {}
  for(let key in oldAttrs){
    if(oldAttrs[key] !== newAttrs[key]){
      patch[key] = newAttrs[key]
    }
  }
  for(let key in newAttrs){
    if(!oldAttrs.hasOwnProperty(key)){
      patch[key] = newAttrs[key]
    }
  }
  return patch
}

function diffChildren(oldChildren, newChildren, patches){
  oldChildren && oldChildren.forEach((child, index) =>{
    walk(child, newChildren[index], ++num, patches)
  })
}
export default diff
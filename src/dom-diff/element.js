class Element {
  constructor(type, props, children){
    this.type = type
    this.props = props
    this.children = children
  }
}

function createElement(type, props, children){
  return new Element(type, props, children)
}

// 生成虚拟DOM
function render(domObj){
  let el = document.createElement(domObj.type)
  for(let key in domObj.props){
    setAttr(el, key, domObj.props[key])
  }
  // 循环子集
  domObj.children.forEach(child => {
    child = child instanceof Element ? render(child) : document.createTextNode(child)
    el.appendChild(child)
  })
  return el
}

// 属性设置
function setAttr(node, key, value){
  switch(key){
    case 'value':
      if(node.tagName.toLowerCase() === 'input' || node.tagName.toLowerCase() ==='textarea'){
        node.value = value
      }
      break;
    case 'style':
      node.style.cssText = value
      break;
    default: 
      node.setAttribute(key, value)
      break;
  }
}
// 插入到真实DOM中
function renderDom(el, target){
  target.appendChild(el)
}

export {
  Element,
  createElement,
  render,
  setAttr,
  renderDom
}
/**
 * 创建于 2019-07-21
 * 作者: SHERlocked93
 * 功能: 组合模式 快捷创建 DOM 树
 */


const createElement = ({ tag, attr, children }) => {
    const node = tag
      ? document.createElement(tag)
      : document.createTextNode(attr.text)
    tag && Object.keys(attr)
      .forEach(key => node.setAttribute(key, attr[key]))
    children && children
      .forEach(child =>
        node.appendChild(createElement.call(null, child)))
    return node
}

createElement({
    tag: 'ul',
    attr: { id: 'data-list' },
    children: [
        {
            tag: 'li',
            attr: { class: 'data-item' },
            children: [{ attr: { text: 'li-item 1' } }]
        },
        {
            tag: 'li',
            attr: { class: 'data-item' },
            children: [{ attr: { text: 'li-item 2' } }]
        },
        {
            tag: 'li',
            attr: { class: 'data-item' },
            children: [{ attr: { text: 'li-item 3' } }]
        }
    ]
})

// 输出：
// <ul id='data-list'>
//     <li class='data-item'>li-item 1</li>
//     <li class='data-item'>li-item 2</li>
//     <li class='data-item'>li-item 3</li>
// </ul>


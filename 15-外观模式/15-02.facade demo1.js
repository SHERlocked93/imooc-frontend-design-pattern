function domBindEvent(nodes, type, selector, fn) {
    if (fn === undefined) {
        fn = selector
        selector = null
    }
    // ... 剩下相关逻辑
}

domBindEvent(nodes, 'click', '#div1', fn)
domBindEvent(nodes, 'click', fn)

const createElement = function(tag) {
    return tag === 'text'
      ? document.createTextNode(tag)
      : document.createElement(tag)
}

HTMLElement.prototype._setAttribute = function(key, value) {
    this.setAttribute(key, value)
    return this
}

HTMLElement.prototype._appendChild = function(child) {
    this.appendChild(child)
    return this
}

createElement('ul')
  ._setAttribute('id', 'data-list')
  ._appendChild(
    createElement('li')
      ._setAttribute('class', 'data-item')
      ._appendChild('text', 'li-item 1'))
  ._appendChild(
    createElement('li')
      ._setAttribute('class', 'data-item')
      ._appendChild('text', 'li-item 2'))
  ._appendChild(
    createElement('li')
      ._setAttribute('class', 'data-item')
      ._appendChild('text', 'li-item 3'))

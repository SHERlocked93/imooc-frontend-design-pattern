const ul = document.createElement('ul')
ul.setAttribute('id', 'data-list')

const li1 = document.createElement('li')
const li2 = document.createElement('li')
const li3 = document.createElement('li')

li1.setAttribute('id', 'data-item')
li2.setAttribute('id', 'data-item')
li3.setAttribute('id', 'data-item')

const text1 = document.createTextNode('li-item 1')
const text2 = document.createTextNode('li-item 2')
const text3 = document.createTextNode('li-item 3')

li1.appendChild(text1)
li2.appendChild(text2)
li3.appendChild(text3)

ul.appendChild(li1)
ul.appendChild(li2)
ul.appendChild(li3)

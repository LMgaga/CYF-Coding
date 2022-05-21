let element_list = document.getElementById('list');
let new_li = document.createElement('li');
let new_a = document.createElement('a');
new_a.innerText = 'Code your future';
new_a.setAttribute("href", 'http://www.codeyourfuture.io/');

new_li.appendChild(new_a);

element_list.appendChild(new_li);
let new_li2 = document.createElement('li');
let new_a2 = document.createElement('a');
new_a2.innerText = 'Google';
new_a2.setAttribute("href", 'http://www.google.com/');

new_li2.appendChild(new_a2);

element_list.appendChild(new_li2);
let new_li3 = document.createElement('li');
let new_a3 = document.createElement('a');
new_a3.innerText = 'BBC News';
new_a3.setAttribute("href", 'http://news.bbc.co.uk/');

new_li3.appendChild(new_a3);

element_list.appendChild(new_li3);

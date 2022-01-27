var input_field = document.querySelector('input');
var btn = document.querySelector('button');
var todo_list = document.querySelector('div.todos');
var count = 0;
btn.addEventListener('click', function(){
    var para = document.createElement('p');
    para.setAttribute('key', count);
    count += 1
    para.append(input_field.value);
    input_field.value = "";
    todo_list.appendChild(para);
    para.addEventListener('click', function(){
        todo_list.removeChild(para);
    })


})

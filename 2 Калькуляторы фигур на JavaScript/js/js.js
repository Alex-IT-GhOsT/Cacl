'use strict';

let B = document.querySelector('#B');

let q = document.querySelector('#q');

let s = document.querySelector('#s')

let inp1 = document.querySelector('#inp1');

let inp2 = document.querySelector('#inp2');

let inp3 = document.querySelector('#inp3');

let buttons = document.querySelectorAll('.btn');

let a1;

let b2;

let del = document.querySelector('#del');

let inputs = document.querySelectorAll('input')

for(let button of buttons){
    button.addEventListener('click',function(event){

      
        function square(num,num1){
            return num * num1;
        }


        function per(num,num1){
            return (+num + +num1)*2;
        }


        if(event.target.classList.contains('A')){
            button.classList.toggle('toggle');
            inp2.classList.toggle('active')

            if(button.classList.contains('toggle')){
            B.setAttribute('disabled','disabled') //добавляем скрытие кнопок
            q.setAttribute('disabled','disabled')
            s.setAttribute('disabled','disabled')

            }else{
                B.removeAttribute('disabled') //добавляем скрытие кнопок
                q.removeAttribute('disabled')
                s.removeAttribute('disabled') 
    
            }
       
        }else if(event.target.classList.contains('B')){
            button.classList.toggle('toggle');
            inp3.classList.toggle('active');

            if(button.classList.contains('toggle')){
                A.setAttribute('disabled','disabled') //добавляем скрытие кнопок
                q.setAttribute('disabled','disabled')
                s.setAttribute('disabled','disabled')

            }else{
                A.removeAttribute('disabled') //добавляем скрытие кнопок
                q.removeAttribute('disabled')
                s.removeAttribute('disabled')  

            }

        }





        if(inp2.classList.contains('active')){
            inp2.value = inp2.value + this.textContent.split('сторона А')[0]; 
            a1=inp2.value;
        
        }else if(inp3.classList.contains('active')){
            inp3.value = inp3.value + this.textContent.split('сторона Б')[0];
            b2=inp3.value;
      
        }
        

        if(event.target.classList.contains('square')){
            s.classList.add('toggle');
            inp1.classList.add('active');
            q.classList.remove('toggle')

            if(inp1.classList.contains('active')){
                inp1.value = square(a1,b2)
            }
            else{
                inp1.value = '';
            }

        
        }


        if(event.target.classList.contains('per')){
            q.classList.add('toggle');
            inp1.classList.add('active')
            s.classList.remove('toggle')

            if(inp1.classList.contains('active')){
                inp1.value = per(a1,b2);

            }else{
                inp1.value = '';
            }
        }
        
        
        if(event.target.classList.contains('del')){
            inp1.value='';
            inp2.value='';
            inp3.value='';
            s.classList.remove('toggle')
            a1='';
            b2='';
            q.classList.remove('toggle')
        }




    })
}


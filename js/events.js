console.log('hello from events.js');
//  <!-- Option  2 for even handler -->
function MakeYellow(){
            document.body.style.backgroundColor = 'yellow' ; 

        }
function MakeBlue(){
            document.body.style.backgroundColor = 'blue' ; 

        }

//<!-- options 3 for event handler   get element by id-->

   const grayBtn = document.getElementById('gray-btn');

        grayBtn.addEventListener('click', function(){
            document.body.style.backgroundColor = 'gray';
        });
       

   

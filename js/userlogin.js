     //<!-- options 4 for event handler   get element by id-->

    document.getElementById('bt-login')
        .addEventListener('click', function(){
            const  UserInfo = document.getElementById('user-info');
            UserInfo.innerText = ' login suscessfully';
           
        })
        
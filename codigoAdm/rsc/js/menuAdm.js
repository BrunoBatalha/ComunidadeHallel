$(document).ready(function () {
    
    console.log("entrou");
    
    $("tr").click(function () {

        $(this).find('td').each(function (i) {
            $th = $("thead th")[i];

            if (jQuery($th).text() == "Nome") {
                $("#nome").val($(this).html());
            }

            if (jQuery($th).text() == "Pedido") {
                $("#pedido").val($(this).html());
            }

            $('#informacoes').modal('show')
        });

    })
    
    var userList = document.getElementById('usersList')
    
    rootRef.child("pedidos").on('value', function(snapshot){
       
        usersList.innerHTML = '';
        snapshot.forEach(function(item){
           
            //var td = document.createElement('td');
            //td.append(document.createTextNode(item.val().nome + item.val().email + item.val().pedido));
            //usersList.appendChild(td);
            
            var tr = document.createElement('tr');
            
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            var td3 = document.createElement('td');
            var td4 = document.createElement('td');
            
            td1.append(item.val().nome);
            
            td2.append(item.val().email);
            
            td3.append(item.val().pedido);
            
            td4.append(item.val().visu);
            
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
        
            userList.appendChild(tr);
            
        });
        
    });
    
    console.log("saiu");
   
});

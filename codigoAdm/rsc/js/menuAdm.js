$(document).ready(function() {
    $("tr").click(function() {

        $(this).find('td').each(function(i) {
            $th = $("thead th")[i];

            if (jQuery($th).text() == "Nome") {
                $("#exampleFormControlInput1").val($(this).html());
            }

            if (jQuery($th).text() == "Pedido") {
                $("#exampleFormControlTextarea1").val($(this).html());
            }

            $('#exampleModal').modal('show')
        });

    })
});
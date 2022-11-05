let count=0;
$("#todoform").submit(function (e) {
    e.preventDefault();
});


$('#btn-add').click(() => {
    let Formtd = $('#form1').val();
    $('#tb-item tbody').append(`
    <tr data-id="${count}">
        <td>${Formtd}</td>
        <td>in progrees</td>
        <td><button>delete</button></td>
        </tr>`);
        $(`tr[data-id="${count}"] button`).click(function () {
            $(this).parent().parent().remove();
        ;})
        
    count++;


});





    



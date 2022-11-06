let count=0;
$("#todoform").submit(function (e) {
    e.preventDefault();
});

$('#btn-add').click(() => {
    let Formtd = $('#form1').val();
    $('#tb-item tbody').append(`
        <tr data-id="${count}">
            <td><input type='checkbox'></td>
            <td>${Formtd}</td>
            <td>in progrees</td>
            <td><button class='btn btn-danger'>delete</button></td>
        </tr>`);
        $(`tr[data-id="${count}"] button`).click(function () {
            $(this).parent().parent().remove();
        ;})
        $(`tr[data-id="${count}"] input`).click(function () {
            if ($(this).parent().parent().css('text-decoration-line') == "none")  
            $(this).parent().parent().css('text-decoration-line', 'line-through');  
        else  
            $(this).parent().parent().css('text-decoration-line', 'none');  
        ;})
        
    count++;


});


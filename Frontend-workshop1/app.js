// let price=document.getElementById("price");
// console.log(price)

$('#btn-add').click((e)=>{
    e.preventDefault();
let conceptName = $('#name-sel').find(":selected").val();
let price =$('#price').val();
let qun=$('#qun').val();

if(price!="" && qun !="" && conceptName !="" ){
    $('#tb-item').append('<tr > <td>'+conceptName+'</td><td>'+price+'</td><td>'+qun+'</td></tr>');
    }
   
    $('#name-sel').find(":selected").text("")
    $('#price').val=" "
    $('#qun').text("")
    $('#myform')[0].reset()
 
});


function eliminarProducto(id){
    $.ajax({
        url: `/productos/${referencia}`,
        type: 'DELETE',
        success: function(result){
            console.log(result);
            window.location.href = '/';
        },error: function(err){
            console.log(err);
        }
    })
}
$(document).ready(function(){

    var url = window.location.href;
    var id = url.substring(url.lastIndexOf('/') + 1);

    var pathname = window.location.pathname;
    if(pathname.includes("edit")){
        $("#addbtn").hide();
    } else {
        $("#updatebtn").hide();
    }

    $('#taskForm').submit(function(event){
        event.preventDefault()

        var taskInput = {
            description: $('#description').val(),
            completed: $('#status').val(),
            owner: $('#owner').val()
        }

        var apiUrl, method; 

        if(!id) {
            method = 'POST';
            apiUrl = '/api/task'
        } else {
            method = 'PUT';
            apiUrl = `/api/task/${id}`
        }

        $.ajax({
            type: method,
            url: apiUrl,
            data: taskInput,
            success: function(res){
                window.location.href='/task'
            },
            error: function(error){
                console.log(error)
            }
        })
    })
})
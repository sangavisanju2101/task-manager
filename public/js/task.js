$(document).ready(function(){
    $("#addBtn").click(function(){
        window.location.href="/task/add";
    })

    $("#deletebtn").click(function(){
       var checked = $("input[type=checkbox]:checked").length; 
       if(!checked || checked >1){
           alert("Please select only one checkbox to delete");
           return;
       }

        var conf = confirm("Are you sure you want to delete?");

        if(conf){
            var all = $("input:checkbox");
            var checked = all.filter(":checked");

            var checkedIds = checked.map(function(){
                return this.id;
            })

            $.ajax({
                type: 'DELETE',
                url: `/api/task/${checkedIds[0]}`,
                success: function(res){
                    alert("Deleted successfully");
                    window.location.href='/task'
                },
                error: function(error){
                    console.log(error)
                }
            })
        }
    })

    $("#editbtn").click(function(){
        var checked = $("input[type=checkbox]:checked").length; 
        if(!checked || checked >1){
            alert("Please select only one checkbox to edit");
            return;
        }

        var all = $("input:checkbox");
            var checked = all.filter(":checked");

            var checkedIds = checked.map(function(){
                return this.id;
            })
            window.location.href=`/task/edit/${checkedIds[0]}`;
    })

    $("#searchbtn").click(function(){
        var searchInput = $("#searchField").val();
        if(searchInput == ""){
            alert("Please enter something to search");
            window.location.href = "/task"
            return;
        }
        window.location.href = `/task?description=${searchInput}`
    })
})
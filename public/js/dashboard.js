$('#upload-submit').click(function() {
  //$('#addRepositoryForm').submit();
  $.post('/clone', $('#addRepositoryForm').serialize(), function(data) {
    location.reload();
  }, 'json');
  $('#addRepositoryForm').parent().html('This may take a while...<div class="progress"><div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div></div>');
});

$(".deleteRepo").click(function(e, role) {
    var deleteButton = $(this);
    console.log("ROLE:" + role);
    if (!role || role != "simulate"){
        e.preventDefault();
        $('#deleteModal').modal('show');

        var confirmButton = $("#deleteConfirm");
        confirmButton.click(function(){
            deleteButton.trigger("click", ["simulate"]);
            confirmButton.off();
        });
    } else {
        $('#deleteModal').modal('hide');
        var url = deleteButton.attr("href"); 
        $.get(url,function(data){
            location.reload();
        });     
    }
});

$(document).ready(function() {
  $(window).keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });
});
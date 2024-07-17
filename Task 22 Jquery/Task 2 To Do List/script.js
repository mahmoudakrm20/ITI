$(document).ready(function() {
    $('#add-btn').click(function() {
      var todoText = $('#todo-input').val();
      if (todoText !== '') {
        var listItem = $('<li>').text(todoText);
        var removeBtn = $('<button class="remove-btn">X</button>');
        removeBtn.click(function() {
          $(this).parent().remove();
        });
        listItem.append(removeBtn);
        $('#todo-list').append(listItem);
        $('#todo-input').val('');
      }
    });
  });
  
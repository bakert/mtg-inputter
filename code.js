      $(document).ready(function () {
        $("#in").focus();
        $("#in").autocomplete(INPUTTER.data, { autoFill: true, selectFirst: false });
        $("#frm").submit(function(event) {
            event.preventDefault();
            var x = $('#in').val().toLowerCase();
            for (var i = 0; i < INPUTTER.data.length; i++) {
                if (INPUTTER.data[i].toLowerCase() == x) {
                    var y = INPUTTER.data[i];
                    break;
                }
            }
            $('#out').val($('#out').val() + y + '\n');
            $('#in').val('');
        });

        alert('Ready');
      });

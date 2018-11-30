function updateTable() {
    var ss_id = "1ahUx8eR7WGad9xp52JUnvg8BQRwe0tFZckj3ZV_YyNU";
    var url = "https://spreadsheets.google.com/feeds/cells/" + ss_id + "/2/public/full?alt=json&min-row=2";
        $.getJSON(url,  function (data) {
        process(data.feed.entry);
    });
    setTimeout(updateTable, 3600000);
}

function process(spreadsheetdata) {
    $('#timetable-container').html("<table id='timetable' class='table table-striped'><tr id='timetable-header'><td></td></tr></table>");
    days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    for (var i = 0; i < 7; i++) {
        $('#timetable-header').append("<th>"+days[i]+"</th>");
    }
    for (var j = 0; j < 12; j++) {
        time = j + 10;
        $('#timetable').append("<tr id='"+time+"'><th>"+time+":00</th></tr>");
        for (var i = 0; i < 7; i++) {
            $('#'+time).append("<td id='"+i+"-"+time+"'></td>")
        }
    }
    rows = [];
    rowLength = 5;
    for (var i = 0; i < (spreadsheetdata.length/rowLength); i++) {
        rows.push([]);
        for (var j = 0; j < rowLength; j++) {
            rows[i].push("");
        }
    }
    for (var i = 0; i < spreadsheetdata.length; i++) {
        cell = spreadsheetdata[i];
        if (cell.gs$cell.col == 3) {
            data = moment(cell.content.$t, 'DD/MM/YYYY').toDate();
        }
        else if (cell.gs$cell.col == 1) {
            data = moment(cell.content.$t, 'DD/MM/YYYY HH:mm:SS').toDate();
        }
        else if (cell.gs$cell.col == 4 || cell.gs$cell.col == 5) {
            data = parseInt(cell.content.$t.substring(0,2));
            if (data < 10) {
                data = 10;
            }
            else if (data > 22) {
                data = 22;
            }
        }
        else {
            data = cell.content.$t;
        }
        rows[parseInt(cell.gs$cell.row)-2][parseInt(cell.gs$cell.col)-1] = data;
        displayInfo();
    }
}
function displayInfo() {
    for (var i = rows.length-1; i >= 0; i--) {
        day = moment(rows[i][2]).day()-1;
        time = [rows[i][3], rows[i][4]];
        sessionLength = (time[1]-time[0]);
        if (sessionLength <= 0) {
            continue;
        }

        tableID = '#'+day.toString()+'-'
        for (var j = 1; j < sessionLength; j++) {
            $(tableID+(j+time[0])).hide();
        }
        tableID = tableID+time[0].toString();
        $(tableID).show();
        $(tableID).attr('rowspan', sessionLength.toString());
        $(tableID).css('background-color', '#005500');
        $(tableID).html(rows[i][1]);
    }
    $('#form-frame').show();
    $('#form-frame').css('height', '1500px');
}
updateTable();
function updateTable() {
    var ss_id = "1ahUx8eR7WGad9xp52JUnvg8BQRwe0tFZckj3ZV_YyNU";
    var url = "https://spreadsheets.google.com/feeds/cells/" + ss_id + "/2/public/full?alt=json&min-row=2";
        $.getJSON(url,  function (data) {
        process(data.feed.entry);
    });
    setTimeout(updateTable, 3600000);
}

function process(spreadsheetdata) {
    // add table inside #timetable-container with header row and initial box
    $('#timetable-container').html("<table id='timetable' class='table table-striped'><tr id='timetable-header'><td></td></tr></table>");

    // build table with cells for each time slot
    days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    today = moment().isoWeekday()-1;

    for (var i = 0; i < 7; i++) {
        $('#timetable-header').append("<th>"+days[(i+today)%7]+"</th>");
    }
    for (var j = 10; j < 22; j++) {
        $('#timetable').append("<tr id='"+j+"'><th>"+j+":00</th></tr>");
        for (var i = 0; i < 7; i++) {
            $('#'+j).append("<td id='"+i+"-"+j+"'></td>")
        }
    }

    // parse spreadsheet data into rows array
    rows = [];
    rowLength = 5;
    
    // generate empty structure for data
    for (var i = 0; i < (spreadsheetdata.length/rowLength); i++) {
        rows.push([]);
        for (var j = 0; j < rowLength; j++) {
            rows[i].push("");
        }
    }

    // fill structure with data from API
    for (var i = 0; i < spreadsheetdata.length; i++) {
        cell = spreadsheetdata[i];
        // parse date into a JS Date if a date column
        if (cell.gs$cell.col == 3) {
            data = moment(cell.content.$t, 'DD/MM/YYYY').toDate();
        }
        // parse date and time into a JS Date if a time column
        else if (cell.gs$cell.col == 1) {
            data = moment(cell.content.$t, 'DD/MM/YYYY HH:mm:SS').toDate();
        }
        // process times, filtering out unreasonable times
        else if (cell.gs$cell.col == 4 || cell.gs$cell.col == 5) {
            data = parseInt(cell.content.$t.substring(0,2));

            // filter out unreasonable times
            if (data < 10) {
                data = 10;
            }
            else if (data > 22) {
                data = 22;
            }
        }
        // otherwise pass string from API into data
        else {
            data = cell.content.$t;
        }
        // add data to rows in the correct location in the array for the cell.
        rows[parseInt(cell.gs$cell.row)-2][parseInt(cell.gs$cell.col)-1] = data;
    }
    // call function to display data on the table
    displayInfo();
}
function displayInfo() {
    // ensure rows is sorted in descending priority
    rows.sort(sortByDates);

    // initialise bookings array to remember what times are booked
    bookings = [];
    for (var i = 0; i < 7; i++) {
        bookings.push([]);
        for (var j = 0; j < 12; j++) {
            bookings[i].push(false);
        }
    }
    clashList = [];
    for (var i = rows.length-1; i >= 0; i--) {
        // load information from rows and place required data into variables
        console.log(moment(rows[i][2]), moment());
        day = moment(rows[i][2]).dayOfYear() - moment().dayOfYear();
        time = [rows[i][3], rows[i][4]];
        sessionLength = (time[1]-time[0]);
        clashes = false;

        // skip entries with negative length (ie end time before start time)
        if (sessionLength <= 0 ) {
            continue;
        }
        
        // copy bookings into working array
        editedBookings = bookings.slice();
        // update working array to include new booking
        for (var j = 0; j < sessionLength; j++) {
            if (!editedBookings[day][time[0]-10+j]) {
                editedBookings[day][time[0]-10+j] = true;
            }
            else {
                // stop iterating and set clashes true if booking clashes with another booking
                clashes = true;
                clashList.push([rows[i][1], rows[i][3], rows[i][4], days[day+today]]);
                break;
            }
        }
        // skip adding booking to timetable if it clashes
        if (clashes) {
            continue;
        }
        else {
            // if booking is valid, add it to main bookings array
            bookings = editedBookings.slice();
        }

        tableID = '#'+day.toString()+'-';
        for (var j = 1; j < sessionLength; j++) {
            // hide cells that overlap with the current booking time
            $(tableID+(j+time[0]).toString()).hide();
        }
        tableID = tableID+time[0].toString();
        $(tableID).show();
        // extend cell marking start of booking to fill empty space left by other cells
        $(tableID).attr('rowspan', sessionLength.toString());
        // change background and fill cell with booker
        $(tableID).css('background-color', '#005500');
        $(tableID).html(rows[i][1]);
    }
    if (clashList.length > 0) {
        $('#clash-container').html("<div id='clashes-content' class='col' style='display: none;'><h2>Warning: Clashes</h2><ul id='clashes-list'></ul></div>");
        for (i = 0; i < clashList.length; i++) {
            $('#clashes-list').append("<li>"+clashList[i][0]+" at "+clashList[i][1]+":00 til "+clashList[i][2]+":00 on "+clashList[i][3]+"</li>");
        }
        $('#clashes-content').show();
    }
    // silly animations for after the page is fully loaded to reduce pop-in
/*     $('#form-frame').show();
    $('#form-frame').css('height', '1500px'); */
}
// define function for sorting bookings by date booking was made (to determine priority)
var sortByDates = function(row1, row2) {
    if (row1[1] > row2[1]) return 1;
    if (row1[1] < row2[1]) return -1;
    return 0;
};
updateTable();
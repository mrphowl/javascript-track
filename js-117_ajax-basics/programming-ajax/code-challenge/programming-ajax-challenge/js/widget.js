/**
 * JS-117: AJAX Basics - Programming AJAX
 * 
 * Code challenge: Programming AJAX Challenge
 * 
 * List the rooms and show whether they are available or not.
 */
var roomRequest = new XMLHttpRequest();

roomRequest.onreadystatechange = () => {

  if( roomRequest.readyState === 4 ) {
    var rooms = JSON.parse(roomRequest.responseText);
    var html = '<ul class="rooms">';

    for ( let i = 0; i < rooms.length; i++ ) {
      const roomAvailability = rooms[i].available ? 'empty' : 'full';
      const roomTitleText = `This room is ${rooms[i].available ? '' : 'not '}available.`;

      html += `<li class="${roomAvailability}" title="${roomTitleText}">${rooms[i].room}</li>`;
    }
    html += '<ul>';
    document.getElementById('roomList').innerHTML = html;
  }
};

roomRequest.open('GET', 'data/rooms.json');
roomRequest.send();

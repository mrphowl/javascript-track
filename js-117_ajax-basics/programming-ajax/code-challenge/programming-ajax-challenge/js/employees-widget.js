/**
 * JS-117: AJAX Basics - Programming AJAX
 * 
 * Exercise: Employee widget
 * 
 * Show the list of employees and their status whether they are in or out of the office.
 */
var employeeRequest = new XMLHttpRequest();

employeeRequest.onreadystatechange = function() {
  if ( employeeRequest.readyState === 4 ) {
    const employees = JSON.parse(employeeRequest.responseText);
    let html = `<ul class="bulleted">`;

    for ( let i = 0; i < employees.length; i++ ) {
      const employeeStatus = employees[i].inoffice ? 'in' : 'out';

      html += `<li class="${employeeStatus}">${employees[i].name}</li>`;
    }

    html += '</ul>';

    document.getElementById('employeeList').innerHTML = html;
  }
};

employeeRequest.open('GET', 'data/employees.json');
employeeRequest.send();

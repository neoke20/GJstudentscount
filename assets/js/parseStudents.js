fetch("./students.json")
    .then(Response => Response.json())
    .then(data => {
      let dates = [
    {"date":"20/06/2022",
     "counter":0},
    {"date":"27/06/2022",
     "counter":0},
     {"date":"04/07/2022",
     "counter":0},
     {"date":"11/07/2022",
     "counter":0},
     {"date":"18/07/2022",
     "counter":0},
     {"date":"25/07/2022",
     "counter":0},
     {"date":"01/08/2022",
     "counter":0},
     {"date":"08/08/2022",
     "counter":0},
     {"date":"15/08/2022",
     "counter":0},
     {"date":"22/08/2022",
     "counter":0},
  ];
      // Get the length of array to know total students
      const totalStudents = data.length;
      document.getElementById("total-students").insertAdjacentText('afterbegin', totalStudents);
      function dateConversion(string) {
        const dateParts = string.split("/");
        const dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
        return dateObject;
      }
      // Collecting data iterating over Array to create table and count students
      data.forEach((element, index) => {
        // Check if start date corresponds to date and add 1 to counter
        dates.forEach(item => {
          dateConversion(item.date).getTime() == dateConversion(element[`Course Start`]).getTime() ? item.counter++ : "";
        });

        document.getElementById("student-table").insertAdjacentHTML('beforeend', `<tr>
        <th scope="row">${index + 1}</th>
        <td>${element[`Given Names`]}</td>
        <td>${element[`Family Name`]}</td>
        <td>${element.Agent}</td>
        <td>${element[`Course Start`]}</td>
        <td>${element[`Course End`]}</td>
        <td>${element[`Current Center`]}</td>
        <td class="email">${element[`Contact Email`]}</td>
      </tr>`)
      });
          // Display all the dates we are tracking
      dates.forEach(item => {
        document.getElementById('date-table').insertAdjacentHTML('beforeend', `<p>${item.date}: ${item.counter}</p>`);
      });
    });

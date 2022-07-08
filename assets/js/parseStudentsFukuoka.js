fetch("./studentsFukuoka.json")
    .then(Response => Response.json())
    .then(data => {
      // Options to display the date in alphabet
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const today = new Date();
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
     {"date":"29/08/2022",
     "counter":0},
     {"date":"05/09/2022",
     "counter":0},
     {"date":"12/09/2022",
     "counter":0},
     {"date":"19/09/2022",
     "counter":0},
     {"date":"26/09/2022",
     "counter":0},
     {"date":"03/10/2022",
     "counter":0},
     {"date":"10/10/2022",
     "counter":0},
     {"date":"17/10/2022",
     "counter":0},
     {"date":"24/10/2022",
     "counter":0},
     {"date":"31/10/2022",
     "counter":0},
     {"date":"07/11/2022",
     "counter":0},
     {"date":"14/11/2022",
     "counter":0},
     {"date":"21/11/2022",
     "counter":0},
     {"date":"28/11/2022",
     "counter":0},
     {"date":"05/12/2022",
     "counter":0},
     {"date":"12/12/2022",
     "counter":0},
     {"date":"19/12/2022",
     "counter":0},
     {"date":"26/12/2022",
     "counter":0},
     {"date":"02/01/2023",
     "counter":0},
     {"date":"09/01/2023",
     "counter":0},
     {"date":"16/01/2023",
     "counter":0},
     {"date":"23/01/2023",
     "counter":0},
     {"date":"30/01/2023",
     "counter":0},
     {"date":"06/02/2023",
     "counter":0},
     {"date":"13/02/2023",
     "counter":0},
     {"date":"20/02/2023",
     "counter":0},
     {"date":"27/02/2023",
     "counter":0},
     {"date":"06/03/2023",
     "counter":0},
     {"date":"13/03/2023",
     "counter":0},
     {"date":"20/03/2023",
     "counter":0},
     {"date":"27/03/2023",
     "counter":0},
     {"date":"03/04/2023",
     "counter":0},
     {"date":"10/04/2023",
     "counter":0},
     {"date":"17/04/2023",
     "counter":0},
     {"date":"24/04/2023",
     "counter":0},
     {"date":"01/05/2023",
     "counter":0},
     {"date":"08/05/2023",
     "counter":0},
     {"date":"15/05/2023",
     "counter":0},
     {"date":"22/05/2023",
     "counter":0},
     {"date":"29/05/2023",
     "counter":0},
     {"date":"05/06/2023",
     "counter":0},
     {"date":"12/06/2023",
     "counter":0},
     {"date":"19/06/2023",
     "counter":0},
     {"date":"26/06/2023",
     "counter":0},
     {"date":"03/07/2023",
     "counter":0},
     {"date":"10/07/2023",
     "counter":0},
     {"date":"17/07/2023",
     "counter":0},
     {"date":"24/07/2023",
     "counter":0},
     {"date":"31/07/2023",
     "counter":0},
     {"date":"07/08/2023",
     "counter":0},
     {"date":"14/08/2023",
     "counter":0},
     {"date":"21/08/2023",
     "counter":0},
     {"date":"28/08/2023",
     "counter":0},
     {"date":"04/09/2023",
     "counter":0},
     {"date":"11/09/2023",
     "counter":0},
     {"date":"18/09/2023",
     "counter":0},
     {"date":"25/09/2023",
     "counter":0},
     {"date":"02/10/2023",
     "counter":0},
     {"date":"09/10/2023",
     "counter":0},
     {"date":"16/10/2023",
     "counter":0},
     {"date":"23/10/2023",
     "counter":0},
     {"date":"30/10/2023",
     "counter":0},
     {"date":"06/11/2023",
     "counter":0},
     {"date":"13/11/2023",
     "counter":0},
     {"date":"20/11/2023",
     "counter":0},
     {"date":"27/11/2023",
     "counter":0},
     {"date":"04/12/2023",
     "counter":0},
     {"date":"11/12/2023",
     "counter":0},
     {"date":"18/12/2023",
     "counter":0},
     {"date":"25/12/2023",
     "counter":0},
     {"date":"01/01/2024",
     "counter":0},
     {"date":"08/01/2024",
     "counter":0},
     {"date":"15/01/2024",
     "counter":0},
     {"date":"22/01/2024",
     "counter":0},
     {"date":"29/01/2024",
     "counter":0},
     {"date":"05/02/2024",
     "counter":0},
     {"date":"12/02/2024",
     "counter":0},
     {"date":"19/02/2024",
     "counter":0},
     {"date":"26/02/2024",
     "counter":0},
     {"date":"01/03/2024",
     "counter":0},
     {"date":"04/03/2024",
     "counter":0},
     {"date":"11/03/2024",
     "counter":0},
     {"date":"18/03/2024",
     "counter":0},
     {"date":"25/03/2024",
     "counter":0},
     {"date":"01/04/2024",
     "counter":0},
     {"date":"08/04/2024",
     "counter":0},
     {"date":"15/04/2024",
     "counter":0},
     {"date":"22/04/2024",
     "counter":0},
     {"date":"29/04/2024",
     "counter":0},
     {"date":"06/05/2024",
     "counter":0},
     {"date":"13/05/2024",
     "counter":0},
     {"date":"20/05/2024",
     "counter":0},
     {"date":"27/05/2024",
     "counter":0},
     {"date":"03/06/2024",
     "counter":0},
     {"date":"10/06/2024",
     "counter":0},
     {"date":"17/06/2024",
     "counter":0},
     {"date":"24/06/2024",
     "counter":0},
     {"date":"01/07/2024",
     "counter":0},
     {"date":"08/07/2024",
     "counter":0},
     {"date":"15/07/2024",
     "counter":0},
     {"date":"22/07/2024",
     "counter":0},
     {"date":"29/07/2024",
     "counter":0},
     {"date":"05/08/2024",
     "counter":0},
     {"date":"12/08/2024",
     "counter":0},
     {"date":"19/08/2024",
     "counter":0},
     {"date":"26/08/2024",
     "counter":0},
     {"date":"02/09/2024",
     "counter":0},
     {"date":"09/09/2024",
     "counter":0},
     {"date":"16/09/2024",
     "counter":0},
     {"date":"23/09/2024",
     "counter":0},
     {"date":"30/09/2024",
     "counter":0},
     {"date":"07/10/2024",
     "counter":0},
     {"date":"14/10/2024",
     "counter":0},
     {"date":"21/10/2024",
     "counter":0},
     {"date":"28/10/2024",
     "counter":0},
     {"date":"04/11/2024",
     "counter":0},
     {"date":"11/11/2024",
     "counter":0},
     {"date":"18/11/2024",
     "counter":0},
     {"date":"25/11/2024",
     "counter":0},
     {"date":"02/12/2024",
     "counter":0},
     {"date":"09/12/2024",
     "counter":0},
     {"date":"16/12/2024",
     "counter":0},
     {"date":"23/12/2024",
     "counter":0},
     {"date":"30/12/2024",
     "counter":0},
  ];
  // Allows to change date string to date object
      function dateConversion(string) {
        const dateParts = string.split("/");
        const dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
        return dateObject;
      }
      // Collecting data iterating over Array to create table and count students
      data.forEach((element, index) => {
        // Check if start date was before the date and the end date is after to increase counter. This means students will be in school on that specific week
        dates.forEach(item => {
          dateConversion(element[`Course Start`]).getTime() <= dateConversion(item.date).getTime() && dateConversion(element[`Course End`]).getTime() >= dateConversion(item.date).getTime() ? item.counter++ : "";
        });
        // conditional will only add students whose end date is after today, so no finished students will be added to the table
        if (dateConversion(element[`Course End`]).getTime() >= today.getTime()) {
          document.getElementById("student-table").insertAdjacentHTML('beforeend', `<tr>
          <th scope="row">${element[`Student ID`]}</th>
          <td>${element[`Given Names`]}</td>
          <td>${element[`Course Start`]}</td>
          <td>${element[`Course End`]}</td>
          <td>${element[`Current Center`]}</td>
        </tr>`)
        }
      });
      let highestStudentsNumber = dates.sort((a, b) => parseFloat(b.counter) - parseFloat(a.counter));
      console.log(highestStudentsNumber[0]);
      // Display all the dates we are tracking
      dates.forEach(item => {
        document.getElementById('date-table').insertAdjacentHTML('beforeend', `<div class="week"><p>${dateConversion(item.date).toLocaleDateString("en-US", options)}:</p><p><span class="counter">${item.counter}</span> students</p></div>`);
      });
      // Checking number in the counter div and changes color of card accordingly
      const weekDiv = document.getElementsByClassName("week");
      for (let item of weekDiv) {
        if (item.querySelector(".counter").innerHTML <= 20) {
          item.classList.add("green20")
        }
        else if (item.querySelector(".counter").innerHTML > 20 && item.querySelector(".counter").innerHTML <= 40) {
          item.classList.add("green40")
        }
        else if (item.querySelector(".counter").innerHTML > 40 && item.querySelector(".counter").innerHTML <= 60) {
          item.classList.add("green60")
        }
        else if (item.querySelector(".counter").innerHTML > 60 && item.querySelector(".counter").innerHTML <= 80) {
          item.classList.add("green80")
        }
        else if (item.querySelector(".counter").innerHTML > 80 && item.querySelector(".counter").innerHTML <= 100) {
          item.classList.add("green100")
        }
        else if (item.querySelector(".counter").innerHTML > 100 && item.querySelector(".counter").innerHTML <= 120) {
          item.classList.add("green120")
        }
        else if (item.querySelector(".counter").innerHTML > 120 && item.querySelector(".counter").innerHTML <= 130) {
          item.classList.add("green130")
        }
        else {
          item.classList.add("red")
        }
      }
    });

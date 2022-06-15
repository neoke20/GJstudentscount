fetch("./students.json")
    .then(Response => Response.json())
    .then(data => {
      // Get the length of array to know total students
      const totalStudents = data.length;
      let julyIntake = 0;
      document.getElementById("total-students").insertAdjacentText('afterbegin', totalStudents);
      // Collecting data iterating over Array to create table and count students
      data.forEach((element, index) => {
        element[`Course Start`] == "01/08/2022" ? julyIntake++ : julyIntake;
        document.getElementById("student-table").insertAdjacentHTML('beforeend', `<tr>
        <th scope="row">${index + 1}</th>
        <td>${element[`Given Names`]}</td>
        <td>${element[`Family Name`]}</td>
        <td>${element.Agent}</td>
        <td>${element[`Course Start`]}</td>
        <td>${element[`Course End`]}</td>
        <td>${element[`Current Center`]}</td>
        <td class="email">${element[`Contact Email`]}</td>
        <td>${element[`Visa Type`]}</td>
      </tr>`)
      });
      document.getElementById("july-students").insertAdjacentText('afterbegin', julyIntake);
    });

fetch("./students.json")
    .then(Response => Response.json())
    .then(data => {
      console.log(data);
  		data.forEach((element, index) => {
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
    });

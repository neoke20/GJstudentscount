fetch("./students.json")
    .then(Response => Response.json())
    .then(data => {
        console.log(data);
  		// or whatever you wanna do with the data
    });

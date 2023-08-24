const userForm = document.getElementById("signup");
//
async function getData(){
  try{  
    const response = await fetch("http://localhost:8000/getemployees");
    const data = await response.json();
    displayData(data);
  } catch(err){
    console.log(err);
  }
}
//
function displayData(arr) { 
  const container = document.getElementById("documents");
  for (let i = 0; i < arr.length; i++) {
    const li_employee = document.createElement('li');
    li_employee.innerHTML = arr[i].empName;
    container.appendChild(li_employee);
  }
}
//
/* userForm.addEventListener("submit", (e) => {
	e.preventDefault();
  let form = e.currentTarget;
	let formFields = new FormData(form);
  let formDataObject = Object.fromEntries(formFields.entries());
  //console.log(formDataObject);
  fetch('http://localhost:8000/addemployee', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
    body: JSON.stringify(formDataObject),
	})
  .then(function(response){
		console.log(response);
	}).catch(function(err){
		console.log(err);
	});
}); */


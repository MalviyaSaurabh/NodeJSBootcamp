//
function getData(){
  fetch("http://localhost:8000/getemployees").then(function(response){
		console.log(response);
	});
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


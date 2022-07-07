let tableBody = document.querySelector('.table-body');
// let tableRow = document.createElement('tr');
// let tableDiv = document.createElement('td');

console.log(tableBody.innerHTML)
fetch('https://jsonplaceholder.typicode.com/users/')
  .then((response) => response.json())
  .then((json) => {
    json.map((item)=>{
        tableBody.innerHTML += 
        `<tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.phone}</td>
            <td>${item.email}</td>
        </tr>
        `
    })
  }); 
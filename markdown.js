const Manager = require("./lib/manager");

const Employee = require("./lib/employee")
const allEmployees = require('../company-maker/index')


function managers(manager) {
    renderedManagers = manager.map(i => {
        return ` <div class="col">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${i.getRole()}</h5>
            
            <p class="card-text">${i.name}</p>
          </div>
        </div>
      </div>`

    })


}


function markDownHtml(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <title>Document</title>
    </head>
    <body>
    <div class="row row-cols-1 row-cols-md-2 g-4">
    ${data.filter(manager => manager.getRole() ===  "Manager")}
    ${managers(data.filter(Employee => Employee.name ===  "Name"))}

    <div class="col">
      <div class="card">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
    </div>
  </div>
    
    
    </body>
    </html>`
};

module.exports = markDownHtml;
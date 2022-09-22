// const hostLocal = 'http://localhost/allonfasaha/'
let queryString = location.search.substring(1);
let linkFetch = queryString.split('?');
// console.log(linkFetch[0])



   fetch(`${hostLocal}php/?allAdmins`)
    .then(response => response.json())
    .then(jsonResponse => {
      for (const key in jsonResponse) {
        console.log(jsonResponse[key]);
        
        if(jsonResponse[key]['id'] == linkFetch[0]) {
            console.log(jsonResponse[key])
            $('#all').html(`
             <tr>
                    <th>Name : </th>
                    <td>${jsonResponse[key]['fullname']}</td>
                  </tr>
                  <tr>
                    <th>Email : </th>
                    <td>${jsonResponse[key]['email']}</td>
                  </tr>
                  <tr>
                    <th>Phone Number : </th>
                    <td>${jsonResponse[key]['phone']}</td>
                  </tr>
                  <tr>
                    <th>Role : </th>
                    <td>${jsonResponse[key]['role']}</td>
                  </tr>
                  <tr>
                    <th>Country : </th>
                    <td>${jsonResponse[key]['country']}</td>
                  </tr>
                  <tr>
                    <th>State : </th>
                    <td>${jsonResponse[key]['state']}</td>
                  </tr>
                  <tr>
                    <th>L.G.A : </th>
                    <td>${jsonResponse[key]['lga']}</td>
                  </tr>
            `)
        }
      }
     
    });
    

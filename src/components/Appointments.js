import React from 'react';

function Appointments() {
  return (
    <div className="App">
      <h1 class="display-6">Welcome to the Appointments page</h1>
      <br/>
     <p>Please fill the form:</p>
     <div class="form-floating mb-3">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
      <label for="floatingPassword">Password</label>
    </div>


    </div>
  );
}

export default Appointments;

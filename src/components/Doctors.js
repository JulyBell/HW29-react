import React from 'react';

function Doctors() {
  return (
    <div className="App">


     <h1 class="display-6">Welcome to the Doctors page</h1>

     <div class="row">
      <div class="col">
        <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
  
      <div class="col">
    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>

      </div>
    </div>



      </div>
    </div>
  );
}

export default Doctors;
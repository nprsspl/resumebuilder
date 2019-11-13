import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
Resume Builder pro

      </header>

<body>



<div class="flex-container">
<div class="headerlogin">
Sign-Up
</div>

<div class="div">
<form name="myForm" action="/action_page.php" onsubmit="return validateForm()" method="post">
<input class="input" type="text" name="mail" placeholder="Email id"></input> <br></br>
<input class="input" type="Password" name="Password"placeholder="Password"></input> <br></br>
<button class="button">Login</button>
<button class="buttoncancel">Cancel</button>
</form>
  </div>
</div>

</body>


    </div>



  );
}

export default App;

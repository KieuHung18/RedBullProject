import logo from './logo.svg';
import './App.css';
import jquery  from 'jquery';

function doAjaxPost() {
  jquery.ajax({
      type: "POST",
      url: "http://localhost:8080/delivery/connect",
      data: "clientData=connect",
      success: function(response){
          console.log(response.result)
       },
  });
  
}
function App() {
  return (
    <button onClick={doAjaxPost} className='button' id='button-id'>connect</button>
  );
}

export default App;

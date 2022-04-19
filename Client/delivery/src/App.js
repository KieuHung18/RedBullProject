import logo from './logo.svg';
import './App.css';
import jquery  from 'jquery';

function doAjaxPost() {
  jquery.ajax({
      type: "POST",
      url: "http://localhost:8080/delivery/user",
      data: {mk: jquery("#input"),tk: ""},
      success: function(response){
        
          console.log(response.respone.name)
           console.log(response.respone.sdt)
          console.log(response.result)
          console.log(response)
       },
  });
  
}
const user={name:"Tan Phat"};
function App() {
  return (
    <button onClick={doAjaxPost} className='button' id='button-id'>connect</button>
  );
}

export default App;

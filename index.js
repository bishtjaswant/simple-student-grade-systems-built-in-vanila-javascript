document.title=`Student grade system`;
document.addEventListener("DOMContentLoaded", (e)=>  document.querySelector('#getresult').addEventListener('click', getresult));

// getting all input fields
function getresult(e) {
  
  if (validate()===true) {
      alert("thanks you we got all marks of you. \njust wait a scond",'green','green');
    //  show output to dom
      display()
  } 

}


function display() {
    let name=   document.querySelector('#name').value;
    let science=   document.querySelector('#science').value;
    let math=   document.querySelector('#math').value;
    let computer=   document.querySelector('#computer').value;
    let hindi=   document.querySelector('#hindi').value;
    let geography =   document.querySelector('#geography').value;
    let pysics=   document.querySelector('#pysics').value;

    let scored =( parseInt(science)+ parseInt(math)+ parseInt(computer)+ parseInt(hindi)+ parseInt(geography)+ parseInt(pysics) );;
    let grade='';
    let percentage= Math.round( (scored/600)*100 );
    let total= (100*6);
         
    if (percentage>=80) {
      grade='A';
    }
    else if (percentage>=50 && percentage<=80) {
      grade='B'
    }
    else{
      grade="C";
    }

   let result=  document.getElementById('result');
   result.innerHTML=`  <div class="row col s12 m12">
   
    <div class="card horizontal">
       
      <div class="card-stacked">
       <h2 class="header">Hello ${name} your result is </h2>
        <div class="card-content" style="font-size:4rem;">
          <strong class="text-green"> grade :</strong> ${grade} <br/>
          <strong class="text-green"> percentage :</strong> ${percentage}% <br/>
          <strong class="text-green"> scored :</strong> ${scored} <br/>
          <strong class="text-green"> out of :</strong> ${total} <br/>
        </div>
       
      </div>
    </div>
  </div>`;
}

//  some validation 
function validate() {
  let name=   document.querySelector('#name').value;
  let science=   document.querySelector('#science').value;
  let math=   document.querySelector('#math').value;
  let computer=   document.querySelector('#computer').value;
  let hindi=   document.querySelector('#hindi').value;
  let geography =   document.querySelector('#geography').value;
  let pysics=   document.querySelector('#pysics').value;
  
  if (name=='') {
      alert('name is required','red','red');
    //   error.innerHTML=''
      return false;
  }
  else if (name.match(/^[a-zA-Z ]+$/) ==null ) {
      
    alert('name is invalid','red','red');
    
    return false;
  }
  else   if (science=='') {
    alert('science marks is required','red','red');
  //   error.innerHTML=''
    return false;
}
 else   if (math=='') {
      alert('math marks is required','red','red');
    //   error.innerHTML=''
      return false;
  } 
  else   if (hindi=='') {
    alert('hhindi marks is required','red','red');
  //   error.innerHTML=''
    return false;
}
else   if (geography=='') {
    alert('groggraphy marks is required','red','red');
  //   error.innerHTML=''
    return false;
} 
else   if (pysics=='') {
    alert('pysics marks is required','red','red');
  //   error.innerHTML=''
    return false;
} 
else {
    return true;
}



    
}




   
// show alert
function alert(msg, textcolor, bgcolor) {
  let div= document.createElement('div');
  div.className=`${textcolor}-text ${bgcolor} lighten-4 center-align`;
  div.appendChild(document.createTextNode(msg));
  let error= document.querySelector(".error");
  error.insertAdjacentElement('afterbegin',div )
}
 
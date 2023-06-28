// let personsArray = [];

function myclick(){
    let taskName = document.getElementById('pirvelitext').value;
    let taskDescr = document.getElementById('meoretext').value;
    let tasAssign = document.getElementById('mesametext').value;

    let newdiv = document.createElement('div');
       
    let newtitle = document.createElement('h3');
    newtitle.innerHTML = taskName;
    
    newdiv.appendChild(newtitle);
    
    let newDescr = document.createElement('p');
    newDescr.innerHTML = taskDescr;
    newdiv.appendChild(newDescr);
    
    let newAssign = document.createElement('p');
    newAssign.innerHTML = tasAssign;
    newdiv.appendChild(newAssign);
     
    let taskStatus = document.getElementById('taskstatus').value;

    if (taskStatus === 'wtd') {
        document.getElementById('todo').appendChild(newdiv);
        newdiv.style = 'background-color: #00ff50';
    
       } else if(taskStatus === "ip"){
        document.getElementById('Inprogress').appendChild(newdiv);
        newdiv.style = 'background-color: #A52A2A';
    
       }else if(taskStatus === 'tt'){
        document.getElementById('Testing').appendChild(newdiv);
        newdiv.style = 'background-color: #00BFFF';
        } else {
            document.getElementById('Done').appendChild(newdiv);
            newdiv.style = 'background-color: #20B2AA';
        }
    
    
    // let temporaryPeson = {
    //     lnamename:'',
    //     fname:'',
    //     zname:''
    // };
    // temporaryPeson.lnamename= document.getElementById('pirvelitext').value;
    // temporaryPeson.fname = document.getElementById('meoretext').value;
    // temporaryPeson.zname = document.getElementById('mesametext').value;
    // personsArray.push(temporaryPeson);
    
    // console.log('show me', temporaryPeson);
  
    // document.querySelectorAll('div');

    // let mydiv = document.createElement('div');
    // mydiv.innerHTML=temporaryPeson;
   
    // mydiv.style='background-color: #ff0000';
    // document.getElementById('todo').appendChild(mydiv);
}


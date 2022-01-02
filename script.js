function out(){
    // getting first and last name
    let first_name= document.querySelector("#firstname");
    let second_name= document.querySelector("#secondname");
    
    //getting gender 
    let checkgender = document.getElementsByName("gender");
    let gender; 
    for(var i=0;i<checkgender.length;i++){//checking which gender is selected
       if(checkgender[i].checked){
           gender=checkgender[i].value;  
       }
    }
    
    //getting address
    let address= document.querySelector("#addressvalue");

    //getting pincode
    let pincode= document.querySelector("#pincode");

    //getting state
    let state= document.querySelector("#statevalue");

    //getting country
    let country = document.querySelector("#country");

    //getting foods
    let food = document.getElementsByName("food");
    let foodlist=[];
    let foodcount=0;
    for(var i=0;i<5;i++){//checking which foods are selected
        if(food[i].checked){
            foodlist.push(food[i].value);
            foodcount++;
        }
    }
    //checking atleast two food is selected

    if(foodcount>=2){

      //inserting new row to the table
     let newrow = document.getElementById("newtable").insertRow();

     //inserting 8 cells to the new row
     let one = newrow.insertCell(0);
     let two = newrow.insertCell(1);
     let three = newrow.insertCell(2);
     let four = newrow.insertCell(3);
     let five = newrow.insertCell(4);
     let six = newrow.insertCell(5);
     let seven = newrow.insertCell(6);
     let eight = newrow.insertCell(7);

     //inserting values to the cells
     console.log(first_name.value,second_name.value,gender,address.value,state.value,country.value,pincode.value,[...foodlist]);
     one.innerHTML= first_name.value;
     two.innerHTML= second_name.value;
     three.innerHTML= gender;
     four.innerHTML= address.value;
     five.innerHTML= state.value;
     six.innerHTML= country.value;
     seven.innerHTML= pincode.value;
     eight.innerHTML= [...foodlist];
    
     //clearing the input fields
     first_name.value="";
     second_name.value="";
     gender="";
     address.value="";
     state.value="";
     country.value="";
     pincode.value="";
      
     //unselecting all the genders
     for(var i=0;i<checkgender.length;i++){
         checkgender[i].checked=false;
     }
     //unselecting all the foods
     for(var i=0;i<5;i++){
         food[i].checked=false;
     }

     document.getElementById("alertmsg").innerHTML="";
    }
    else{
        document.getElementById("alertmsg").innerHTML=`Must select Two foods<br>`;
    }
    

}
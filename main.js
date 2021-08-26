var names_array=["Satyajit","Sarita","Shrihan","Shritik"];
var photo_array=["IMG_310.jpg","IMG_2774.jpg","IMG_0954.jpg","IMG_1134.jpg"];


var i=0;
function update(){
   
    var members=4;
    if(i>members){
i=0;
    }
document.getElementById("familyname").innerHTML=names_array[i];
document.getElementById("familyfront").src=photo_array[i];
i++;
}

// window.onload = Pageload;
// function Pageload(){
    
//         console.log("cc");
//         document.getElementById("pp").addEventListener("click",function(){
           
//         })     
// }

async function cpy(){
    // addCourse();
    // console.log("aa");
    // let course = "Thai"
    //     AddCourse(course) 
    console.log("Thai");
    const response = await fetch("http://localhost:3001/setcourse?course="+"Thai"+"&username="+document.cookie.split("=")[2])
}

async function wpy(){
    // addCourse();
    // console.log("tt");
    // let course = "eng"
    //     AddCourse(course) 
    console.log("Eng");
    const response = await fetch("http://localhost:3001/setcourse?course="+"Eng"+"&username="+document.cookie.split("=")[2])
}

async function mpy(){
    // addCourse();
    // console.log("ee");
    // let course = "math"
    //     AddCourse(course) 
    console.log("Math");
    const response = await fetch("http://localhost:3001/setcourse?course="+"Math"+"&username="+document.cookie.split("=")[2])
}


 function AddCourse (course){
    console.log("yy");
    let response = await fetch("/CourseTP",{
      method:"POST",
      headers:{
        Accept: "application/json",
        "Content-Type":"application/json",
      },
      body:JSON.stringify({
        course :course,
      }),
    });
  }
  
  Pageload();

let profileHeight=$("#profile").offset().top;
let skillsHeight=$("#skills").offset().top;
let projects= document.querySelector("#projects .row");


$(window).scroll(function(){
    if($(window).scrollTop()>profileHeight-100){
        $("#profile .bg-color").fadeIn(1000);
    }
})

let myProjects= [{
    image:"images/angora.PNG",
    title:"Angora",
    desc:"It is a RWD portfolio",
    tags:"html, css, bootstrap, scss, and little JS",
    githubLink:"https://github.com/GehadHisham20/Angora-portfolio",
    websiteLink:"https://gehadhisham20.github.io/Angora-portfolio/"
},
{
    image:"images/login.PNG",
    title:"Login System",
    desc:"Sign up and login system with simple validation system",
    tags:"html, css, bootstrap, css, and JS",
    githubLink:"https://github.com/GehadHisham20/Smart-Login-System",
    websiteLink:"https://gehadhisham20.github.io/Smart-Login-System/"
},
{
    image:"images/morgan.PNG",
    title:"Morgan",
    desc:"It is a RWD portfolio",
    tags:"html, css, bootstrap, scss, and little JS",
    githubLink:"https://github.com/GehadHisham20/Morgan-devfolio",
    websiteLink:"https://gehadhisham20.github.io/Morgan-devfolio/"
},
{
    image:"images/bookmarker.PNG",
    title:"Bookmarker",
    desc:"Bookmark links to save it.. you can also search, update, delete or visit",
    tags:"html, css, bootstrap, css, and JS",
    githubLink:"https://github.com/GehadHisham20/Bookmarker",
    websiteLink:"https://gehadhisham20.github.io/Bookmarker/"
},
{
    image:"images/weather.PNG",
    title:"Weather",
    desc:`RWD portfolio to display the weather of the current and the 2 days after it.`,
    tags:"html, css, bootstrap, css, and JS",
    githubLink:"https://github.com/GehadHisham20/Weather-App",
    websiteLink:"https://youtu.be/Oo99JoxwuJM"
}];

function displayProjects(){
    let allProjects=``;
    for(let i=0;i<myProjects.length;i++){
        allProjects+=    `<div class="col-xl-4 col-md-6 mb-4">
        <div class="project-card">
            <img src=${myProjects[i].image} class="img-fluid">
            <div class="layout">
                <h5>${myProjects[i].title}</h5>
                <p class="m-md-0">${myProjects[i].desc}</p> 
                <p class="d-md-block d-none"><span>Tags: </span>${myProjects[i].tags}</p>
                <a href="${myProjects[i].githubLink}" target="_blank"><i class="fa-brands fa-github"></i></a>
                <a href="${myProjects[i].websiteLink}" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
        </div>
    </div>`;
    }
projects.innerHTML=allProjects;
}

function displayProjectsWithFade(){
    $(".project-card").eq(0).fadeIn(1000);
    for(let i=0;i<myProjects.length;i++){
        $(".project-card").delay(100*i).eq(i).fadeIn(2000);
    }

}
displayProjects();
$(window).scroll(function(){
    if($(window).scrollTop()>skillsHeight){  
        displayProjectsWithFade();
    }
})


  
  

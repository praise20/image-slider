const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

slides.forEach(function(slide,index){
    slide.style.left=`${index * 100}%`;
});

let counter= 0;

nextBtn.addEventListener('click',function(){
    counter++;
    slider();
});

prevBtn.addEventListener('click',function(){
    counter--;
    slider();
});



function slider(){

    // using slider, when user gets to the last slide, user is taken back to the begining. Dito process for next
    // if(counter === slides.length){
    //     counter= 0;
    // }
    // if(counter < 0){
    //     counter= slides.length - 1;
    // }

    // hide the prev and next btn when not needed
    if(counter < slides.length - 1){
        nextBtn.style.display = "block";
    }else{
        nextBtn.style.display = "none";
    }

    if(counter > 0){
        prevBtn.style.display = "block";
    }else{
        prevBtn.style.display = "none";
    }

    slides.forEach(function(slide){
        slide.style.transform= `translateX(-${counter * 100}%)`;
    });
}
prevBtn.style.display = "none";

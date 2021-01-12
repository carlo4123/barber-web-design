const indicator = document.querySelectorAll(".indicators-items")
const sliderContent = document.querySelector(".slider__content")
const animation1= document.querySelector(".slider-img-container")
const animation2=document.querySelector(".slide-text-content")
const headingSecondary = document.querySelectorAll(".heading-secondary")
const footer =document.querySelector(".home__footer")

const textList = document.querySelectorAll(".text-list")

const numberSlide = document.querySelector(".numberSlider")


//tab menu
const homeNavigationTab = document.querySelectorAll(".home__navigation-items")  

textList.forEach((eachList) => {
    
    eachList.addEventListener("click",function(event){
        const list = Array.from(textList).indexOf(event.target)
        console.log(list)
        
        const gridValue = window.getComputedStyle(textList[list]).getPropertyValue('grid-row');

        console.log(gridValue)
    })

})





indicator.forEach((node)=>{
  
    node.addEventListener("click", function(event){
          
        const indicatorIndex = Array.from(indicator).indexOf(event.target)

        gridRow(indicatorIndex)
        activeIndicator(indicatorIndex)

    
      //every slider remove animation
        animation1.classList.remove('animation--1')
        animation2.classList.remove('animation--2')
    

        checkTransform(indicatorIndex)

        headingSecondary.forEach((eachHeading => {
            eachHeading.classList.add('animationRotate')
           
            //remove animation rotate in 1 second
            setTimeout(function(){  
                eachHeading.classList.remove('animationRotate')
        }, 1000);
        }))
    
    
    })


    
})

function activeIndicator(index){
    indicator.forEach((eachMenu) =>{
        eachMenu.classList.remove('active')
    })
    indicator[index].classList.add('active')
}

//checking translate posistion
function checkTransform(index){

    if(index == 0){
        // console.log(sliderContent.style.transform)

        sliderContent.style.transform = "translateX(0)";
        console.log(sliderContent.style.transform)
        footer.style.marginBottom = "0"


        numberSlide.style.transform = "translateY(0)"
    }

    else if(index == 1){
        sliderContent.style.transform = "translateX(-25%)";
        console.log(sliderContent.style.transform)
        footer.style.marginBottom = "0"

        numberSlide.style.transform = "translateY(-25%)"
        
    }
    else if(index == 2){
        sliderContent.style.transform = "translateX(-50%)";
        console.log(sliderContent.style.transform)
        footer.style.marginBottom = "0"
        
        numberSlide.style.transform = "translateY(-50%)"
    }
    else if(index == 3){
        sliderContent.style.transform = "translateX(-75%)";
        console.log(sliderContent.style.transform)

        //adding animation in slider4 
        animation1.classList.add('animation--1')
        animation2.classList.add('animation--2')

        //going down the footer 
        footer.style.marginBottom = "-20rem"
 
        numberSlide.style.transform = "translateY(-75%)"
       
    }
    else{
        sliderContent.style.transform = "translateX(0)";
        console.log(sliderContent.style.transform)
        footer.style.marginBottom = "0"
       
    }
}



function gridRow(index){
  
    const gridValue0 = window.getComputedStyle(textList[0]).getPropertyValue('grid-row');
    const gridValue1 = window.getComputedStyle(textList[1]).getPropertyValue('grid-row');
    const gridValue2 = window.getComputedStyle(textList[2]).getPropertyValue('grid-row');
    const gridValue3 = window.getComputedStyle(textList[3]).getPropertyValue('grid-row');

    if(gridValue0 == "1 / 2"){
          transtaleOpacityGrid(index, 0)
    }
    else if(gridValue1 == "1 / 2"){
          transtaleOpacityGrid(index, 1)
    }
    else if(gridValue2 == "1 / 2"){
          transtaleOpacityGrid(index, 2)
    }
    else if(gridValue3 == "1 / 2"){
      transtaleOpacityGrid(index, 3)
    }else{
        console.log("error logic")
    }
}

function transtaleOpacityGrid(indexOnIndicator, indexGrid){
    const gridValue = window.getComputedStyle(textList[indexOnIndicator]).getPropertyValue('grid-row');


    const transformValue = window.getComputedStyle(textList[indexOnIndicator]).getPropertyValue('transform');
    const opacityValue = window.getComputedStyle(textList[indexOnIndicator]).getPropertyValue('opacity');

    
     textList[indexOnIndicator].style.gridRow = "1 / 2"
       textList[indexGrid].style.gridRow = gridValue
    
    textList[indexOnIndicator].style.transform = "scale(1)"
      textList[indexGrid].style.transform = transformValue

      textList[indexOnIndicator].style.opacity = "1"
      textList[indexGrid].style.opacity = opacityValue
}



//=============== navigation tab menu start here=====================

homeNavigationTab.forEach((eachTab) => {
    eachTab.addEventListener("click", function(event){
          
        const tabIndex = Array.from(homeNavigationTab).indexOf(event.target)

        activeTab(tabIndex)
        console.log(tabIndex)
    })
})


function activeTab(index){
    homeNavigationTab.forEach((eachTab) =>{
        eachTab.classList.remove('activeTab')
    })
    homeNavigationTab[index].classList.add('activeTab')
}
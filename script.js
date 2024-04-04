accesskey='7xyOI4Lf_W8HrqB6ilD7vLV5dKiPQwT8_bC5VoUTyJM'
searchform=document.getElementById('two')
searchInput=document.getElementById("one")
searchImage=document.getElementById("three")
showmore=document.querySelector("#showmore")
// initializing page = 1
page=1

// h22=document.getElementById("h22")


// function blink()
// {
       
// x1=parseInt(Math.random()*255)
// x2=parseInt(Math.random()*255)
// x3=parseInt(Math.random()*255)
//        if(h22.style.visibility!="hidden")
//        {
//               h22.style.visibility="hidden"
//        }
//        else
//        {
//               h22.style.color=`rgb(${x1},${x2},${x3})`
//               h22.style.visibility="visible"
//        }
// }


// setInterval(blink,500)
// FUNCTION TO FETCH IMAGE USING UNSPLASH API
async function fetchImages(query)
{
       if(page==1)
       {
              searchImage.innerHTML = ''
       }
       
       url = `https://api.unsplash.com/search/photos?query=${query}&page=${page}&client_id=${accesskey}`
       
       response = await fetch(url)
       data = await response.json()
       results=data.results
       console.log(results.length)
       console.log(page)
       if(results.length>0)
       {
              results.forEach(photo => {
                     imageElement=document.createElement('div')
                     imageElement.classList.add('imgDiv')
                     
                     imageElement.innerHTML = `<img src="${photo.urls.regular}"/>`
              // creating overlay element
                     overlayElement = document.createElement('div')
                     overlayElement.classList.add('overlay')
              // creating overlay text
                     overlayText = document.createElement('h4')
                     overlayText.innerText = `${photo.alt_description}`
       
                     overlayElement.appendChild(overlayText)
                     imageElement.appendChild(overlayElement)
                     searchImage.appendChild(imageElement)   
              });
              page++
              if(page>1)
              {
                     showmore.style.display="block"
              }
       }
       else
              {
                     alert("Image not found")
              }
}
// ADDING ADDEVENTLISTENER TO SEARCH BUTTON
searchform.addEventListener('submit', (e) => {
       e.preventDefault()      
       input = searchInput.value
       if(input.length==0)
       {
              alert("Please enter something")
       }
       else if (!isNaN(input)) {
              alert("please enter correct value")
       } 
       // for(i=0;i<input.length;i++)
       // {
       //        input1=input[i].keycode
       //                      if(!(input1>=97 && input1<=122))
       //                      {
       //                      // searchImage.innerHTML="<h2>please enter correct value</h2>"
       //                      alert('Only Alphabets are allowed')
       //                      return false
       //                      }
       // }
       page=1
       fetchImages(input)       
})
// Adding addeventlistener to show more button
showmore.addEventListener("click",()=>{
  fetchImages()     
})
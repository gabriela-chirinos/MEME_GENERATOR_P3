
document.addEventListener('DOMContentLoaded', (event) => {

// Creating the Elements: 
const memeContainer = document.getElementById('container');


//Image
const memeImage = document.getElementById('meme_image'); 



//URL
const urlInput = document.getElementById('image_url');


// TOP TEXT

const topTextInput = document.getElementById('top_text');

//BOTTOM TEXT

const bottomTextInput = document.getElementById('bottom_text');


// Dynamically creatting P elemets  for text 

const topTextOverlay = document.createElement('p');
topTextOverlay.classList.add('topTextOverlay'); 

const bottomTextOverlay = document.createElement('p');
bottomTextOverlay.classList.add('bottomTextOverlay');



//Image container

const imageContainer = document.getElementById('imageContainer');


//form

const memeForm = document.getElementById('meme_form');


// Error message

const errorElement = document.getElementsByClassName('error');


//append container

imageContainer.appendChild(memeImage);

 // Append the text elements to the image container
 imageContainer.appendChild(topTextOverlay);
 imageContainer.appendChild(bottomTextOverlay);


// Local Storage - Not clearing

let storedURL = sessionStorage.getItem('image_url');

if (storedURL) {
  memeImage.src = storedURL;
  imageContainer.appendChild(memeImage); // Append the image if it was stored
}



//Click event
const generateButton = document.getElementById('generate_button');
generateButton.addEventListener('click',generateMeme);





// Generate meme

function generateMeme() {

      let imageURL = urlInput.value;
    
      memeImage.src = imageURL;
      
       // Store the image URL in session storage
      sessionStorage.setItem('image_url', imageURL); 

      //append image to container
      imageContainer.appendChild(memeImage);

      memeImage.onload = () => {

        const topText = topTextInput.value;
        const bottomText = bottomTextInput.value;

        topTextOverlay.textContent = topText;
        bottomTextOverlay.textContent = bottomText;
       
        checkAndDisplayText();

      }


    


  memeForm.addEventListener('submit', (e) =>  {
    e.preventDefault(); // Prevent submission 
  
    // Trim off white space
    const imageURL = urlInput.value.trim(); 
    const topText = topTextInput.value.trim();
    const bottomText = bottomTextInput.value.trim();



   // Check URL Field

   if(!imageURL){
    errorElement[0].textContent = 'Please enter a valid url: ';
    return;
   }

   // Check if URL is valid

   const isValid = imageURL.match(/\.(jpeg|jpg|png)$/) != null;

   if(!isValid){
   errorElement[0].textContent = 'Please enter a valid image URL ending with .jpg or .png';
    return;
   }

   // CHeck if all fields are empty 

   if(!imageURL && !topText && !bottomText){
    errorElement.textContent = 'Please fill out at least one field. ';
    return;
   }

   // Check URL field is not empty when text field has content. 

   if (!imageURL &&( topText || bottomText)){
    errorElement[0].textContent = 'Please enter an image URL.';
    return;
   }
   
    generateMeme();
  });


}

})

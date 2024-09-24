
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




//append container

imageContainer.appendChild(memeImage);

 // Append the text elements to the image container



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


        imageContainer.appendChild(topTextOverlay);
        imageContainer.appendChild(bottomTextOverlay);


      }

  

  memeImage.onerror = () => {
      alert('Failed to load image. Please check the URL. ');

      // adding text to image

    };
  };

})








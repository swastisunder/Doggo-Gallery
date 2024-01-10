// Select elements
let btn = document.querySelector("button");
let imgElement = document.querySelector("img");

// Event listener for button click
btn.addEventListener("click", async () => {
  let imgSrc = await getRandomImage();
  imgElement.setAttribute("src", imgSrc);
});

// Function to fetch a random dog image
async function getRandomImage() {
  // API endpoint for random dog images
  let url = "https://dog.ceo/api/breeds/image/random";
  try {
    // Use Axios library to make a GET request to the API
    let res = await axios.get(url);
    return res.data.message;
  } catch {
    return "img not found";
  }
}

// DOM elements
const userInput = document.getElementById('user-input')
const searchBtn = document.getElementById('search-btn')
const gifImage = document.getElementById('gif-img')
const spicyContent = document.getElementById('spicy-content')
// API key
const GIPHY_API_KEY = 'VxgXGFxf3LXnKo0ttjPR64NbwzaY79Ue'

// Event Listeners
searchBtn.addEventListener('click', renderResults)

// Functions
function renderResults() {
  GenGif()
  userInput.setAttribute('placeholder', userInput.value)

}

function GenGif() {
  const url = getUrl()
  fetch(url)
  .then((response) => response.json())
  .then(data => {
    gifImage.setAttribute('src', data.data.images.fixed_height.url)
  })

}

function getUrl() {
  const searchTerm = getInputFormat()
  let url = `https://api.giphy.com/v1/gifs/random?api_key=${GIPHY_API_KEY}&tag=${searchTerm}&rating=`
  if (spicyContent.checked) {
    return url += 'r'
  } else {
    return url += 'pg'
  }
}

function getInputFormat() {
  const inputFormat = userInput.value
  return inputFormat.split(' ').join('+')

}

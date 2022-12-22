const apiKey = 'RLQoFNqg08i7LbhPJcyhceuDiw2QSz_3JW_ltrpmNuNIf-909lXhDjcfL9ZqHvEklMaZG55wnANC3obUIQwcqpYGSuqsy7WbfpbEVMrqaoAguBq5PhdPUDjQg92bY3Yx';
const latitude = 37.4224764;
const longitude = -122.0842499;
const searchTerm = 'restaurants';

// Make a request to the Yelp API
async function searchYelp() {
  const response = await fetch(
    `https://api.yelp.com/v3/businesses/search?term=${searchTerm}&latitude=${latitude}&longitude=${longitude}`,
    {
      headers: {
        Authorization: `Bearer RLQoFNqg08i7LbhPJcyhceuDiw2QSz_3JW_ltrpmNuNIf-909lXhDjcfL9ZqHvEklMaZG55wnANC3obUIQwcqpYGSuqsy7WbfpbEVMrqaoAguBq5PhdPUDjQg92bY3Yx`
      }
    }
  );
  const data = await response.json();
  // Use the data to display the restaurants to the user
  console.log(data);
}

// Add an event listener to the park name element
document.getElementById('statePark').addEventListener('click', searchYelp);

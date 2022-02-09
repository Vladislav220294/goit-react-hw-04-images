export default async function Fetch(inputalue, page) {
  try {
    const response = await fetch(
      `https://pixabay.com/api/?q=${inputalue}&page=${page}&key=25284590-6d373146c28d5b297cc6c7db9&image_type=photo&orientation=horizontal&per_page=12`,
    );
    const data = await response.json();
    const images = data.hits;
    return images;
  } catch (error) {
    console.log(error);
  }
}

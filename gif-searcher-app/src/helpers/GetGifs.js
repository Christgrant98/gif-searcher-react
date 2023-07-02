


export const getGifs = async(category) => {

  const url = `api.giphy.com/v1/gifs/search?api_key=uKE5o7ZsxeAPKOaBV2UUVDwD9pQn71z5&q=demon-slayer=${category}&limit=20`
  const response = await fetch(url);
  const { data } = await response.json;

  const gifs = data.map( img => ({
   id: img.id,
   title: img.title,
   url: img.images.downsized_medium.url

  }));


  return gifs;
 }
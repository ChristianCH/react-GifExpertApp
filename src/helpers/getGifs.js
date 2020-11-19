


export const getGifs = async( category ) => {
    
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=Yl7qKYGMivx36GOZvqzw43FjTFkgn29S`;
    const resp = await fetch( url );
    const { data } = await resp.json();
    
    console.log(url);
    
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;

}

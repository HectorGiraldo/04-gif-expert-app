

 export const getGifs = async ( cat ) => {

    const apiKey ='lecupD47I3UcIsjpbpcWvRg9JmXdgmsk';

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( cat )}&limit=10&api_key=${apiKey}`;
    const resp = await fetch( url );
    const {data} = await resp.json();
    const gifs = data.map( img => {

        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return(gifs);
}
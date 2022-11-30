var url_string =window.location.href;
const baseurl ="https://61924d4daeab5c0017105f1a.mockapi.io/credo/v1";

var url = new URL(url_string);
const get_Id =() =>{
    return url.searchParams.get('id');
 
}
const getSingleNews = async (id)=>{
    try{
        const response = await fetch(`${baseurl}/news/${id}`);
        const newsData = await response.json();
        displayNewsDetails(newsData);
    }
    catch(error){
        console.log(error);
    }
};

const displayNewsDetails = (data) =>{
    var title = document.getElementById('title');
    var url = document.getElementById('url');
    var author = document.getElementById('author');
    var image = document.getElementById('image')

    title.innerText = data.title;
    author.innerHTML = data.author;
    url.innerHTML = data.url;
    image.src = data.avatar;
}


window.onload = getSingleNews(get_Id());
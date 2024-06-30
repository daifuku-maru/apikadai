
function display(comic){

   const title = comic.volumeInfo.title;
   const authors = comic.volumeInfo.authors;
   const thumbnail = comic.volumeInfo.imageLinks.smallThumbnail;
   const manga = `<div class="manga">
     <img src="${thumbnail}" alt="${title}">
     <div>
       <p class="title">${title}</p>
       <p class="authors">${authors}</p>
     </div>
   </div>`;
   $("#result").append(manga);
}

function searchbook(){
    const imput = $("#keyword").val();
    const subject = 'comics+graphic+novels';
//    const country = jp
    const requestUrl = `https://www.googleapis.com/books/v1/volumes?q=${imput}+subject:${encodeURIComponent(subject)}`;
    $.getJSON(requestUrl, function(data){
        console.log(data)
    data.items.forEach(function(comic){
        display(comic);
    });
    });
}

$("#btn").on("click", searchbook);








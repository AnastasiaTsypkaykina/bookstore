function getTemplateBookCard(index) {
  return `<h1 id="book-title" class="card-title">${books[index].name}</h1>
            <img class="card-img-top" src="./img/book.svg" alt="Card image cap" />
            <p id="book-price">${books[index].price
              .toString()
              .replace(".", ",")} Euro</p>            
            <p>Author: 
                <span id="book-author">${books[index].author}</span>
            </p>            
               <p>Erscheinungsjahr: 
                <span id="book-year">${books[index].publishedYear}</span>
            </p>           
               <p>Genre: 
                <span id="book-genre">${books[index].genre}</span>
            </p> 
            <hr class=solid>
            <p id="comments">Kommentare: </p>
          `;
}

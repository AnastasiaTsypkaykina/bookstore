function init() {
    showBooks();
}
 function showBooks() {
    let bookTitle = document.getElementById("book-title");
    let bookPrice=document.getElementById("book-price");
    let bookYear = document.getElementById("book-year");
    let bookGenre = document.getElementById("book-genre");
    let bookAuthor = document.getElementById("book-author");
    for (let index=0; index<books.length; index++) {
        bookTitle.innerHTML=books[index].name;
        bookPrice.innerHTML=books[index].price;
        bookYear.innerHTML=books[index].publishedYear;
        bookGenre.innerHTML=books[index].genre;
        bookAuthor.innerHTML=books[index].author;
    }   
 }
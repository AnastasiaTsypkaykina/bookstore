function init() {
  getAllFromLocalStorage();
  render();
}

function render() {
  let contentCard = document.getElementById("card-content");
  contentCard.innerHTML = "";
  for (let index = 0; index < books.length; index++) {    
    let hearts = showRightLike(index);
    let favorit = showRightFav (index);
    contentCard.innerHTML +=  getTemplateBookCard(index, hearts.redHeart, hearts.emptyHeart, favorit.fullFavIcon, favorit.emptyFavIcon);
    let tableRef = document.getElementById("comment-table" + index);
    for (
      let indexComments = 0;
      indexComments < books[index].comments.length;
      indexComments++
    ) {
      let commentName = books[index].comments[indexComments];
      tableRef.innerHTML += commentsAndNamesTemplate(commentName);
    }
  }
}

function addComment(indexBooks) {
  let input = document.getElementById(`comment-input${indexBooks}`);
  let commentText = input.value;
  books[indexBooks].comments.push({
    name: "User123",
    comment: commentText,
  });
  saveAllToLocalStorage();
  let tbodyRef = document.getElementById(`comment-table${indexBooks}`);
  tbodyRef.innerHTML += `<tr><td>User123: </td><td>${commentText}</td></tr>`;
  input.value = "";
}

function showRightLike(indexBooks) {
  if (books[indexBooks].liked === true) {
    return { redHeart: "", emptyHeart: " d_none" };
  } else {
    return { redHeart: " d_none", emptyHeart: "" };
  }
}
function showRightFav(indexBooks) {
  if (books[indexBooks].favorit === true) {
    return { fullFavIcon: "", emptyFavIcon: " d_none" };
  } else {
    return { fullFavIcon: " d_none", emptyFavIcon: "" };
  }
}

function changeLiked(indexBooks) {  
  if (books[indexBooks].liked === true) {   
    books[indexBooks].liked = false;
    minusLike(indexBooks);
    emptyHeart(indexBooks);    
  } else {
    books[indexBooks].liked = true;
    plusLike(indexBooks);
    redHeart(indexBooks);
  }
  saveAllToLocalStorage();   
}

function changeFavorit(indexBooks) {  
  if (books[indexBooks].favorit === true) {   
    books[indexBooks].favorit = false;    
    emptyFavIcon(indexBooks);
    saveAllToLocalStorage();
    deleteFavorit(indexBooks);       
  } else {
    books[indexBooks].favorit = true;    
    fullFavIcon(indexBooks);
    favoritBooks.push(books[indexBooks]);
    saveAllToLocalStorage(); 
  }   
}

function deleteFavorit(indexBooks) {
  favoritBooks.splice(indexBooks, 1);
}

function emptyHeart(indexBooks) {
  let red = document.getElementById("red-heart-img" + indexBooks);
  let empty = document.getElementById("empty-heart-img" + indexBooks);
  red.classList.add("d_none");
  empty.classList.remove("d_none");  
  saveAllToLocalStorage();
}

function redHeart(indexBooks) {
  let empty = document.getElementById("empty-heart-img" + indexBooks);
  let red = document.getElementById("red-heart-img" + indexBooks);
  empty.classList.add("d_none");
  red.classList.remove("d_none"); 
  saveAllToLocalStorage(); 
}

function emptyFavIcon(indexBooks) {
  let full = document.getElementById("full-fav-icon" + indexBooks);
  let emptyFav = document.getElementById("empty-fav-icon" + indexBooks);
  full.classList.add("d_none");
  emptyFav.classList.remove("d_none");  
  saveAllToLocalStorage();
}

function fullFavIcon(indexBooks) {
  let full = document.getElementById("full-fav-icon" + indexBooks);
  let emptyFav = document.getElementById("empty-fav-icon" + indexBooks);
  emptyFav.classList.add("d_none");
  full.classList.remove("d_none"); 
  saveAllToLocalStorage(); 
}

function plusLike(indexBooks) {
  books[indexBooks].likes += 1;
  let likesRef = document.getElementById("likes" + indexBooks);
  likesRef.innerText = books[indexBooks].likes;
}

function minusLike(indexBooks) {
  books[indexBooks].likes -= 1;
  let likesRef = document.getElementById("likes" + indexBooks);
  likesRef.innerText = books[indexBooks].likes;
}

function saveAllToLocalStorage() {
  localStorage.setItem("allBooks", JSON.stringify(books));
  localStorage.setItem("allFavBooks", JSON.stringify(favoritBooks));
}

function getAllFromLocalStorage() {
  let storedBooks = localStorage.getItem("allBooks");
  let favStoredBooks = localStorage.getItem("favBooks");
  if (storedBooks) {
    books = JSON.parse(storedBooks);
  }
  if (favStoredBooks) {
    favoritBooks = JSON.parse(favStoredBooks);
  }
}

function renderFavorites() {
  getAllFromLocalStorage();
  let contentCard = document.getElementById("card-content");
  contentCard.innerHTML = "";
  for (let index = 0; index < favoritBooks.length; index++) {   
    let ind = favoritBooks[index].number; 
    let hearts = showRightLike(ind);
    let favorit = showRightFav (ind);
    contentCard.innerHTML +=  getTemplateBookCard(ind, hearts.redHeart, hearts.emptyHeart, favorit.fullFavIcon, favorit.emptyFavIcon);
    let tableRef = document.getElementById("comment-table" + ind);
    for (
      let indexComments = 0;
      indexComments < favoritBooks[index].comments.length;
      indexComments++
    ) {
      let commentName = favoritBooks[index].comments[indexComments];
      tableRef.innerHTML += commentsAndNamesTemplate(commentName);
    }
  }
}


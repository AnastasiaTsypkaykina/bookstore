function init() {
  getAllFromLocalStorage();
  render("all");
}

function render(category) {
  let contentCard = document.getElementById("card-content"); 
  contentCard.innerHTML = "";
  for (let index = 0; index < books.length; index++) {
    if (category === "all") {
      showContent(index);
      renderComments(books[index], index);
    } else if (category === `fav` && books[index].favorit) {
      let ind = books[index].number;
      showContent(ind);      
      renderComments(books[ind], ind);
    }
  }
}

function showContent(index) {
  let contentCard = document.getElementById("card-content");  
  let hearts = showRightLike(index);
  let favorit = showRightFav(index);
  contentCard.innerHTML += getTemplateBookCard(
    index,
    hearts.redHeart,
    hearts.emptyHeart,
    favorit.fullFavIcon,
    favorit.emptyFavIcon
  );
}

function renderComments(book, i) {
  let tableRef = document.getElementById("comment-table" + i);
  for (
    let indexComments = 0;
    indexComments < book.comments.length;
    indexComments++
  ) {
    let commentName = book.comments[indexComments];
    tableRef.innerHTML += commentsAndNamesTemplate(commentName);
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
  tbodyRef.innerHTML += `<tr class="comments-content"><td class="comment-name">User123:  </td><td class="comment-text">${commentText}</td></tr>`;
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
    setEmptyHeart(indexBooks);
  } else {
    books[indexBooks].liked = true;
    plusLike(indexBooks);
    setRedHeart(indexBooks);
  }
  saveAllToLocalStorage();
}

function changeFavorit(indexBooks) {
  if (books[indexBooks].favorit === true) {
    books[indexBooks].favorit = false;
    setEmptyFavIcon(indexBooks);
  } else {
    books[indexBooks].favorit = true;
    setFullFavIcon(indexBooks);
  }
  saveAllToLocalStorage();
}

function setEmptyHeart(indexBooks) {
  let red = document.getElementById("red-heart-img" + indexBooks);
  let empty = document.getElementById("empty-heart-img" + indexBooks);
  red.classList.add("d_none");
  empty.classList.remove("d_none");
  saveAllToLocalStorage();
}

function setRedHeart(indexBooks) {
  let empty = document.getElementById("empty-heart-img" + indexBooks);
  let red = document.getElementById("red-heart-img" + indexBooks);
  empty.classList.add("d_none");
  red.classList.remove("d_none");
  saveAllToLocalStorage();
}

function setEmptyFavIcon(indexBooks) {
  let full = document.getElementById("full-fav-icon" + indexBooks);
  let emptyFav = document.getElementById("empty-fav-icon" + indexBooks);
  full.classList.add("d_none");
  emptyFav.classList.remove("d_none");
  saveAllToLocalStorage();
}

function setFullFavIcon(indexBooks) {
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
}

function getAllFromLocalStorage() {
  let storedBooks = localStorage.getItem("allBooks");
  if (storedBooks) {
    books = JSON.parse(storedBooks);
  }
}
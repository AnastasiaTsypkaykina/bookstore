function getTemplateBookCard(index, redHeart, emptyHeart, fullFavIcon, emptyFavIcon) {
  return `
  <div class="container">
      <div class="card" style="width: 30rem">
        <div class="card-body">
      
          <h1 id="book-title" class="card-title">${books[index].name}</h1>
            <img class="card-img-top cover-img" src=${
              books[index].link
            } alt="Card image cap" />
            <div class="price_and_likes">
              <span class="book-properties">${books[index].price
                .toString()
                .replace(".", ",")} Euro</span>
             <div class="likes_and_heart">
                <p id="likes${index}" class="likes properties-content">${
                books[index].likes
                    }</p> 
                <button onclick="changeLiked(${index})" class="heart_button">
                <img
                class="red_heart_img${redHeart} like-heart"
                id="red-heart-img${index}"
                src="./img/heart_filled.png"
                
                />
                <img
                class="empty_heart_img${emptyHeart} like-heart"
                id="empty-heart-img${index}"
                src="./img/heart.png"
                
              />
              <button onclick="changeFavorit(${index})" class="favorit_button">
                <img
                class="fav_icon_img${fullFavIcon} fav_icon"
                id="full-fav-icon${index}"
                src="./img/fav_icon_full.svg"
                
                />
                <img
                class="empty_fav_img${emptyFavIcon} fav_icon"
                id="empty-fav-icon${index}"
                src="./img/fav_icon_empty.svg"
                
              />
            </div>  
          </div>           
            <p class="book-properties">Author: 
                <span class="properties-content" id="book-author">${
                  books[index].author
                }</span>
            </p>            
               <p class="book-properties">Erscheinungsjahr: 
                <span class="properties-content" id="book-year">${
                  books[index].publishedYear
                }</span>
            </p>           
               <p class="book-properties">Genre: 
                <span class="properties-content" id="book-genre">${
                  books[index].genre
                }</span>
            </p> 
            <hr class=solid>
           <div class="comment_container">
           <span class="book-properties">Kommentare: </span>
                  <table  >
                    <tbody id="comment-table${index}" ></tbody>
                  </table>
                </div>
                <div class="comment-input">
                  <input class="input-comment" id="comment-input${index}" type="text" placeholder="Schreibe einen Kommentar"/>
                  <button onclick="addComment(${index})" >Send  </button>
              </div>
            </div>
                        
        </div>
      </div>
    </div>
          `;
}
function commentsAndNamesTemplate(commentName) {
  return `
            <tr class="comments-content"> 
              <td class="comment-name">${commentName.name}:</td>
              <td class = "comment-text">${commentName.comment}</td>
            </tr>
          `;
}

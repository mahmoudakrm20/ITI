var xhr = new XMLHttpRequest();
var loader = document.querySelector(".loader");
var postsContainer = document.getElementById("posts-container");
xhr.open('GET',"https://jsonplaceholder.typicode.com/posts")
xhr.send()
xhr.addEventListener('readystatechange',function(){
      if ( xhr.readyState==4 && xhr.status === 200 ){
    loader.style.display = "block";
    postsArray = JSON.parse(xhr.response);
    console.log(postsArray)
    setTimeout(function(){
    loader.style.display = "none";
    displayPosts(postsArray)
    }, 4000);
}
    if(xhr.status == 404){
    console.log("error 404 not found" , xhr.statusText);
    }
})
function displayPosts(posts) {
    posts.forEach(function (post) {
        var postElement = document.createElement('div');
        postElement.classList.add('post');

        var postTitle = document.createElement('h2');
        postTitle.classList.add('post-title');
        postTitle.textContent = post.title;

        var postBody = document.createElement('p');
        postBody.textContent = post.body;

        postElement.appendChild(postTitle);
        postElement.appendChild(postBody);
        postsContainer.appendChild(postElement);
    });
}
let userTabs = document.getElementById('userTabs');
let postsContent = document.getElementById('postsContent');

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    users.forEach(user => {
      let tab = document.createElement('li');
      tab.textContent = user.name;
      userTabs.appendChild(tab);
      tab.addEventListener('click', () => {
        // active class 
        let currentActive = document.querySelector('.active');
        tab.classList.add('active');
        if (currentActive) {
          currentActive.classList.remove('active');
        }
        loadUserPosts(user.id);
      });
    });
  })
  .catch(error => console.log('Error fetching users:', error));

async function loadUserPosts(userId) {
  try {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    let posts = await response.json();
    postsContent.innerHTML = '';

    posts.forEach(post => {
      let postDiv = document.createElement('div');
      postDiv.textContent = post.title;
      postsContent.appendChild(postDiv);
    });

  } catch (error) {
    console.log('Error fetching posts:', error);
    postsContent.textContent = 'Error loading posts.';
  }
}

loadUserPosts(1);

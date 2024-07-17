$(document).ready(function() {
  let userTabs = $('#userTabs');
  let postsContent = $('#postsContent');


  function fetchUsers() {
    let fetchPromise = new Promise(function(resolve, reject) {
      $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users',
        method: 'GET',
        beforeSend: function() {
          console.log('Loading users...');
        },
        success: function(users) {
          resolve(users);
        },
        error: function(error) {
          reject('Error fetching users'+error); 
        }
      });
    });

    fetchPromise.then(function(users) {
      users.forEach(user => {
        let tab = $('<li></li>').text(user.name).data('userid', user.id);
        userTabs.append(tab);
      });
    })
  }


  function fetchPosts(userId) {
    let promise = new Promise(function(resolve, reject) {
      $.ajax({
        url: `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
        method: 'GET',
        beforeSend: function() {
          console.log('Loading posts...');
          postsContent.html('Loading posts...');
        },
        success: function(posts) {
          resolve(posts); 
        },
        error: function(error) {
          reject('Error fetching posts'+error); 
        }
      });
    });

    promise.then(function(posts) {
      postsContent.html('');
      if (posts.length === 0) {
        postsContent.html('No posts found.');
      } else {
        posts.forEach(post => {
          let postDiv = $('<div></div>').text(post.title);
          postsContent.append(postDiv);
        });
      }
    })
  }

  userTabs.on('click', 'li', function() {
    let userId = $(this).data('userid');
    fetchPosts(userId);
  });

  fetchUsers();

  fetchPosts(1);
});

// Follow / Unfollow
const followButton = document.querySelector('.button-follow');

followButton.addEventListener('click', function() {
  followButton.classList.toggle("active");
  if (followButton.classList.contains("active")) {
    followButton.textContent = 'Unfollow';
  } else {
    followButton.textContent = 'Follow';
  }
});

// Add a new story
document.addEventListener('DOMContentLoaded', function() {
  const addStoryButton = document.querySelector('.add-story');

  addStoryButton.addEventListener('click', function() {
    const allStories = document.querySelector('.main__stories');
    const newStory = document.createElement('img');
    newStory.classList.add('main__story-image');
    newStory.src = 'img/new-story-img.jpg';
    allStories.appendChild(newStory);
  })
})

// Log In User
function login() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if (username === '' || password === '') {
    alert('Please enter both username and password.');
    return;
  }

  if (username === 'admin' && password === 'password') {
    window.location.href = 'feed.html';
  } else {
    alert('Incorrect username or password. Please try again.');
  }
}


// Like a post
function like() {
  const likeIcon = document.querySelector(".icon-like");
  const likesNum = document.querySelector('.footer__likes');
  let likesCount = parseInt(likesNum.textContent); 

    likeIcon.classList.toggle("active"); 

    if(likeIcon.classList.contains('active')) {
      likesCount++;
    } else {
      likesCount--;
    }

    likesNum.innerHTML = likesCount + ' likes';
}

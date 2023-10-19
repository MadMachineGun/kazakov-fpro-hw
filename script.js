'use strict';

let postFetched = false;
let commentsFetched = false;
const postIdInput = document.getElementById('postId');

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const postId = postIdInput.value;
    if (postId >= 1 && postId <= 100) {
        if (!postFetched) {
            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Post not found');
                    }
                    return response.json();
                })
                .then(post => {
                    const postInfo = document.getElementById('postInfo');
                    postInfo.innerHTML = `
                        <h2>Post #${post.id}</h2>
                        <h3>${post.title}</h3>
                        <p>${post.body}</p>
                    `;
                    postFetched = true;
                    commentsFetched = false;


                    document.getElementById('getComments').style.display = 'block';
                })
                .catch(error => {
                    console.error('Error fetching post:', error);
                });
        } else {
            alert('Post has already been fetched. Click "Get Comments" to see the comments.');
        }
    } else {
        alert('Please enter a valid ID in the range from 1 to 100.');
    }
});

document.getElementById('getComments').addEventListener('click', () => {
    if (postFetched) {
        if (!commentsFetched) {
            fetch(`https://jsonplaceholder.typicode.com/posts/${postIdInput.value}/comments`)
                .then(response => response.json())
                .then(comments => {
                    displayComments(comments);
                })
                .catch(error => {
                    console.error('Error fetching comments:', error);
                });
            commentsFetched = true;
        } else {
            alert('Comments have already been received for this post! Reload page!');
        }
    }
});
document.getElementById('reloadPage').addEventListener('click', function() {
    location.reload();
});

function displayComments(comments) {
    const commentsList = comments.map(comment => `
        <h4>${comment.name}</h4>
        <p>${comment.body}</p>
    `).join('<hr>');
    const postInfo = document.getElementById('postInfo');
    postInfo.innerHTML += `<h2>Comments:</h2>${commentsList}`;
}

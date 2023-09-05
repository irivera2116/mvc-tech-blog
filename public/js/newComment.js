const newCommentFormHandler = async (event) => {
    event.preventDefault();

    const post_id = parseInt(window.location.toString().split('/').pop());
    const content = document.querySelector('#comment-content').value.trim();

    if (content) {
        const response = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({ post_id, content }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to create comment.');
        }
    }
};

const newCommentForm = document.querySelector('#new-comment-form');
if (newCommentForm) {
    newCommentForm.addEventListener('submit', newCommentFormHandler);
};

const deletePost = async (post_id) => {
    const response = await fetch(`/api/posts/${post_id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (response.ok) {
        document.location.replace("/dashboard");
    } else {
        alert("Failed to delete post");
    }
};

const deletePostHandler = (event) => {
    if(event.target.matcher('.delete-post-id')) {
        const post_id = event.target.getAttribute('data-id')
        deletePost(post_id);
    }
};

document.addEventListener("click", deletePostHandler);

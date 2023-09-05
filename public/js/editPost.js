const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
];

const editPostHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector("#post-title").value.trim();
    const content = document.querySelector("#post-content").value.trim();

    if (title && content) {
        const response = await fetch(`/api/posts/${post_id}`, {
            method: "PUT",
            body: JSON.stringify({ title, content }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.ok) { 
            document.location.replace("/dashboard");
        } else {
            alert("Failed to edit post");
        } 
    }
};

const deletePostFormHandler = async (event) => {
    event.preventDefault();

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

const updatePostButton = document.querySelector("#update-post");
const deletePostButton = document.querySelector("#delete-post");

if(updatePostButton) updatePostButton.addEventListener("click", editPostHandler);
if(deletePostButton) deletePostButton.addEventListener("click", deletePostFormHandler);

let posts=[];

function addPost(){

    let title=document.getElementById("title").value;
    let content=document.getElementById("content").value;

    if(title==="" || content===""){
        alert("Fill all fields");
        return;
    }

    posts.push({
        title,
        content,
        comments:[]
    });

    displayPosts();

    document.getElementById("title").value="";
    document.getElementById("content").value="";
}

function addComment(index){

    let comment=prompt("Enter Comment");

    if(comment){
        posts[index].comments.push(comment);
        displayPosts();
    }
}

function deletePost(index){
    posts.splice(index,1);
    displayPosts();
}

function displayPosts(){

    let container=document.getElementById("posts");

    container.innerHTML="";

    posts.forEach((post,index)=>{

        let commentsHTML="";

        post.comments.forEach(comment=>{
            commentsHTML+=`<p class="comment">💬 ${comment}</p>`;
        });

        container.innerHTML+=`
        <div class="post">
            <h2>${post.title}</h2>
            <p>${post.content}</p>

            <button onclick="addComment(${index})">
                Add Comment
            </button>

            <button onclick="deletePost(${index})">
                Delete
            </button>

            ${commentsHTML}
        </div>
        `;
    });
}

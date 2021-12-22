var posts=[
    {
         "blogId":"3211",
         "likes":"5",
         "title":"Dummy blog 1",
         "category":"technology",
         "imgLink":"https://media.istockphoto.com/photos/technology-abstract-picture-id1148091793?k=20&m=1148091793&s=612x612&w=0&h=yunVTPC-vyrQ4VBCOrUYkYytQKtWM7zYj3KxsLwPHto=",
         "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh. Morbi in leo in eros commodo volutpat ac sed dolor." 
    },
    {
        "blogId":"122",
         "likes":"15",
        "title":"Dummy blog 2",
         "category":"art",
         "imgLink":"https://mymodernmet.com/wp/wp-content/uploads/2019/03/elements-of-art-6.jpg",
         "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh. Morbi in leo in eros commodo volutpat ac sed dolor."  
    },
    {
        "blogId":"21312",
         "likes":"56",
        "title":"Dummy blog 1",
         "category":"science",
         "imgLink":"https://images.pexels.com/photos/1456268/pexels-photo-1456268.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
         "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh. Morbi in leo in eros commodo volutpat ac sed dolor." 
    }
];

function displayModal(){
    document.getElementById("addPostModal").style.display="block";
};


function closeModal(){
    document.getElementById("addPostModal").style.display="none";
}


function addPost(){
    var title = document.getElementById("blogTitle").value;
    var category = document.getElementById("blogCategory").value;
    var imgLink = document.getElementById("blockImageLink").value;
    var content = document.getElementById("blogContent").value;
    var blogId = Math.round(Math.random() * 1000);
    var likes=0;
    var singlePost = { "title":title, "category":category,"imgLink":imgLink,"content":content,
                    "blogId":blogId, "likes":likes};
    posts.push(singlePost);
    clearAllFields();
    document.getElementById("addPostModal").style.display="none";
    AddCard();
}

function clearAllFields(){
    document.getElementById("blogTitle").value="";
    document.getElementById("blogCategory").value="";
    document.getElementById("blockImageLink").value="";
    document.getElementById("blogContent").value="";
}

function AddCard(){
    var i=posts.length-1;

    var cardHtml= "<div id=\""+posts[i]['blogId']+"\" class=\"card d-flex position-relative flex-column\">"+
    "<div class='imgContainer'> <img src='"+posts[i]['imgLink']+"'> </div>"+
    "<div class=\"content\">"+
    " <h2>"+posts[i]['title']+"</h2>"+
    " <h7 class=\"blogId\">Blog ID: "+posts[i]['blogId']+"</h7>"+
    " <h7>Category: "+posts[i]['category']+" likes: "+posts[i]['likes']+"</h7>"+
        "<p>"+posts[i]['content']+"</p>"+
    "</div>"+
    "</div>";

    var element = document.getElementById("blogCards")
    element.innerHTML = element.innerHTML + cardHtml;
}

function loadCards(){
    for(var i=0;i<posts.length;i++){
       
        var cardHtml= "<div id=\""+posts[i]['blogId']+"\" class=\"card d-flex position-relative flex-column\">"+
        
        "<div class='imgContainer'> <img src='"+posts[i]['imgLink']+"'> </div>"+   
        "<div class=\"content\">"+
        " <h2>"+posts[i]['title']+"</h2>"+
        " <h7 class=\"blogId\">Blog ID: "+posts[i]['blogId']+"</h7>"+
        " <h7>Category: "+posts[i]['category']+" likes: "+posts[i]['likes']+"</h7>"+
            "<p>"+posts[i]['content']+"</p>"+
        "</div>"+
        "</div>";

        var element = document.getElementById("blogCards")
        element.innerHTML = element.innerHTML + cardHtml;
    }
}

function deleteBlog(){
    var myobj = document.getElementById("demo");
    myobj.remove();
}



let submitBtn = document.getElementById("submit");
let siteName = document.getElementById("siteName");
let siteUrl = document.getElementById("siteUrl");
let urls = [];

if(localStorage.getItem("Bookmarks") != null)
    {
        urls = JSON.parse(localStorage.getItem("Bookmarks"));
        showUrl();
    }




submitBtn.addEventListener("click",function(){
    addUrl();    
    showUrl();
    clearInputs();  
});



function clearInputs(){
    siteName.value="";
    siteUrl.value="";
}
function addUrl(){
    let newUrl = {
        name: siteName.value,
        url:siteUrl.value
    };
    urls.push(newUrl);
    localStorage.setItem("Bookmarks",JSON.stringify(urls));
}

function showUrl(){
    let urlContainer = document.getElementById("urlContainer");
    urlContainer.innerHTML = "";
    for (let i = 0; i< urls.length;i++){
        let newUrlDiv = "<div><h2>"+ urls[i].name +"</h2><a class='btn btn-primary' target='_blank' href='http://"+urls[i].url+"'>visit</a> <button class='btn btn-danger btndelete' onclick='deleteBookmark("+i+")'>Delete</button></div>";
        urlContainer.innerHTML+=newUrlDiv;
    }
    
}


function deleteBookmark(id){
    urls.splice(id,1);
    localStorage.setItem("Bookmarks",JSON.stringify(urls) )
    showUrl();
}

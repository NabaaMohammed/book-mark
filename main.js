document.getElementById("myform").addEventListener('submit',savebookmark);
function savebookmark(e)
{
    "use strict"
   var sitename1 =document.getElementById('sitename').value;
   var siteurl =document.getElementById('siteurl').value;
    var bookmark={name:sitename1,url:siteurl}
    /*
     
    //local storage
    localStorage.setItem('name',sitename1)
    alert(localStorage.getItem('name'));
    e.preventDefault();
    */
    
   if(!validateform(sitename1,siteurl))
        {
            return false;
        }
   
    if(localStorage.getItem('bookmarks')===null)
        {
            var bookmarks=[];
            bookmarks.push(bookmark);
            localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
        }
    else
        {
            var bookmarks=JSON.parse(localStorage.getItem('bookmarks'));
              bookmarks.push(bookmark);
              localStorage.setItem('bookmarks',JSON.stringify(bookmarks));

        }
   
    document.getElementById('myform').reset();
     fetchbookmarks();
    e.preventDefault();
}
function validateform(sitename1,siteurl)
{
    
    if(!sitename1 || !siteurl)
        {
            alert("please enter name site and url");
            return false;
        }
    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);
    if(!siteurl.match(regex))
        {
            alert("please enter valid url");
            return false;
        }
    return true;
}
function fetchbookmarks()
{
    var bookmarks=JSON.parse(localStorage.getItem('bookmarks'));
    var bookmarkresult=document.getElementById('bookmarksresult');
    bookmarkresult.innerHTML='';
    for(i=0;i<bookmarks.length;i++)
        {
            var name=bookmarks[i].name;
            var url=bookmarks[i].url;
            bookmarkresult.innerHTML+='<div class="well">'+'<h3>'+name+
                '<a class="btn btn-danger red" target="_blank" href="'+url+'">VISIT</a>'+
                 '<a onclick="deletebookmark(\''+url+'\')" class="btn btn-primary blue" href="#">DELETE</a>'
                +'</h3> </div>';
        }
}

 
function deletebookmark(url)
{
    var bookmarks=JSON.parse(localStorage.getItem('bookmarks'));
    for(var i=0;i<bookmarks.length;i++)
        {
            if(bookmarks[i].url==url)
                {
                    bookmarks.splice(i,1);
                }
        }
    localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    fetchbookmarks();
}
 
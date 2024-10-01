function authorSubmitted(){
  let url = "https://poetrydb.org/author/";
  let authorName =document.getElementById("inputAuthor").value;
  url += authorName;
  getAuthor(url);
}

function titleSubmitted(){
  let url = "https://poetrydb.org/title/";
  let titleName = document.getElementById("inputTitle").value;
  url += titleName;
  getTitle(url);
}

function getAuthor(url){
  fetch(url)
  .then( res => res.json ())
  .then(
    function(data){

      document.getElementById("outputArea").style.display = 'block';

      if(data.length==undefined){
        document.getElementById("outputArea").innerHTML = "No Poems Were Found" + "<br>" + "<br>"; 
      } else if(data.length==1){
        document.getElementById("outputArea").innerHTML = "<b>1 Poem Found</b>" + "<br>" + "<br>"; 
      } else {
        document.getElementById("outputArea").innerHTML = "<b>" + data.length + " Poems Found</b>" + "<br>" + "<br>";

      let answer = "";
      for(let poem of data){
        answer += "<hr>";
        answer += " <b>Title:  </b>" + poem.title + "<br>";
        answer += " <b>Author:  </b>" + poem.author + "<br>";
        answer += "<b>Poem: </b>" + "<br>";

        for(let line of poem.lines){
          answer += line + "<br>";
        }

        answer += "<br>";
      }
      document.getElementById("outputArea").innerHTML += answer;
    }
}
    )
}

function getTitle(url){
  fetch(url)
  .then( res => res.json ())
  .then(
    function(data){

      document.getElementById("outputArea").style.display = 'block';

      if(data.length==undefined){
        document.getElementById("outputArea").innerHTML = "No Poems Were Found" + "<br>" + "<br>"; 
      } else if(data.length==1){
        document.getElementById("outputArea").innerHTML = "<b>1 Poem Found</b>" + "<br>" + "<br>"; 
      } else {
        document.getElementById("outputArea").innerHTML = "<b>" + data.length + " Poems Found</b>" + "<br>" + "<br>"; 
      }

      let answer = "";
      for(let poem of data){
        answer += "<hr>";
        answer += "<b>Title:  </b>" + poem.title + "<br>";
        answer += " <b>Author:  </b>" + poem.author + "<br>";
        answer += " <b>Poem: </b>" + "<br>";

        for(let line of poem.lines){
          answer += line + "<br>";
        }

        answer += "<br>";
      }
      document.getElementById("outputArea").innerHTML += answer;
    }
  )
}

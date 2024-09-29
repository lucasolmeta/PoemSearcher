function authorSubmitted(){
  let url = "https://poetrydb.org/author/";
  let authorName =document.getElementById("inputArea").value;
  url += authorName;
  getAuthor(url);
}

function titleSubmitted(){
  let url = "https://poetrydb.org/title/";
  let titleName = document.getElementById("inputArea2").value;
  url += titleName;
  getTitle(url);
}

function getAuthor(url){
  fetch(url)
  .then( res => res.json ())
  .then(
    function(data){
      if(data.length==undefined){
        document.getElementById("outputArea").innerHTML = "No Poems Were Found" + "<br>" + "<br>"; 
      } else if(data.length==1){
        document.getElementById("outputArea").innerHTML = "1 Poem Found" + "<br>" + "<br>"; 
      } else {
        document.getElementById("outputArea").innerHTML = data.length + " Poems Found" + "<br>" + "<br>";

      let answer = "";
      for(let poem of data){
        answer += "<hr>";
        answer += " <b> Title:  </b>" + poem.title + "<br>";
        answer += " <b> Author:  </b>" + poem.author + "<br>";
        answer += "<b> Poem: </b>" + "<br>";

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
      if(data.length==undefined){
        document.getElementById("outputArea").innerHTML = "No Poems Were Found" + "<br>" + "<br>"; 
      } else if(data.length==1){
        document.getElementById("outputArea").innerHTML = "1 Poem Found" + "<br>" + "<br>"; 
      } else {
        document.getElementById("outputArea").innerHTML = data.length + " Poems Found" + "<br>" + "<br>"; 
      }

      let answer = "";
      for(let poem of data){
        answer += "<hr>";
        answer += "<b> Title:  </b>" + poem.title + "<br>";
        answer += " <b> Author:  </b>" + poem.author + "<br>";
        answer += " <b> Poem: </b>" + "<br>";

        for(let line of poem.lines){
          answer += line + "<br>";
        }

        answer += "<br>";
      }
      document.getElementById("outputArea").innerHTML += answer;
    }
  )
}

function authorSubmitted(){
  let url = "https://poetrydb.org/author/";
  let authorName =document.getElementById("inputAuthor").value;
  url += authorName;
  fetchData(url);
}

function titleSubmitted(){
  let url = "https://poetrydb.org/title/";
  let titleName = document.getElementById("inputTitle").value;
  url += titleName;
  fetchData(url);
}

function fetchData(url){
  fetch(url)
  .then( res => res.json ())
  .then(
    function(data){
      displayData(data);
    }
  )
}

function displayData(data){
  document.getElementById("outputArea").style.display = 'block';

  if(data.length==undefined){
    document.getElementById("outputArea").innerHTML = "<b>No Poems Found</b>"; 
    return;
  } else if(data.length==1){
    document.getElementById("outputArea").innerHTML = "<b>1 Poem Found</b><br><br>"; 
  } else {
    document.getElementById("outputArea").innerHTML = "<b>" + data.length + " Poems Found</b><br><br>";
  }

  let answer = "";
  for(let poem of data){
    answer += "<hr>";
    answer += " <b>Title:  </b>" + poem.title + "<br>";
    answer += " <b>Author:  </b>" + poem.author + "<br>";
    answer += "<b>Poem: </b><br><br>";

    for(let line of poem.lines){
      answer += "<i>" + line + "</i><br>";
    }

    answer += "<br>";
  }
  document.getElementById("outputArea").innerHTML += answer;
}
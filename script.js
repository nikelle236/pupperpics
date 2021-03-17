document.getElementById("breedSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    const value = document.getElementById("breedInput").value;
    if (value === "") {
      const url = "https://dog.ceo/api/breeds/image/random";
      fetch(url)
      .then(function(response) {
          return response.json();
      }).then(function(json) {
          let results = "";
          if (json.status === "error") {
            results += json.message
          }
          else {
            results += '<img class="dogpic" src="' + json.message + '"/>';
            
        }
        document.getElementById("photoResults").innerHTML = results;
        console.log(json);
      });
    }  
    else {
        const url = "https://dog.ceo/api/breed/" + value + "/list";
        fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            let breedList = "";
            if (json.status === "error") {
                breedList += json.message
            }
            else {
                if (json.message.length != 0) {
                    breedList += "<h2 class='subTitles'>Sub Breeds</h2>"
                    breedList += "<div class='subBlock'>"
                    for (let i=0; i < json.message.length; i++) {
                    breedList += "<p><span class = 'subBreed'>" + json.message[i] + "</span></p>";
                    }
                    breedList += "</div"
                }
            }
            document.getElementById("breedResults").innerHTML = breedList;
            console.log(json);
            const subValue = document.getElementById("subInput").value;
            if (subValue === "") {
                const url2 = "https://dog.ceo/api/breed/" + value + "/images/random";
                fetch(url2)
                .then(function(response) {
                    return response.json();
                }).then(function(json) {
                    let results = "";
                    if (json.status === "error") {
                        results += json.message
                    }
                    else {
                        results += '<img class="dogpic" src="' + json.message + '"/>';
                        
                    }
                    document.getElementById("photoResults").innerHTML = results;
                    console.log(json);
                });
            }
            else {
                const url2 = "https://dog.ceo/api/breed/" + value + "/" + subValue + "/images/random";
                fetch(url2)
                .then(function(response) {
                    return response.json();
                }).then(function(json) {
                    let results = "";
                    if (json.status === "error") {
                        results += json.message
                    }
                    else {
                        results += '<img class="dogpic" src="' + json.message + '"/>';
                        
                    }
                    document.getElementById("photoResults").innerHTML = results;
                    console.log(json);
                });
            }
        });
    }
})


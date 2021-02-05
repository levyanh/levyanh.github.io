document.getElementById("getBtn").addEventListener(
    "click",
    function () {
      fetch('https://api.adviceslip.com/advice/search/' + document.getElementById("txtSearch").value)
        .then(function(response) {
          return response.json();
        })
        .then(function(parseData) {
          console.log(parseData);
          if (parseData.total_results > 0) {
            document.getElementById("content").innerText = parseData.slips[0].advice;
            document.getElementById("cookie").setAttribute("src", "https://cdn.shopify.com/s/files/1/0269/6865/articles/5ef5e6a31c86d16513f8f79fc3ccb867_2048x.jpg?v=1529985215");
          } else {
            document.getElementById("content").innerText = "Ask your mom instead of a cookie!!!";
            document.getElementById("cookie").setAttribute("src", "https://i.pinimg.com/originals/12/b3/b5/12b3b5a0fd2ff64136509dea171b1df4.gif");
            
          }
        })
    }
  );
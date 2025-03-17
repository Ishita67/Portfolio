let main

document.addEventListener("DOMContentLoaded", () => {
//There must be a div with the class name main in your index.html file. All components will be appended to this div
  main = document.querySelector(".main")
  
  //Replace the url in the fetch with the url your google docs csv url
fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vRRWhMQGbI0bk6SVRIuPri2gGXzS8BSL5Y0DLxiI49v4S-wjKdduXTIN9eZ4Lpbwtg7i1_lmKadoBIC/pub?gid=0&single=true&output=csv")
    .then(response => response.text())
    .then(csvData => {
      Papa.parse(csvData, {
        header: true, // Treat the first row as column headers
        skipEmptyLines: true, // Ignore empty rows
        complete: function(results) {
          results.data.forEach(row => {
            displayComponent(row);
          });
        }
      });
    });
});

function displayComponent(row){
  console.log(row)
  //your code here
  let component = document.createElement("div")
  component.classList.add("project")

let image = document.createElement("img")
image.src = "images/" + row.image
image.classList.add("project_image")

let name = document .createElement("p")
name.textContent =row.name
name.classList.add("name")

let categories = document.createElement("p")
categories.textContent= row.categories
categories.classList.add("categories")

component.addEventListener("click", function(){
  window.open(row.page)
})

component.append(image)
component.append(name)
component.append(categories)

  main.append(component)
}
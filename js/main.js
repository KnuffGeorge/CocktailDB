document.querySelector('button').addEventListener('click', getListByIngredient)

function getListByIngredient(){
    let drink = document.querySelector('input').value
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json())
    .then (data => {
      
      console.log(data)
    })
}



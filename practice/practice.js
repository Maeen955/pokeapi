const input = document.getElementById("input")
const btn = document.getElementById("btn")
const pokename = document.getElementById("name")
const pokeWeight = document.getElementById("pokeWeight")
const pokeImg = document.getElementById("pokeImg")
const type = document.getElementById("type")
const hp = document.getElementById("hp")
const attack = document.getElementById("attack")
const defense = document.getElementById("defense")
const specialAttack = document.getElementById("special-attack")
const specialDefense = document.getElementById("special-defense")
const speed = document.getElementById("speed")


//weight: 60  Height: 4 pokeImg


btn.addEventListener("click", ()=>{
        if(input.value){
          fetchPoke();
          input.value = ""

        }else{
          alert("go away")
        }
})

const fetchPoke = async () => {
  try{
     const pokeName = input.value.toLowerCase();
     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
     const data = await response.json();
     pokename.textContent = `${data.name} #${data.id}`;
     pokeWeight.textContent = `weight: ${data.weight}  Height: ${data.height}`
     pokeImg.innerHTML = `<img src=${data.sprites.front_default}>`
     type.innerHTML = `<p class="method">${data.types[0].type.name}</p>`
     hp.textContent = `${data.stats[0].base_stat}`;
     attack.textContent = `${data.stats[1].base_stat}`;
     defense.textContent = `${data.stats[2].base_stat}`;
     specialAttack.textContent = `${data.stats[3].base_stat}`;
     specialDefense.textContent = `${data.stats[4].base_stat}`;
     speed.textContent = `${data.stats[5].base_stat}`
     console.log(data);
  }catch(err){
    alert(err)
  }
}
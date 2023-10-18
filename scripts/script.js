// category Nav
const loadData = async (id) =>{
    const res = await fetch(` https://openapi.programming-hero.com/api/videos/categories`)
    const data = await res.json()
    const myData = data.data
    const subNav = document.getElementById("sub-nav")
    for(let i=0;i<myData.length;i++){
        const subNavBtn = document.createElement("button")
        subNavBtn.classList = "btn"
        subNavBtn.setAttribute("onclick",`showData(${myData[i].category_id})`)
        subNavBtn.id = `sub-${myData[i].category}`
        subNavBtn.innerText = myData[i].category
        subNav.appendChild(subNavBtn)
    }

}

const showData = async (id=1000) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    const data = await res.json()
    const dataContainer = document.getElementById("data-container")
    dataContainer.textContent = ``

    if(data.status === true){
        const myData = data.data
    myData.forEach(data => {
        const dataCard = document.createElement('div')
        dataCard.classList = "card p-4 shadow-xl"
       
        dataCard.innerHTML = `
        <figure><img class="h-60" src="${data.thumbnail}" alt="Tumbnail" /></figure>
            <div class="card-body">
              <div class="flex space-x-3 rounded-full">
                <img class="block w-6" src="${data.authors[0].profile_picture}" alt="Author Image">
                <h3 class="font-bold">${data.title}</h3>
              </div>
              <div class="flex space-x-3 my-4">
                <p>${data.authors[0].profile_name}</p>
                <img src="" alt="verified">
              </div>
              <p>${data.others.views}</p>
            </div>
        `
        dataContainer.appendChild(dataCard)  
    });

    }
    else{
        const message = document.createElement("div")
        message.classList = 'flex justify-center justify-items-center'
        message.innerHTML = `
        <div>
        <figure><img src="images/Icon.png" alt="Shoes" /></figure>
        <h3 class="text-3xl my-4 text-center">Opps!! No video Here</h3>
        </div>
       

        
        `
        dataContainer.appendChild(message)
    }

    
 
}


loadData()
showData()

let list =[]
let taskList = document.querySelector('#contentDiv')
const fetchedData = async ()=>{
    const response  = await fetch('data.json')
    const data = await response.json();
    data.latestStories.map(({title,link})=>{
        const templateEl = document.querySelector('.addTask').content.cloneNode(true)
        templateEl.querySelector('#contentTitle').textContent = title
        templateEl.querySelector("#contentLink").setAttribute("href",link)
        taskList.append(templateEl)
    })
   
}
fetchedData()


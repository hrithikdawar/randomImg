const btn =document.querySelector("button")
const hero =document.querySelector("#hero")

const arr=[
 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLIMd-HsUF0ntuo1LsdGfGeIIXflQGqdNxQA&s",
"https://i.pinimg.com/736x/0f/ce/54/0fce54c4a6aaa829d2270d9c5affcb23.jpg",
 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZV5Gn4GjofVZbHdnlg63DAWVwqu4SJtdeDQ&s"
 ,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-n571psRm2I2aEC3RrvOh-3ZkBVw8RDzjGokd4Bbo7AuKFSiiw_VV-GakJwdUWrj3EIY&usqp=CAU",
 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvqxYOCmSYaYPjuRqPoAAu6Npckwj5CkivIA&s",
 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_5iGFJnvM9kF0hsPmyd0nPueCWbFckzdxxQ&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7z-Xvz-7euuEevdI-x58LJkzHEjjlr1uArw&s",
 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR4GaJyO-c1cWq_PJySwX6EPEK_K7zKKeJ9A&s"
   

]

function random(){

    const rx= Math.floor(Math.random()*100)
    const ry=Math.floor(Math.random()*100)
    const rotate=Math.random()*360
    const randomimg=Math.floor(Math.random()*arr.length)
    return [rx,ry,rotate,randomimg]
}


btn.addEventListener("click",()=>{
const img=document.createElement("img")
const [topX,topY,rotate,randomimg]=random()


img.classList.add("h-64","w-64", "bg-black" ,"absolute","shadow" )
img.style.top=topX+"%"
img.style.left=topY+"%"
img.style.rotate= rotate+"deg"
hero.appendChild(img)
img.setAttribute("src" ,arr[randomimg])
img.addEventListener("mouseenter",()=>{
    img.style.rotate="360deg"
    img.style.transition="1s all"
})
img.addEventListener("mouseout",()=>{
    hero.removeChild(img)
})


})

let sideBar=[{
  icon:'./Icons/home.svg',
  name:'Home'
},{
  icon:'./Icons/explore.svg',
  name:'Explore'
}, {
  icon:'./Icons/subscriptions.svg',
  name:'Subscriptions'
}, {
  icon:'./Icons/originals.svg',
  name:'Originals'
}, {
  icon:'./Icons/youtube-music.svg',
  name:'YouTube Music'
}, {
  icon:'./Icons/library.svg',
  name:'Library'
}]

let sidebarHTML='';

sideBar.forEach((sides) => {
  sidebarHTML += `
  <div class="sidebarIcon">
      <img class="icon" src="${sides.icon}" alt="">
      <p class="iconName">${sides.name}</p>
    </div>
  `
})

document.querySelector('.domSide').
innerHTML = sidebarHTML;
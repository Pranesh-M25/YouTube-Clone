let videos=[{
  thumbnail:'./thumbnails/thumbnail-1.jpg',
  duration:'27:08',
  pfp:`./pfps/video 1 pfp.jpg`,
  title:'I tested the FIRST EVER limited Edition iPhone!',
  views:'5.1M views &#183; 6 days ago',
  channel:'Mrwhosetheboss',
  videolink:'https://youtu.be/WL4RWNptU_Y?si=Uk2Aixgj-BZJGt0N',
  channelLink:'https://www.youtube.com/@Mrwhosetheboss'
}, {
  thumbnail:'./thumbnails/thumbnail-2.jpg',
  duration:'27:08',
  pfp:`./pfps/video 2 pfp.jpg`,
  title:'How is this Website so fast!?',
  views:'1.6M views &#183; 4 months ago',
  channel:'WesBos',
  videolink:'https://youtu.be/-Ln-8QM8KhQ?si=-vSyb2JrC8qXMteT',
  channelLink:'https://www.youtube.com/@WesBos'
}, {
  thumbnail:'./thumbnails/thumbnail-3.jpg',
  duration:'9:33',
  pfp:`./pfps/video 3 pfp.jpg`,
  title:'Things I ABSOLUTELY Hate About Programming',
  views:'70k views &#183; 12 days ago',
  channel:'The Coding Sloth',
  videolink:'https://youtu.be/VQgKSLkUNvQ?si=0CmTxWMp4hQJD5RH',
  channelLink:'https://www.youtube.com/@TheCodingSloth'
},{
  thumbnail:'./thumbnails/thumbnail-4.jpg',
  duration:'13:49',
  pfp:`./pfps/video 4 pfp.jpg`,
  title:'The Windows App Iceberg',
  views:'511k views &#183; 10 months ago',
  channel:'Bog',
  videolink:'https://youtu.be/4VhJSxMKIqM?si=1FvMW8EgDha9wjXT',
  channelLink:'https://www.youtube.com/@bogxd'
},{
  thumbnail:'./thumbnails/thumbnail-5.jpg',
  duration:'29:44',
  pfp:`./pfps/video 5 pfp.jpg`,
  title:'The Odyssey Explained In 25 Minutes | Best Greek Mythology Documentary',
  views:'2.3M views &#183; 2 years ago',
  channel:'The Life Guide',
  videolink:'https://youtu.be/OuGeoq_uVts?si=8U__ZMXd2kJjkw_0',
  channelLink:'https://www.youtube.com/@TheLifeGuide'
},{
  thumbnail:'./thumbnails/thumbnail-6.jpg',
  duration:'41:54',
  pfp:`./pfps/video 6 pfp.jpg`,
  title:'The Most Insane Dictatorship on Earth',
  views:'5.8M views &#183; 10 months ago',
  channel:'Casual Scholar',
  videolink:'https://youtu.be/NH_yzhPa5T8?si=VhgmTWA9KD4GCsK8',
  channelLink:'https://www.youtube.com/@CasualScholar'
}, {
  thumbnail:'./thumbnails/thumbnail-7.jpg',
  duration:'4:08',
  pfp:`./pfps/video 7 pfp.jpg`,
  title:'FOZZY - Judas (OFFICIAL VIDEO)',
  views:'70M views &#183; 7 years ago',
  channel:'Century Media Records',
  videolink:'https://youtu.be/lqURPBtGJzg?si=wHW8OC9i3gUvkakN',
  channelLink:'https://www.youtube.com/@centurymedia'
}, {
  thumbnail:'./thumbnails/thumbnail-8.jpg',
  duration:'8:41',
  pfp:`./pfps/video 8 pfp.jpg`,
  title:'ISS Tour: Kitchen, Bedrooms & The Latrine',
  views:'20M views &#183; 12 years ago',
  channel:'VideoFromSpace',
  videolink:'https://youtube.com/watch?v=XkM_04Ch76E',
  channelLink:'https://www.youtube.com/@VideoFromSpace'
}, {
  thumbnail:'./thumbnails/thumbnail-9.jpg',
  duration:'16:38',
  pfp:`./pfps/video 9 pfp.jpg`,
  title:'I try to code a PS1 game.',
  views:'2.4M views &#183; 2 years ago',
  channel:'Bandwidth',
  videolink:'https://youtube.com/watch?v=QYVGczdflyY',
  channelLink:'https://www.youtube.com/@Bandwidth'
}, {
  thumbnail:'./thumbnails/thumbnail-10.jpg',
  duration:'11:10',
  pfp:`./pfps/video 10 pfp.jpg`,
  title:`World's 1st Coding Monitor`,
  views:'763K views &#183; 6 months ago',
  channel:'Alex Ziskind',
  videolink:'https://youtube.com/watch?v=I-E0CmCWsjo',
  channelLink:'https://www.youtube.com/@AZisk'
}, {
  thumbnail:'./thumbnails/thumbnail-11.jpg',
  duration:'3:03',
  pfp:`./pfps/video 11 pfp.jpg`,
  title:`How to Lucid Dream TONIGHT Instantly`,
  views:'1M views &#183; 8 months ago',
  channel:'Lonely Lavender',
  videolink:'https://youtube.com/watch?v=lqciIGLAgLM',
  channelLink:'https://www.youtube.com/@LonelyLavenderr'
}, {
  thumbnail:'./thumbnails/thumbnail-12.jpg',
  duration:'11:03',
  pfp:`./pfps/video 12 pfp.jpg`,
  title:`Every Real-Life Glitch Explained in 11 Minutes`,
  views:'325K views &#183; 8 days ago',
  channel:'Paint Professor',
  videolink:'https://youtube.com/watch?v=TApCjAthDf4',
  channelLink:'https://www.youtube.com/@ThePaintProf'
}];

let videoHTML ='';

videos.forEach((video) => {
  videoHTML += ` <div class="video1">
      <div class="thumbDiv">
        <a href="${video.videolink}">
        <img class="thumb1" src="${video.thumbnail}" alt=""> </a>
        <div class="duration">${video.duration}
        </div>
      </div>
      <div class="videoGrid">
        <div class="pfpDiv">
        <a href="${video.channelLink}">
          <img class="videoPfp" src="${video.pfp}" alt=""> </a>
        </div>
        <div class="infoDiv">
          <a href="${video.videolink}">
          <p class="videoTitle">${video.title}</p>
          <p class="videoViews">${video.views}</p>
          <p class="videoChannel">${video.channel}</p> </a>
        </div>
      </div>
    </div>`
});
document.querySelector('.domContainer').innerHTML = videoHTML;

const searchForm = document.getElementById('search-form');
const searchInput = document.querySelector('.searchBar');

searchForm.addEventListener('submit', handleSearch);

async function handleSearch(event) {
  event.preventDefault();
  const searchTerm = searchInput.value;
  const API_KEY = 'AIzaSyDWqsy1_LW4dTb3qwiA2nnfaZEAbO8HC3M'; // Replace with your actual API key
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&key=${API_KEY}&maxResults=12&type=video`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    displaySearchResults(data.items);
  } catch (error) {
    console.error('Error fetching search results:', error);
  }
}

function displaySearchResults(videos) {
  let searchResultsHTML = '';
  videos.forEach((video) => {
    searchResultsHTML += `
      <div class="video1">
        <div class="thumbDiv">
          <a href="https://www.youtube.com/watch?v=${video.id.videoId}" target="_blank">
            <img class="thumb1" src="${video.snippet.thumbnails.high.url}" alt="">
          </a>
        </div>
        <div class="videoGrid">
          <div class="pfpDiv">
            </div>
          <div class="infoDiv">
            <a href="https://www.youtube.com/watch?v=${video.id.videoId}" target="_blank">
              <p class="videoTitle">${video.snippet.title}</p>
              <p class="videoViews">${video.snippet.channelTitle}</p>
              <p class="videoChannel">Published on ${new Date(video.snippet.publishTime).toLocaleDateString()}</p>
            </a>
          </div>
        </div>
      </div>`;
  });
  document.querySelector('.domContainer').innerHTML = searchResultsHTML;
}

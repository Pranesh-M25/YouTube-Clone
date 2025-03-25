let videos=[{
  thumbnail:'../YouTube Project/thumbnails/thumbnail-1.JPG',
  duration:'27:08',
  pfp:`../YouTube Project/pfp's/video 1 pfp.JPG`,
  title:'I tested the FIRST EVER limited Edition iPhone!',
  views:'5.1M views &#183; 6 days ago',
  channel:'Mrwhosetheboss',
  videolink:'https://youtu.be/WL4RWNptU_Y?si=Uk2Aixgj-BZJGt0N',
  channelLink:'https://www.youtube.com/@Mrwhosetheboss'
}, {
  thumbnail:'../YouTube Project/thumbnails/thumbnail-2.JPG',
  duration:'27:08',
  pfp:`../YouTube Project/pfp's/video 2 pfp.JPG`,
  title:'How is this Website so fast!?',
  views:'1.6M views &#183; 4 months ago',
  channel:'WesBos',
  videolink:'https://youtu.be/-Ln-8QM8KhQ?si=-vSyb2JrC8qXMteT',
  channelLink:'https://www.youtube.com/@WesBos'
}, {
  thumbnail:'../YouTube Project/thumbnails/thumbnail-3.JPG',
  duration:'9:33',
  pfp:`../YouTube Project/pfp's/video 3 pfp.JPG`,
  title:'Things I ABSOLUTELY Hate About Programming',
  views:'70k views &#183; 12 days ago',
  channel:'The Coding Sloth',
  videolink:'https://youtu.be/VQgKSLkUNvQ?si=0CmTxWMp4hQJD5RH',
  channelLink:'https://www.youtube.com/@TheCodingSloth'
},{
  thumbnail:'../YouTube Project/thumbnails/thumbnail-4.JPG',
  duration:'13:49',
  pfp:`../YouTube Project/pfp's/video 4 pfp.JPG`,
  title:'The Windows App Iceberg',
  views:'511k views &#183; 10 months ago',
  channel:'Bog',
  videolink:'https://youtu.be/4VhJSxMKIqM?si=1FvMW8EgDha9wjXT',
  channelLink:'https://www.youtube.com/@bogxd'
},{
  thumbnail:'../YouTube Project/thumbnails/thumbnail-5.JPG',
  duration:'29:44',
  pfp:`../YouTube Project/pfp's/video 5 pfp.JPG`,
  title:'The Odyssey Explained In 25 Minutes | Best Greek Mythology Documentary',
  views:'2.3M views &#183; 2 years ago',
  channel:'The Life Guide',
  videolink:'https://youtu.be/OuGeoq_uVts?si=8U__ZMXd2kJjkw_0',
  channelLink:'https://www.youtube.com/@TheLifeGuide'
},{
  thumbnail:'../YouTube Project/thumbnails/thumbnail-6.JPG',
  duration:'41:54',
  pfp:`../YouTube Project/pfp's/video 6 pfp.JPG`,
  title:'The Most Insane Dictatorship on Earth',
  views:'5.8M views &#183; 10 months ago',
  channel:'Casual Scholar',
  videolink:'https://youtu.be/NH_yzhPa5T8?si=VhgmTWA9KD4GCsK8',
  channelLink:'https://www.youtube.com/@CasualScholar'
}, {
  thumbnail:'../YouTube Project/thumbnails/thumbnail-7.JPG',
  duration:'4:08',
  pfp:`../YouTube Project/pfp's/video 7 pfp.JPG`,
  title:'FOZZY - Judas (OFFICIAL VIDEO)',
  views:'70M views &#183; 7 years ago',
  channel:'Century Media Records',
  videolink:'https://youtu.be/lqURPBtGJzg?si=wHW8OC9i3gUvkakN',
  channelLink:'https://www.youtube.com/@centurymedia'
}, {
  thumbnail:'../YouTube Project/thumbnails/thumbnail-8.JPG',
  duration:'8:41',
  pfp:`../YouTube Project/pfp's/video 8 pfp.JPG`,
  title:'ISS Tour: Kitchen, Bedrooms & The Latrine',
  views:'20M views &#183; 12 years ago',
  channel:'VideoFromSpace',
  videolink:'https://youtube.com/watch?v=XkM_04Ch76E',
  channelLink:'https://www.youtube.com/@VideoFromSpace'
}, {
  thumbnail:'../YouTube Project/thumbnails/thumbnail-9.JPG',
  duration:'16:38',
  pfp:`../YouTube Project/pfp's/video 9 pfp.JPG`,
  title:'I try to code a PS1 game.',
  views:'2.4M views &#183; 2 years ago',
  channel:'Bandwidth',
  videolink:'https://youtube.com/watch?v=QYVGczdflyY',
  channelLink:'https://www.youtube.com/@Bandwidth'
}, {
  thumbnail:'../YouTube Project/thumbnails/thumbnail-10.JPG',
  duration:'11:10',
  pfp:`../YouTube Project/pfp's/video 10 pfp.JPG`,
  title:`World's 1st Coding Monitor`,
  views:'763K views &#183; 6 months ago',
  channel:'Alex Ziskind',
  videolink:'https://youtube.com/watch?v=I-E0CmCWsjo',
  channelLink:'https://www.youtube.com/@AZisk'
}, {
  thumbnail:'../YouTube Project/thumbnails/thumbnail-11.JPG',
  duration:'3:03',
  pfp:`../YouTube Project/pfp's/video 11 pfp.JPG`,
  title:`How to Lucid Dream TONIGHT Instantly`,
  views:'1M views &#183; 8 months ago',
  channel:'Lonely Lavender',
  videolink:'https://youtube.com/watch?v=lqciIGLAgLM',
  channelLink:'https://www.youtube.com/@LonelyLavenderr'
}, {
  thumbnail:'../YouTube Project/thumbnails/thumbnail-12.JPG',
  duration:'11:03',
  pfp:`../YouTube Project/pfp's/video 12 pfp.JPG`,
  title:`Every Real-Life Glitch Explained in 11 Minutes`,
  views:'325K views &#183; 8 days ago',
  channel:'Paint Professor',
  videolink:'https://youtube.com/watch?v=TApCjAthDf4',
  channelLink:'https://www.youtube.com/@ThePaintProf'
}]



let videoHTML = '';

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

document.querySelector('.domContainer').
innerHTML=videoHTML;
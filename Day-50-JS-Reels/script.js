const reels = [
  {
    userName: "travel_with_arjun",
    userProfile: "https://i.pinimg.com/736x/23/57/24/235724d60503e6429c4a621f35a42fbe.jpg",
    likeCount: 15432,
    isLiked: false,
    commentCount: 382,
    isFollowed: false,
    caption: "For 60 Overs They Should Feel Like Hell Out There - #viratkohli #cricket #indvsseng #testcricket✨",
    video: "./reels/reel-1.mp4",
    isMuted: true,
    shareCount: 120
  },
  {
    userName: "foodies.neha",
    userProfile: "https://i.pinimg.com/736x/c5/de/da/c5deda19682d02cac1aede7d46ba072b.jpg",
    likeCount: 42109,
    isLiked: true,
    commentCount: 912,
    isFollowed: true,
    caption: "Motivation from the GOATs🔥🤤",
    video: "./reels/reel-2.mp4",
    isMuted: true,
    shareCount: 244
  },
  {
    userName: "tech_guru_vishal",
    userProfile: "https://i.pinimg.com/736x/2a/cf/9a/2acf9a571bfc454d37877e2c5a136bda.jpg",
    likeCount: 9821,
    isLiked: false,
    commentCount: 200,
    isFollowed: false,
    caption: "Virat Journey🤯",
    video: "./reels/reel-3.mp4",
    isMuted: true,
    shareCount: 89
  },
  {
    userName: "fitness_ria",
    userProfile: "https://i.pinimg.com/736x/3e/49/b0/3e49b07ad5f9217c8f577e604ec553d5.jpg",
    likeCount: 26780,
    isLiked: true,
    commentCount: 670,
    isFollowed: false,
    caption: "Self confidence is key to success💪✨",
    video: "./reels/reel-4.mp4",
    isMuted: true,
    shareCount: 310
  },
  {
    userName: "coder_sahil",
    userProfile: "https://i.pinimg.com/1200x/f6/35/ed/f635ed19f65a7f2f9801db82ad465fee.jpg",
    likeCount: 13204,
    isLiked: false,
    commentCount: 197,
    isFollowed: true,
    caption: "Lafda feat. Virat Kohli👨🔥",
    video: "./reels/reel-5.mp4",
    isMuted: true,
    shareCount: 47
  },
  {
    userName: "pet_love_priya",
    userProfile: "https://i.pinimg.com/736x/e4/39/d6/e439d6ed14be8223f726c075c06c0a96.jpg",
    likeCount: 55123,
    isLiked: false,
    commentCount: 1023,
    isFollowed: true,
    caption: "The beauty of DARK, best series in the world. 🐶💖",
    video: "./reels/reel-6.mp4",
    isMuted: true,
    shareCount: 489
  },
  {
    userName: "street_photography_rahul",
    userProfile: "https://i.pinimg.com/1200x/9c/e4/b5/9ce4b5b5839ac6e035048e157912fa9d.jpg",
    likeCount: 34789,
    isLiked: true,
    commentCount: 540,
    isFollowed: false,
    caption: "Test cricket tests your's everything, #determination📸✨",
    video: "./reels/reel-7.mp4",
    isMuted: true,
    shareCount: 203
  },
  {
    userName: "music_by_kavya",
    userProfile: "https://i.pinimg.com/736x/39/d8/ce/39d8ce43e28df0954ee8ea02f156c89f.jpg",
    likeCount: 78012,
    isLiked: true,
    commentCount: 1880,
    isFollowed: true,
    caption: "Today's generation mindset",
    video: "./reels/reel-8.mp4",
    isMuted: true,
    shareCount: 610
  },
  {
    userName: "gaming_world_ankit",
    userProfile: "https://i.pinimg.com/736x/cf/ae/0a/cfae0a10c395b2764a4c886b4435599e.jpg",
    likeCount: 23890,
    isLiked: false,
    commentCount: 430,
    isFollowed: false,
    caption: "Men when it come to their EGO! 🔥🎮",
    video: "./reels/reel-9.mp4",
    isMuted: true,
    shareCount: 152
  },
  {
    userName: "art_by_maya",
    userProfile: "https://i.pinimg.com/736x/89/69/b4/8969b4c12d602ae1672d7d0c676896e6.jpg",
    likeCount: 9023,
    isLiked: false,
    commentCount: 158,
    isFollowed: true,
    caption: "Peak Test cricket moments, test cricket in Australia🔥",
    video: "./reels/reel-10.mp4",
    isMuted: true,
    shareCount: 45
  }
];

/* DOM container */
const Allreels = document.querySelector(".all-reels");

/* Render function: builds VALID HTML for each reel */
function addData() {
  let sum = "";

  reels.forEach((element, index) => {
    // use data-index attributes instead of raw id on many elements
    sum += `
      <div class="reel" data-index="${index}">
        <video class="reel-video" src="${element.video}" autoplay loop ${element.isMuted ? "muted" : ""} playsinline></video>

        <!-- mute button (use data-role to find it later) -->
        <div class="mute" data-role="mute" data-index="${index}">
          ${element.isMuted ? '<i class="ri-volume-mute-fill"></i>' : '<i class="ri-volume-up-line"></i>'}
        </div>

        <div class="bottom">
          <div class="user">
            <img src="${element.userProfile}" alt="${element.userName}">
            <h4>${element.userName}</h4>
            <button class="follow" data-role="follow" data-index="${index}">
              ${element.isFollowed ? "Unfollow" : "Follow"}
            </button>
          </div>
          <h3>${element.caption}</h3>
        </div>

        <div class="right">
          <div class="like" data-role="like" data-index="${index}">
            <h4 class="like-icon icon">
              ${element.isLiked ? '<i class="love ri-heart-3-fill"></i>' : '<i class="ri-heart-3-line"></i>'}
            </h4>
            <h6 class="like-count">${element.likeCount}</h6>
          </div>

          <div class="comment" data-role="comment" data-index="${index}">
            <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></h4>
            <h6>${element.commentCount}</h6>
          </div>

          <div class="share" data-role="share" data-index="${index}">
            <h4 class="share-icon icon"><i class="ri-share-forward-line"></i></h4>
            <h6>${element.shareCount}</h6>
          </div>

          <div class="menu" data-role="menu" data-index="${index}">
            <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></h4>
          </div>
        </div>
      </div>
    `;
  });

  Allreels.innerHTML = sum;

  // after injecting markup, ensure videos respect isMuted and are ready
  document.querySelectorAll(".reel").forEach(reelEl => {
    const i = reelEl.dataset.index;
    const video = reelEl.querySelector("video.reel-video");
    // if video has src empty, it's okay; check exists
    if (video) {
      video.muted = !!reels[i].isMuted;
      // try to play (some browsers require first user gesture; this will fail silently)
      video.play().catch(() => {});
    }
  });
}

/* initial render */
addData();

/* Event delegation - handle clicks on like / follow / mute etc. */
Allreels.addEventListener("click", function (ev) {
  // Find nearest action element using dataset role
  const likeEl = ev.target.closest("[data-role='like']");
  if (likeEl) {
    const idx = Number(likeEl.dataset.index);
    // toggle like and count safely
    reels[idx].isLiked = !reels[idx].isLiked;
    reels[idx].likeCount += reels[idx].isLiked ? 1 : -1;
    addData(); // re-render
    return;
  }

  const followEl = ev.target.closest("[data-role='follow']");
  if (followEl) {
    const idx = Number(followEl.dataset.index);
    reels[idx].isFollowed = !reels[idx].isFollowed;
    addData();
    return;
  }

  const muteEl = ev.target.closest("[data-role='mute']");
  if (muteEl) {
    const idx = Number(muteEl.dataset.index);
    // toggle mute flag in data
    reels[idx].isMuted = !reels[idx].isMuted;

    // toggle actual video element in the same reel
    const reelNode = Allreels.querySelector(`.reel[data-index="${idx}"]`);
    if (reelNode) {
      const vid = reelNode.querySelector("video.reel-video");
      if (vid) {
        vid.muted = reels[idx].isMuted;
        // show/hide icon by re-rendering (simple approach)
      }
    }

    addData();
    return;
  }

  // other roles (comment, share, menu) can be handled similarly if needed
});


// let Allreels = document.querySelector(".all-reels");

// function addData() {
//     sum = ""

// reels.forEach(function (element,index) {
//     sum = sum + `<div class="reel">
//                     <video src="${element.video}" autoplay loop ${element.isMuted ? "muted" : ""}></video>
//                     <div class="mute" id=${index}>${element.isMuted? '<i class="ri-volume-mute-fill"></i>' : '<i class="ri-volume-up-line"></i>'}<div/>
//                     <div class="bottom">
//                         <div class="user">
//                             <img src="${element.userProfile}">
//                             <h4>${element.userName}</h4>
//                             <button id=${index} class="follow">${element.isFollowed? "Unfollow" : "Follow"}</button>
//                         </div>
//                         <h3>${element.caption}</h3>
//                     </div>
//                     <div class="right">
//                         <div id=${index} class="like">
//                             <h4 class="like">${element.isLiked? '<i class="love ri-heart-3-fill"></i>' : '<i class="ri-heart-3-line"></i>'}</h4>
//                             <h6>${element.likeCount}</h6>
//                         </div>

//                         <div class="comment">
//                             <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></h4>
//                             <h6>${element.commentCount}</h6>
//                         </div>

//                         <div class="share">
//                             <h4 class="share-icon icon"><i class="ri-share-forward-line"></i></h4>
//                             <h6>${element.shareCount}</h6>
//                         </div>

//                         <div class="menu">
//                             <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></h4>
//                         </div>
//                     </div>
//                 </div>`
// });

// Allreels.innerHTML = sum;
// };

// addData();

// Allreels.addEventListener("click", function(details) {
//     if(details.target.className === "like") {
//         if(!reels[details.target.id].isLiked) {
//             reels[details.target.id].likeCount++
//             reels[details.target.id].isLiked = true
//         }else {
//             reels[details.target.id].likeCount--
//             reels[details.target.id].isLiked = false
//         } 
        
//     addData();
//     }

//     if(details.target.className === "follow") {
//         if(!reels[details.target.id].isFollowed){
//             reels[details.target.id].isFollowed = true
//         } else {
//             reels[details.target.id].isFollowed = false
//         } 
        
//     addData();    
//     }

//     if(details.target.className === "mute") {
//         if(!reels[details.target.id].isMuted){
//             reels[details.target.id].isMuted = true
//         } else {
//             reels[details.target.id].isMuted = false
//         } 
        
//     addData();    
//     }
// });




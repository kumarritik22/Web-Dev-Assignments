let users = [
  {
    name: "Aarav Mehta",
    profilePic: "https://i.pinimg.com/1200x/57/be/84/57be849433fc4628a2b82122fd2284d8.jpg",
    bio: "building cool UIs • coffee & code ☕"
  },
  {
    name: "Shraddha Singh",
    profilePic: "https://i.pinimg.com/736x/7c/21/24/7c21249669e9c6fa1dc058fc08bdcc5b.jpg",
    bio: "branding + vibes ✨"
  },
  {
    name: "Ayush Sharma",
    profilePic: "https://i.pinimg.com/1200x/06/17/8e/06178ea2726a517ee679c5785611e6b7.jpg",
    bio:  "learning ML one model at a time 🤖"
  },
  {
    name: "Samita Shetty",
    profilePic: "https://i.pinimg.com/736x/49/3c/e7/493ce760bc067f2530d73365ace0d66c.jpg",
    bio: "designing with heart ✨"
  },
  {
    name: "Nikita Chaudhary",
    profilePic: "https://i.pinimg.com/736x/69/7c/ac/697caca04bede5b3bbdc99a72e6fa614.jpg",
    bio: "stories + snapshots 📸"
  },
  {
    name: "Nidhi Patel",
    profilePic: "https://i.pinimg.com/736x/bc/40/b2/bc40b2d9b883ae7b227fdf2bb7895626.jpg",
    bio: "writing + good vibes 🌼"
  }
];

function showUsers(arr) {
  arr.forEach(function (user) {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = user.profilePic;
    img.classList.add("bg-img");

    const blurredLayer = document.createElement("div");
    blurredLayer.style.backgroundImage = `url(${user.profilePic})`;
    blurredLayer.classList.add("blurred-layer");

    const content = document.createElement("div");
    content.classList.add("content");

    const h3 = document.createElement("h3");
    h3.textContent = user.name;

    const p = document.createElement("p");
    p.textContent = user.bio;

    content.appendChild(h3);
    content.appendChild(p);
    card.appendChild(img);
    card.appendChild(blurredLayer);
    card.appendChild(content);
    document.querySelector(".cards").appendChild(card);
  });
};

showUsers(users);

let input = document.querySelector(".input");

input.addEventListener("input", function() {
    let newUsers = users.filter((user)=> {
      return user.name.startsWith(input.value);
    });

    document.querySelector(".cards").innerHTML = "";

    showUsers(newUsers);
});



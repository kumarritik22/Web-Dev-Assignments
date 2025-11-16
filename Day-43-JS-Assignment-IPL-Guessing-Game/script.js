let arr = [
    {
        Team: "RCB",
        logo: "https://i.pinimg.com/736x/6d/32/88/6d32882b2d49540b4d0b365e9cba8bee.jpg",
        teamPhoto: "https://i.pinimg.com/736x/47/ec/e3/47ece31b54690337fdaf3231f2b01b0f.jpg",
        Primary: "Red",
        Secondary: "Black",
        FullName: "Royal Challengers Bengaluru",
        Captain: "Rajat Patidar",
        Trophies: 1
    },
    {
        Team: "CSK",
        Primary: "Yellow",
        logo: "https://i.pinimg.com/1200x/63/7b/3f/637b3fc6869b6a2ad3cc399717a763d9.jpg",
        teamPhoto: "https://i.pinimg.com/736x/82/b1/ee/82b1eeda0dc847c1a12062c4b0a6b0ba.jpg",
        Secondary: "Green",
        FullName: "Chennai Super Kings",
        Captain: "Ruturaj Gaikwad",
        Trophies: 5
    },
    {
        Team: "MI",
        logo: "https://i.pinimg.com/1200x/28/09/a8/2809a841bb08827603ccac5c6aee8b33.jpg",
        teamPhoto: "https://www.iwmbuzz.com/wp-content/uploads/2020/11/ipl-2020-take-a-look-at-the-success-of-mumbai-indians-so-far-2.jpg",
        Primary: "Blue",
        Secondary: "Gold",
        FullName: "Mumbai Indians",
        Captain: "Hardik Pandya",
        Trophies: 5
    },
    {
        Team: "KKR",
        logo: "https://i.pinimg.com/736x/55/29/ec/5529ec8094b4744dd916f9f415aeee09.jpg",
        teamPhoto: "https://thefederal.com/h-upload/2024/05/26/449528-kkr-champions.webp",
        Primary: "Purple",
        Secondary: "Gold",
        FullName: "Kolkata Knight Riders",
        Captain: "Ajinkya Rahane",
        Trophies: 2
    },
    {
        Team: "GT",
        logo: "https://i.pinimg.com/1200x/24/58/35/245835be9c23261523858a643af3aaf2.jpg",
        teamPhoto: "https://images.tv9hindi.com/wp-content/uploads/2022/05/IPL-2022-Champions-Gujarat-titans.jpg",
        Primary: "Grey",
        Secondary: "Yellow",
        FullName: "Gujrat Titans",
        Captain: "Shubman Gill",
        Trophies: 1
    },
    {
        Team: "RR",
        logo: "https://i.pinimg.com/1200x/68/c5/d4/68c5d4e34c0a26a4a11ffd080839e8e7.jpg",
        teamPhoto: "https://assets-webp.khelnow.com/d7293de2fa93b29528da214253f1d8d0/news/uploads/2024/05/Rajasthan-Royals-2008-1280x758.jpg.webp",
        Primary: "Hotpink",
        Secondary: "Blue",
        FullName: "Rajasthan Royals",
        Captain: "Sanju Samson",
        Trophies: 1
    },
    {
        Team: "SRH",
        logo: "https://i.pinimg.com/1200x/6e/9d/25/6e9d252b1a8ec39b01a248f1f9bd8b57.jpg",
        teamPhoto: "https://staticg.sportskeeda.com/editor/2023/05/c851f-16853630883769-1920.jpg",
        Primary: "Orange",
        Secondary: "Black",
        FullName: "Sunrisers Hyderabad",
        Captain: "Pat Cummins",
        Trophies: 1
    },
    {
        Team: "PBKS",
        logo: "https://i.pinimg.com/736x/29/a3/22/29a3221c17e0e067e72034fa4f7b5e12.jpg",
        teamPhoto: "https://i.pinimg.com/1200x/bb/5c/db/bb5cdbadf7038068ba1476906a48d1a1.jpg",
        Primary: "Crimson",
        Secondary: "Silver",
        FullName: "Punjab Kings",
        Captain: "Shreyas Iyer",
        Trophies: 0
    },
    {
        Team: "DC",
        logo: "https://i.pinimg.com/736x/56/76/91/567691824eb59180f762120fd34243d7.jpg",
        teamPhoto: "https://i.pinimg.com/1200x/60/a5/c3/60a5c30f508b7071e79c014bd4e70a42.jpg",
        Primary: "Lightblue",
        Secondary: "Red",
        FullName: "Delhi Capitals",
        Captain: "Axar Patel",
        Trophies: 0
    },
    {
        Team: "LSG",
        logo: "https://i.pinimg.com/1200x/63/c4/3c/63c43c59fff717f774b6b8ace666d96a.jpg",
        teamPhoto: "https://i.pinimg.com/736x/d1/20/10/d120100040fe2c310acd8cc8b4eea200.jpg",
        Primary: "Skyblue",
        Secondary: "Grey",
        FullName: "Lucknow Supergiants",
        Captain: "Rishabh Pant",
        Trophies: 0
    },
]

let button = document.querySelector("button");
let div = document.querySelector("div");
let main = document.querySelector("main");

button.addEventListener("click" , function() {
   let winner = arr[Math.floor(Math.random()*arr.length)];

   div.style.backgroundImage = `url(${winner.logo})`;
   div.style.backgroundPosition = "center";
   div.style.backgroundSize = "contain";
   div.style.backgroundRepeat = "no-repeat";
   main.style.backgroundImage = `url(${winner.teamPhoto})`;
   main.style.backgroundSize = "cover";
   main.style.backgroundPosition = "center";
});


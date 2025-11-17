let arr = [
    {
        Team: "RCB",
        logo: "https://pbs.twimg.com/profile_images/1770102655156682752/CFr2qRSJ_400x400.jpg",
        teamPhoto: "https://www.livemint.com/lm-img/img/2025/06/03/1600x900/RCB_Ipl_2025_1748979890723_1748979891039.jpg",
        Primary: "#ffd700",
        Captain: "Rajat Patidar",
        Trophies: "🏆",
    },
    {
        Team: "CSK",
        logo: "https://pbs.twimg.com/profile_images/1559375475557818368/ub-ZdXDD_400x400.jpg",
        teamPhoto: "https://pbs.twimg.com/media/G5yvg7gbMAAKP5l?format=jpg&name=4096x4096",
        Primary: "Blue",
        Captain: "Ruturaj Gaikwad",
        Trophies: "🏆🏆🏆🏆🏆",
    },
    {
        Team: "MI",
        logo: "https://pbs.twimg.com/profile_images/1691063659022458881/yi5YRCv2_400x400.jpg",
        teamPhoto: "https://www.iwmbuzz.com/wp-content/uploads/2020/11/ipl-2020-take-a-look-at-the-success-of-mumbai-indians-so-far-2.jpg",
        Primary: "Blue",
        Captain: "Hardik Pandya",
        Trophies: "🏆🏆🏆🏆🏆",
    },
    {
        Team: "KKR",
        logo: "https://pbs.twimg.com/profile_images/1734931620543832064/R92UP81c_400x400.jpg",
        teamPhoto: "https://thefederal.com/h-upload/2024/05/26/449528-kkr-champions.webp",
        Primary: "Gold",
        Captain: "Ajinkya Rahane",
        Trophies: "🏆🏆🏆",
    },
    {
        Team: "GT",
        logo: "https://pbs.twimg.com/profile_images/1926475537536454656/MWhuAVwE_400x400.jpg",
        teamPhoto: "https://images.tv9hindi.com/wp-content/uploads/2022/05/IPL-2022-Champions-Gujarat-titans.jpg",
        Primary: "Gold",
        Captain: "Shubman Gill",
        Trophies: "🏆",
    },
    {
        Team: "RR",
        logo: "https://pbs.twimg.com/profile_images/1647628957888708608/ZVPTc70P_400x400.jpg",
        teamPhoto: "https://pbs.twimg.com/profile_banners/17082958/1763222479/1500x500",
        Primary: "#7d7dcdff",
        Captain: "Sanju Samson",
        Trophies: "🏆",
    },
    {
        Team: "SRH",
        logo: "https://pbs.twimg.com/profile_images/1633354729790267393/V3D1yWeP_400x400.jpg",
        teamPhoto: "https://pbs.twimg.com/profile_banners/989137039/1763210549/1500x500",
        Primary: "#111",
        Captain: "Pat Cummins",
        Trophies: "🏆",
    },
    {
        Team: "PBKS",
        logo: "https://pbs.twimg.com/profile_images/1906969798598352896/VeOWPEIg_400x400.jpg",
        teamPhoto: "https://pbs.twimg.com/profile_banners/30631766/1763264496/1500x500",
        Primary: "Silver",
        Captain: "Shreyas Iyer",
        Trophies: 0
    },
    {
        Team: "DC",
        logo: "https://pbs.twimg.com/profile_images/1891001970175115264/v0pBPemd_400x400.jpg",
        teamPhoto: "https://www.delhicapitals.in/static-assets/waf-images/89/bc/f0/16-9/Vgp7UznbBT.png?v=1.11&w=1200",
        Primary: "Red",
        Captain: "Axar Patel",
        Trophies: 0
    },
    {
        Team: "LSG",
        logo: "https://pbs.twimg.com/profile_images/1489489326924726277/2DvNsqgC_400x400.jpg",
        teamPhoto: "https://statico.sportskeeda.com/editor/2024/11/c55f5-17327008137852-1920.jpg",
        Primary: "Darkblue",
        Captain: "Rishabh Pant",
        Trophies: 0
    },
]

let button = document.querySelector("button");
let div = document.querySelector("div");
let main = document.querySelector("main");
let captain = document.querySelector("#captain");
let trophies = document.querySelector("#trophies");

button.addEventListener("click" , function() {
   let winner = arr[Math.floor(Math.random()*arr.length)];

   div.style.backgroundImage = `url(${winner.logo})`;
   div.style.backgroundPosition = "center";
   div.style.backgroundSize = "cover";
   div.style.backgroundRepeat = "no-repeat";
   main.style.textContent = `Captain: ${winner.Captain}`;
   main.style.backgroundImage = `url(${winner.teamPhoto})`;
   main.style.backgroundSize = "cover";
   main.style.backgroundPosition = "center";
   captain.textContent = `Captain: ${winner.Captain}`;
   trophies.textContent = `Trophies: ${winner.Trophies}`;
   captain.style.color = winner.Primary;
   trophies.style.color = winner.Primary;
});


feather.replace();

// Toggle Mobile Navbar
const navbarNav = document.querySelector(".navbar-nav");
const hamburgerMenu = document.querySelector("#hamburger-menu");

if (hamburgerMenu) {
  hamburgerMenu.onclick = () => {
    navbarNav.classList.toggle("active");
  };
}

document.addEventListener("click", function (e) {
  if (hamburgerMenu && navbarNav) {
    if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove("active");
    }
  }
});

// Data Game VannMarket
const gamesData = [
  {
    title: "Mobile Legends: Bang Bang",
    category: "MOBA",
    description: "Top up Diamond MLBB cepat, murah, dan terpercaya. Proses instan 24 jam.",
    publisher: "Moonton",
    price: "Mulai Rp 1.500",
    image: "/assets/ml.jpeg",
    slug: "mobile-legends"
  },
  {
    title: "Free Fire",
    category: "Battle Royale",
    description: "Top up Diamond Free Fire resmi. Masukkan User ID dan diamond langsung masuk.",
    publisher: "Garena",
    price: "Mulai Rp 1.000",
    image: "/assets/freefire.png",
    slug: "free-fire"
  },
  {
    title: "PUBG Mobile",
    category: "Battle Royale",
    description: "Beli UC PUBG Mobile murah dan cepat. Dapatkan UC promo harian.",
    publisher: "Level Infinite",
    price: "Mulai Rp 10.000",
    image: "/assets/pubg.jpeg",
    slug: "pubg-mobile"
  },
  {
    title: "Genshin Impact",
    category: "RPG",
    description: "Top up Genesis Crystals dan Blessing of the Welkin Moon resmi.",
    publisher: "HoYoverse",
    price: "Mulai Rp 16.000",
    image: "/assets/genshin.jpeg",
    slug: "genshin-impact"
  }
];

function displayGames(games) {
  const courseList = document.querySelector("#course-list");
  if (!courseList) return;

  courseList.innerHTML = "";

  games.forEach((game) => {
    courseList.innerHTML += `
    <div class="menu-card">
        <img src="${game.image}" alt="${game.title}">
        <div class="menu-card-content">
            <span>${game.category}</span>
            <h3>${game.title}</h3>
            <p>${game.description}</p>
            <small>Publisher: ${game.publisher}</small>
            <strong>${game.price}</strong>
            <a href="topup.html?game=${game.slug}">
            Top Up Sekarang
            </a>
        </div>
    </div>
    `;
  });
}

// Langsung tampilkan data game lokal tanpa mengambil dari Gist
displayGames(gamesData);
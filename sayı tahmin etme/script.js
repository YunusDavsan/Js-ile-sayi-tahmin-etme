"use strict";
// 1-20 arasında bir sayı olusturuyoruz
let gizliSayi = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;
const yenilenenMesaj = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".check").addEventListener("click", function () {
  const tahmin = Number(document.querySelector(".guess").value);
  console.log(tahmin);
  // Herhangi bir tahmin yok
  if (!tahmin) {
    yenilenenMesaj("Sayı Girmediniz! 😬😬😬");
    // doğru tahmin
  } else if (tahmin === gizliSayi) {
    yenilenenMesaj("Doğru Bildiniz! 🎉🎉🎉");
    document.querySelector(".number").textContent = gizliSayi;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    // yanlış tahmin
  } else if (tahmin !== gizliSayi) {
    if (score > 1) {
      yenilenenMesaj(
        tahmin > gizliSayi
          ? "Daha Büyük Bir Sayı Tahmin Ettiniz"
          : "Daha Küçük Bir Sayı Tahmin Ettiniz"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      yenilenenMesaj("Oyunu Kaybettiniz");
      document.querySelector(".score").textContent = 0;
    }
  }
});

// Oyun tekrarı dediğimizde gelecek kısım
document.querySelector(".again").addEventListener("click", function () {
  gizliSayi = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "blue";
  document.querySelector(".number").style.width = "15rem";
});

// Ambil semua item di dalam section dompetKulit

const thumbnail = document.querySelector(".dompetKulit");
const imgUtama = document.querySelector(".img-utama");

thumbnail.addEventListener("click", function (ev) {
  // Cek apa yang sedang diklick
  if (ev.target.className == "thumb") {
    imgUtama.src = ev.target.src;
    imgUtama.classList.add("animasi-img");
    setTimeout(function () {
      imgUtama.classList.remove("animasi-img");
    }, 300);
  }
});

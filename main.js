const login = document.getElementById('login');
const nama = document.getElementById('nama');
const halaman = document.getElementById('halaman');
let audio = document.getElementById("backsound");

login.style.display='flex';
halaman.style.display='none';

login.classList.add('animate__animated', 'animate__bounceInUp',);


/** login**/
function button() {
  if (nama.value=='') {
    Swal.fire({
  position: "center",
  icon: "error",
  title: "Nama Tidak Boleh Kosong",
  showConfirmButton: false,
  timer: 2000
});
  } else {
    Swal.fire({
      position: "center",
  icon: "success",
  title: "Selamat Datang "+nama.value+" 🤗🤗",
  showConfirmButton: false,
  timer: 2000
});

window.addEventListener('click', () => {
  document.getElementById("backsound") .play();
  audio.volume = 0.5;
})
  halaman.style.display='flex';
  login.style.display ='none';
  
  }
}


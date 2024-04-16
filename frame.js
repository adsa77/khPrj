// document.getElementById('sidebarBtn').addEventListener('click', function() {
//   const sidebar = document.querySelector('.sidebar');
//   if (sidebar.style.left === '0px') {
//     sidebar.style.left = '-200px';
//   } else {
//     sidebar.style.left = '0px';
//   }
// });


const btn = document.querySelector("#sidebarBtn");
console.log(btn);
btn.addEventListener("click", e => {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("hidden");
})
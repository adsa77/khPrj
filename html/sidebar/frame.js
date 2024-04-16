const btn = document.querySelector("#sidebarBtn");
console.log(btn);
btn.addEventListener("click", e => {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("hidden");
})
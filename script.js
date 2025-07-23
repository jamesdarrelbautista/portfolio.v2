let dark = document.getElementById("dark");

dark.addEventListener("click", (event) => {
  if (event.target.id === "dark") {
    document.documentElement.classList.toggle("dark");
  }
});

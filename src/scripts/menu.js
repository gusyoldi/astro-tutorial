const menu = document.querySelector(".menu");

menu?.addEventListener("click", () => {
  console.log("Entra el clic");
  const isExpanded = menu.getAttribute("aria-expanded") === "true";
  menu.setAttribute("aria-expanded", `${!isExpanded}`);
});

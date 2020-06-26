const modalOverlay = document.querySelector(".modal-overlay");
const cursos = document.querySelectorAll(".curso");

for (let curso of cursos) {
  curso.addEventListener("click", function () {
    const cursoId = curso.getAttribute("id");
    window.location.href = `/courses/${cursoId}`;
  });
}

// document.querySelector(".close-modal").addEventListener("click", function () {
//   modalOverlay.classList.remove("active");
//   modal.classList.remove("maximize");
//   modalOverlay.querySelector("iframe").src = "";
// });

// const modal = document.querySelector(".modal");
// const maximize = document.querySelector(".maximize-modal");

// maximize.addEventListener("click", function () {
//   if (!modal.classList.contains("maximize")) {
//     modal.classList.add("maximize");
//   } else {
//     modal.classList.remove("maximize");
//   }
// });

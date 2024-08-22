function openModal(src, description) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImg");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = src;
    captionText.innerHTML = description;

    // Asegurarse de que la imagen se ajuste al contenedor del modal
    modalImg.style.maxWidth = "100%";
    modalImg.style.maxHeight = "200vh"; // Limita la altura máxima de la imagen
    modalImg.style.height = "auto";

}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}
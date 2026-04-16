// ===== MENÚ HAMBURGUESA =====
function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('active');
}

// ===== CALCULAR TOTAL DE PRODUCTOS =====
function calcularTotal() {
  let total = 0;
  document.querySelectorAll('input[type="checkbox"]:checked').forEach(item => {
    total += parseFloat(item.dataset.precio);
  });
  document.getElementById('total').innerText =
    'Total calculado: $' + total.toFixed(2);
}

// ===== EFECTO ZOOM + DESPLAZAMIENTO EN IMÁGENES =====
document.querySelectorAll('.producto-img').forEach(imagen => {

  imagen.addEventListener('mouseenter', () => {
    imagen.style.transform = 'scale(1.15) translateY(15px)';
    imagen.style.zIndex = '10';
  });

  imagen.addEventListener('mouseleave', () => {
    imagen.style.transform = 'scale(1) translateY(0)';
    imagen.style.zIndex = '1';
  });

});


// ===== PUBLICAR MENSAJES EN CONTACTO =====
const form = document.getElementById("formMensaje");
const lista = document.getElementById("listaMensajes");

// 🔹 Cargar mensajes guardados al iniciar
document.addEventListener("DOMContentLoaded", () => {
  mostrarMensajes();
});

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const titulo = document.getElementById("titulo").value;
    const contenido = document.getElementById("contenido").value;
    const nombre = document.getElementById("nombre").value;
    const contacto = document.getElementById("contacto").value;

    // 📅 Fecha y hora actual
    const fecha = new Date().toLocaleString();

    const nuevoMensaje = {
      titulo,
      contenido,
      nombre,
      contacto,
      fecha
    };

    // 🔹 Obtener mensajes guardados
    let mensajes = JSON.parse(localStorage.getItem("mensajes")) || [];

    // 🔹 Agregar nuevo mensaje
    mensajes.push(nuevoMensaje);

    // 🔹 Guardar en Local Storage
    localStorage.setItem("mensajes", JSON.stringify(mensajes));

    // 🔹 Mostrar en pantalla
    mostrarMensajes();

    form.reset();
  });
}

// 🔹 Función para mostrar mensajes
function mostrarMensajes() {
  const lista = document.getElementById("listaMensajes");

  if (!lista) return;

  lista.innerHTML = "";

  let mensajes = JSON.parse(localStorage.getItem("mensajes")) || [];

  mensajes.forEach(msg => {
    const mensaje = document.createElement("div");
    mensaje.classList.add("mensaje");

    mensaje.innerHTML = `
      <h4>${msg.titulo}</h4>
      <p>${msg.contenido}</p>
      <p><strong>${msg.nombre}</strong> | <em>${msg.contacto}</em></p>
      <p><small>${msg.fecha}</small></p>
    `;

    lista.appendChild(mensaje);
  });
}
document.addEventListener('DOMContentLoaded', function () {

  // 1. ESPECIAL DEL DÍA (Cambiar texto e imagen)
  const btnCambiar = document.getElementById('btnCambiarEspecial');
  const cardTexto = document.getElementById('cardTexto');
  const cardImagen = document.getElementById('cardImagen');
  const cardTitulo = document.getElementById('cardTitulo');

  let esOfertaEspecial = false;

  if (btnCambiar) {
    btnCambiar.addEventListener('click', function () {
      if (!esOfertaEspecial) {
        cardTitulo.textContent = '¡Combo Dragón Imperial en Descuento!';
        cardTexto.textContent = 'Incluye Chow Mein con pollo, 2 Rollos Primavera y Té Verde por solo $149 MXN (Válido solo por hoy).';
        cardImagen.src = 'chow-mein-con-pollo.jpg';

        btnCambiar.textContent = 'Volver al Especial Normal';
        btnCambiar.className = 'btn btn-outline-danger rounded-pill px-4';
        esOfertaEspecial = true;
      } else {
        cardTitulo.textContent = 'Pollo a la Naranja';
        cardTexto.textContent = 'Crujientes trozos de pollo bañados en salsa agridulce de naranja. ¡Aprovecha la promoción de hoy!';
        cardImagen.src = 'pollo-naranja.avif';

        btnCambiar.textContent = 'Ver Oferta del Momento';
        btnCambiar.className = 'btn btn-danger rounded-pill px-4';
        esOfertaEspecial = false;
      }
    });
  }

  // 2. SELECCIÓN DE PRODUCTOS (Botones 1 y 2 con classList)
  [1, 2, 3, 4].forEach(i => {
    const card = document.getElementById(`cardPlatillo${i}`);
    const texto = document.getElementById(`textoSeleccion${i}`);
    const btnSel = document.getElementById(`btnSeleccionar${i}`);
    const btnRet = document.getElementById(`btnRetirar${i}`);

    if (btnSel && btnRet && card && texto) {
      btnSel.addEventListener('click', function () {
        card.classList.add('border', 'border-success', 'border-2', 'shadow-lg');
        texto.classList.remove('d-none');
        texto.textContent = '✓ Producto seleccionado';
      });

      btnRet.addEventListener('click', function () {
        card.classList.remove('border', 'border-success', 'border-2', 'shadow-lg');
        texto.classList.add('d-none');
      });
    }
  });

  // 3. PROCESAMIENTO DEL FORMULARIO DE PEDIDO
  const formPedido = document.getElementById('formPedido');
  const alertaExitoPedido = document.getElementById('alertaExitoPedido');

  if (formPedido) {
    formPedido.addEventListener('submit', function (e) {
      e.preventDefault();

      if (alertaExitoPedido) {
        alertaExitoPedido.classList.remove('d-none');
      }

      alert('¡Pedido realizado con éxito! Tu orden ha sido enviada.');
      formPedido.reset();

      setTimeout(() => {
        if (alertaExitoPedido) {
          alertaExitoPedido.classList.add('d-none');
        }
      }, 5000);
    });
  }

  // 4. ENLACE "HACER PEDIDO" DE LA BARRA DE NAVEGACIÓN
  const linkNavPedido = document.getElementById('linkNavPedido');
  const pedidoTabButton = document.getElementById('pedido-tab');

  if (linkNavPedido && pedidoTabButton) {
    linkNavPedido.addEventListener('click', function (e) {
      e.preventDefault();
      const tabTrigger = bootstrap.Tab.getOrCreateInstance(pedidoTabButton);
      tabTrigger.show();
      document.getElementById('sec-pedido').scrollIntoView({ behavior: 'smooth' });
    });
  }

  // 5. AGREGAR IMÁGENES DINÁMICAMENTE A LA GALERÍA
  const inputUrlImagen = document.getElementById('inputUrlImagen');
  const btnAgregarImagen = document.getElementById('btnAgregarImagen');
  const galeriaImagenes = document.getElementById('galeriaImagenes');

  if (btnAgregarImagen && inputUrlImagen && galeriaImagenes) {
    btnAgregarImagen.addEventListener('click', function () {
      const url = inputUrlImagen.value.trim();

      if (url !== '') {
        const colDiv = document.createElement('div');
        colDiv.className = 'col-12 col-sm-6 col-md-4 col-lg-3';

        const nuevaImagen = document.createElement('img');
        nuevaImagen.src = url;
        nuevaImagen.alt = 'Imagen de la galería';
        nuevaImagen.className = 'img-fluid rounded-3 shadow-sm w-100';
        nuevaImagen.style.height = '200px';
        nuevaImagen.style.objectFit = 'cover';

        colDiv.appendChild(nuevaImagen);
        galeriaImagenes.appendChild(colDiv);
        inputUrlImagen.value = '';
      } else {
        alert('Por favor, ingresa una URL de imagen válida.');
      }
    });
  }

  // 6. ACTIVIDAD 1: MANEJANDO TU LISTA DE TAREAS (ELIMINAR Y AGREGAR)
  const btnEliminarTarea = document.getElementById('btnEliminarPrimer');
  const btnAgregarTarea = document.getElementById('btnAgregarTarea');
  const inputNuevaTarea = document.getElementById('inputNuevaTarea');
  const listaTareas = document.getElementById('listaTareas');

  let contadorTareas = 4;

  if (btnEliminarTarea && listaTareas) {
    // 4 y 5. addEventListener para eliminar la primera tarea usando remove()
    btnEliminarTarea.addEventListener('click', function () {
      const primerElemento = listaTareas.querySelector('li');
      if (primerElemento) {
        primerElemento.remove();
      } else {
        alert('No hay tareas pendientes en la lista para eliminar.');
      }
    });
  }

  if (btnAgregarTarea && inputNuevaTarea && listaTareas) {
    // 6. Agregar nueva tarea a la lista mediante createElement y appendChild
    btnAgregarTarea.addEventListener('click', function () {
      const texto = inputNuevaTarea.value.trim();

      if (texto !== '') {
        const nuevaLi = document.createElement('li');
        nuevaLi.textContent = `${contadorTareas}. ${texto}`;
        nuevaLi.className = 'list-group-item';
        nuevaLi.id = `tarea${contadorTareas++}`;

        listaTareas.appendChild(nuevaLi);
        inputNuevaTarea.value = '';
      } else {
        alert('Por favor, escribe una tarea antes de agregar.');
      }
    });
  }

});
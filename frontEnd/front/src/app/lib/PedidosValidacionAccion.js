// lib/pedidoActions.js
import Swal from 'sweetalert2';
import { postPedidos } from '../routes/pedidos.routes';
import { toast } from '@/components/ToastContainer';

export const handleRealizarPedido = async ({
  pedido,
  calcularTotal,
  setEnviando,
  actualizar
}) => {
  if (!setEnviando) return; // Seguridad

  // === Evitar envío múltiple ===
  if (globalThis._enviandoPedido) return;
  globalThis._enviandoPedido = true;
  setEnviando(true);

  try {
    // === Recolectar datos del DOM ===
    const archivoInput = document.querySelector('input[type="file"]');
    const archivo = archivoInput?.files?.[0];

    const nombre = document.querySelector('input[placeholder="María González Rodríguez"]')?.value?.trim() || '';
    const telefono = document.querySelector('input[placeholder="+34 612 345 678"]')?.value?.trim() || '';
    const email = document.querySelector('input[placeholder="maria.gonzalez@email.com"]')?.value?.trim() || '';
    const direccion = document.querySelector('textarea[placeholder="Calle Mayor 123, 2º A, 28001 Madrid"]')?.value?.trim() || '';
    const fecha = document.querySelector('input[type="date"]')?.value || '';
    const hora = document.querySelector('input[type="time"]')?.value || '';
    const comentarios = document.querySelector('textarea[placeholder="Instrucciones adicionales para la entrega..."]')?.value?.trim() || '';

    // === VALIDACIONES ===
    const errores = [];

    // Archivo
    if (!archivo) {
      errores.push("Debes subir un archivo.");
    } else {
      const formatos = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      const maxSize = 50 * 1024 * 1024;
      if (!formatos.includes(archivo.type)) errores.push("Formato no permitido (PDF, JPG, PNG, DOC).");
      if (archivo.size > maxSize) errores.push("Archivo excede 50MB.");
    }

    // Nombre
    if (!nombre || nombre.length < 3) errores.push("Nombre completo requerido (mín. 3 caracteres).");

    // Teléfono (AR/ES)
    const telLimpio = telefono.replace(/[\s\-\(\)]/g, '');
    const regexTel = /^(\+54[\d]{9,15}|[\d]{9,15})$/;
    if (!telLimpio || !regexTel.test(telLimpio)) {
        errores.push("Teléfono inválido. Usa +54, 15, o formato local (9 a 15 dígitos).");
    }

    // Email
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !regexEmail.test(email)) errores.push("Email inválido.");

    // Dirección
    if (!direccion || direccion.length < 10) errores.push("Dirección demasiado corta (mín. 10 caracteres).");

    // Fecha
    const hoy = new Date().toISOString().split('T')[0];
    if (!fecha || fecha < hoy) errores.push("Fecha debe ser hoy o posterior.");

    // Hora (08:00 - 20:00)
    if (!hora || hora < '08:00' || hora > '20:00') errores.push("Horario: 08:00 - 20:00.");

    // Cantidad
    if (pedido.cantidad < 1 || pedido.cantidad > 1000) errores.push("Cantidad entre 1 y 1000.");

    // === Mostrar errores ===
    if (errores.length > 0) {
      await Swal.fire({
        title: 'Corregir errores',
        html: `<ul class="text-left space-y-1 text-sm max-h-60 overflow-y-auto">${errores.map(e => `<li>• ${e}</li>`).join('')}</ul>`,
        icon: 'warning',
        confirmButtonText: 'Entendido',
        width: '36rem'
      });
      return;
    }

    // === Confirmación ===
    const { subtotal, iva, total } = calcularTotal();

    const result = await Swal.fire({
      title: '<strong>¿Confirmar Pedido?</strong>',
      icon: 'question',
      html: `
        <div class="text-left space-y-1 text-sm">
          <p><strong>Cliente:</strong> ${nombre}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Teléfono:</strong> ${telefono}</p>
          <p><strong>Entrega:</strong> ${fecha} a las ${hora}</p>
          <hr class="my-2">
          <p><strong>Tamaño:</strong> ${pedido.tamano} × ${pedido.cantidad}</p>
          <p><strong>Total:</strong> <span class="font-bold text-blue-600">€${total}</span></p>
        </div>
      `,
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#2563eb',
      cancelButtonColor: '#ef4444',
    });

    if (!result.isConfirmed) return;

    // === Enviar al backend ===
    const MAP_TAMANO = {
      "A4 (210 × 297 mm)": "A4",
      "A5 (148 × 210 mm)": "A5",
      "A3 (297 × 420 mm)": "A3",
      "Carta (216 × 279 mm)": "Carta",
      "Oficio (216 × 330 mm)": "Oficio",
    };

    const MAP_TIPO_PAPEL = {
      "Bond 80g/m²": "Bond",
      "Opalina 180g/m²": "Opalina",
      "Couché 150g/m²": "Couche",
      "Reciclado 75g/m²": "Reciclado",
    };

    const MAP_ACABADO = {
      "Mate": "Mate",
      "Brillante": "Brillante",
      "Satinado": "Satinado",
      "Texturizado": "Texturizado",
    };

    const MAP_CALIDAD = {
      "Económica": "Económica",
      "Estándar": "Estándar",
      "Alta Calidad": "Alta_Calidad",
      "Premium": "Premium",
    };

    const MAP_ORIENTACION = {
      "vertical": "VERTICAL",
      "horizontal": "HORIZONTAL",
    };

    // ==================== ARMADO DEL PEDIDO PARA DB ====================
    const pedidoDB = {
      tamano:      MAP_TAMANO[pedido.tamano],
      tipoPapel:   MAP_TIPO_PAPEL[pedido.tipoPapel],
      acabado:     MAP_ACABADO[pedido.acabado],
      calidad:     MAP_CALIDAD[pedido.calidad],
      orientacion: MAP_ORIENTACION[pedido.orientacion],

      cantidad:     pedido.cantidad,
      dobleFaz:     pedido.dobleFaz,
      encuadernado: pedido.binding,
      perforado:    pedido.perforado,
      grapado:      pedido.grapado,
      delivery:     pedido.delivery,

      subtotal:     parseFloat(subtotal),
      iva:          parseFloat(iva),
      total:        parseFloat(total),

      comentarios:    comentarios || null,
      fechaEntrega:   fecha ? new Date(`${fecha}T${hora || '12:00'}:00`) : null,
      horaEntrega:    hora || null,
      direccionEnvio: direccion || null,
      archivo:        archivo?.name || null,
    };

    // ==================== ENVÍO CON FormData ====================
    const formData = new FormData();

    formData.append('pedido', JSON.stringify(pedidoDB));

    formData.append('usuario', JSON.stringify({
      nombre,
      email,
      telefono,
      direccion
    }));

    if (archivo) {
      formData.append('archivo', archivo);
    } else {
      formData.append('archivo', ''); 
    }

    const respuesta = await postPedidos(formData);
    console.log(respuesta)

    if (respuesta.success) {
      toast("success", "¡Pedido Enviado!", "Te llegará un email con la confirmación.");

      resetearFormulario(actualizar, setEnviando);

    }else{
      toast("error", "Error", "No se pudo enviar el pedido. Revisa los datos.");
    }

  } catch (error) {
    console.error("Error inesperado:", error);
    await Swal.fire({
      title: 'Error',
      text: 'Ocurrió un problema inesperado.',
      icon: 'error'
    });
  } finally {
    globalThis._enviandoPedido = false;
    setEnviando(false);
  }
};


export const resetearFormulario = (actualizar, setEnviando) => {
    actualizar('tamano', "A4 (210 × 297 mm)");
    actualizar('tipoPapel', "Bond 80g/m²");
    actualizar('acabado', "Mate");
    actualizar('calidad', "Económica");
    actualizar('cantidad', 1);
    actualizar('orientacion', "vertical");
    actualizar('dobleFaz', false);
    actualizar('encuadernado', false);
    actualizar('perforado', false);
    actualizar('grapado', false);
    actualizar('delivery', false);
    actualizar('archivo', null);

    const inputs = [
        'input[placeholder="María González Rodríguez"]',
        'input[placeholder="+34 612 345 678"]',
        'input[placeholder="maria.gonzalez@email.com"]',
        'textarea[placeholder="Calle Mayor 123, 2º A, 28001 Madrid"]',
        'input[type="date"]',
        'input[type="time"]',
        'textarea[placeholder="Instrucciones adicionales..."]',
        'input[type="file"]',
    ];

    inputs.forEach(selector => {
        const el = document.querySelector(selector);
        if (el) {
            if (el.type === 'file') {
                el.value = ''; // Reset archivo
            } else if (el.tagName === 'TEXTAREA') {
                el.value = '';
            } else {
                el.value = '';
            }
        }
    });

    const cantidadInput = document.querySelector('input[type="number"]');
    if (cantidadInput) cantidadInput.value = '1';

    setEnviando(false);
    globalThis._enviandoPedido = false;
};
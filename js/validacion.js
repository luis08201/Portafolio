/* FIRST NAME */
const nombre = document.getElementById("contacto__input--nombre"); /*HACE LLAMADO AL INPUT */
nombre.addEventListener('input', () => { /* INPUT ES SELECCIONADO  */
  const nombreBox = document.getElementById('contacto__form--nombre');/*HACE LLAMADO AL DIV QUE CONTIENE EL INPUT */
  const nombreText = document.querySelector('.contacto__input--nombre--txt'); /* HACE LLAMADO A ETIQUETA SPAN */
  const nombreIco = document.querySelector('.contacto__input--nombre--ico'); /*HACE LLAMADO A ETIQUETA i*/
  const nombrePattern = /^[a-zA-ZÀ-ÿ\s]{1,40}$/ /* PATRON DE 40 LONG. Mayuscula, Minuscula */

  if (nombre.value.match(nombrePattern)) {  /* SI EL VALOR INGRESADO CONCUERDA CON EL PATRON */
    nombreBox.classList.add('contacto__input--valid');
    nombreBox.classList.remove('contacto__input--invalid');
    nombreIco.classList.add('fa-check-circle');
    nombreIco.classList.remove('fa-exclamation-circle');
    nombreText.innerHTML = ""
  } else if (nombre.value === '') {   /* SI LA CAJA DE TEXTO ESTA VACIA */
    nombreBox.classList.add('contacto__input--invalid');/*ELIMINA ESTILOS AL INPUT CUANDO LOS DATOS SON VALIDOS*/
    nombreBox.classList.remove('contacto__input--valid');/*AGREGA ESTILOS AL INPUT CUANDO LOS DATOS SON VALIDOS*/
    nombreIco.classList.remove('fa-check-circle');      /*ELIMINA ICONO DE VERIFICADO*/
    nombreIco.classList.add('fa-exclamation-circle');   /*AGREGA ICONO DE WARNING */
    nombreText.innerHTML = "Por favor ingrese su nombre" /* INGRESA TEXTO EN LA ETIQUETA SPAN */
  } else {/* SI NO CONCUERDA EL VALOR INGRESADO CON EL PATRON */
    nombreBox.classList.add('contacto__input--invalid');/*ELIMINA ESTILOS AL INPUT CUANDO LOS DATOS SON VALIDOS*/
    nombreBox.classList.remove('contacto__input--valid');/*AGREGA ESTILOS AL INPUT CUANDO LOS DATOS SON VALIDOS*/
    nombreIco.classList.remove('fa-check-circle');      /*ELIMINA ICONO DE VERIFICADO*/
    nombreIco.classList.add('fa-exclamation-circle');   /*AGREGA ICONO DE WARNING */
    nombreText.innerHTML = "Por favor ingrese su nombre "
  }
})


/*EMAIL*/
const email = document.getElementById("contacto__input--correo");
email.addEventListener('input', () => {
  const emailBox = document.getElementById('contacto__form--correo');
  const emailText = document.querySelector('.contacto__input--correo--txt');
  const emailIco = document.querySelector('.contacto__input--correo--ico');
  const emailPattern = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/
  if (email.value.match(emailPattern)) {
    emailBox.classList.add('contacto__input--valid');
    emailBox.classList.remove('contacto__input--invalid');
    emailIco.classList.add('fa-check-circle');
    emailIco.classList.remove('fa-exclamation-circle');
    emailText.innerHTML = ""
  } else if (email.value === '') {
    emailBox.classList.add('contacto__input--invalid');/*ELIMINA ESTILOS AL INPUT CUANDO LOS DATOS SON VALIDOS*/
    emailBox.classList.remove('contacto__input--valid');/*AGREGA ESTILOS AL INPUT CUANDO LOS DATOS SON VALIDOS*/
    emailIco.classList.remove('fa-check-circle');      /*ELIMINA ICONO DE VERIFICADO*/
    emailIco.classList.add('fa-exclamation-circle');   /*AGREGA ICONO DE WARNING */
    emailText.innerHTML = "Por favor ingrese su correo" /* INGRESA TEXTO EN LA ETIQUETA SPAN */
  } else {
    emailBox.classList.add('contacto__input--invalid');/*ELIMINA ESTILOS AL INPUT CUANDO LOS DATOS SON VALIDOS*/
    emailBox.classList.remove('contacto__input--valid');/*AGREGA ESTILOS AL INPUT CUANDO LOS DATOS SON VALIDOS*/
    emailIco.classList.remove('fa-check-circle');      /*ELIMINA ICONO DE VERIFICADO*/
    emailIco.classList.add('fa-exclamation-circle');   /*AGREGA ICONO DE WARNING */
    emailText.innerHTML = "Ops!, vuelva a intentarlo" /* INGRESA TEXTO EN LA ETIQUETA SPAN */
  } 
})

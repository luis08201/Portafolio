 const $form = document.querySelector('#form');
        $form.addEventListener('submit', handleSubmit)
         async  function handleSubmit(event) {
            event.preventDefault();
            const form = new FormData(this)
            const response = await fetch(this.action, {
                method: this.method,
                body: form,
                headers: {
                    'Accept': 'application/json'
                }
            })
            if(response.ok){
                this.reset();
                 const nombreIco = document.querySelector('.contacto__input--nombre--ico');
                 const emailIco = document.querySelector('.contacto__input--correo--ico');
                 emailIco.classList.remove('fa-check-circle');
                nombreIco.classList.remove('fa-check-circle');
                cargarModal();
            }
        }
 

/* MODAL */
const btnclose = document.getElementById('modal__formulario--btn');
const vtn = document.getElementById('ventana');


btnclose.addEventListener('click', () =>{
  vtn.style.display = "none";
})

function cargarModal(){  
  vtn.style.display = "flex";
}



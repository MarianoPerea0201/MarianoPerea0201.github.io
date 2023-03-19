const parentContainer =  document.querySelector('.lado_derecho');

parentContainer.addEventListener('click', event=>{

    const current = event.target;

    const isReadMoreBtn = current.className.includes('ver-mas-boton');

    if(!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.ver-mas-texto');

    currentText.classList.toggle('ver-mas-texto--show');

    current.textContent = current.textContent.includes('Ver Mas') ? "Ver Menos..." : "Ver Mas...";

})
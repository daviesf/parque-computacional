// Placeholder
const tipoSelect = document.querySelector('select[name="tipo"]')
tipoSelect.addEventListener('change', () => {
  if (tipoSelect.value === '') {
    tipoSelect.classList.add('placeholder')
  } else {
    tipoSelect.classList.remove('placeholder')
  }
})

// Filtro
const accordions = document.querySelectorAll('.accordion')

accordions.forEach((accordion) => {
  const accordionHeader = accordion.querySelector('.accordion-header')
  accordionHeader.addEventListener('click', () => {
    accordion.classList.toggle('active')
  })
})
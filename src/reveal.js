// Reveal on-scroll. Observa .surge e solta a animação quando entra na tela.
// A classe html.js-anim (posta no index.html) é o que pausa a animação —
// se este script não rodar, tudo aparece estático em vez de sumir.
export function iniciarReveal() {
  if (typeof IntersectionObserver === 'undefined') {
    document.documentElement.classList.remove('js-anim')
    return () => {}
  }
  const io = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visivel')
          io.unobserve(e.target)
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -10% 0px' },
  )
  document.querySelectorAll('.surge:not(.visivel)').forEach((el) => io.observe(el))
  return () => io.disconnect()
}

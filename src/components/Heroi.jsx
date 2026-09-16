import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { cliente, whatsappLink } from '../config'

// Parallax do fundo, limitado para nunca expor a borda da foto.
// requestAnimationFrame para não travar o scroll no mobile.
function useParallax(ref) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let pendente = false
    const mover = () => {
      const y = window.scrollY
      if (y > 900) return
      const deslocamento = Math.min(y * 0.22, 140)
      el.style.transform = `translate3d(0, ${deslocamento}px, 0) scale(1.12)`
    }
    const aoRolar = () => {
      if (pendente) return
      pendente = true
      window.requestAnimationFrame(() => {
        mover()
        pendente = false
      })
    }
    mover()
    window.addEventListener('scroll', aoRolar, { passive: true })
    return () => window.removeEventListener('scroll', aoRolar)
  }, [ref])
}

export default function Heroi() {
  const fundo = useRef(null)
  useParallax(fundo)

  return (
    <section id="topo" className="relative isolate overflow-hidden bg-tinta">
      <div
        ref={fundo}
        className="absolute inset-0 -z-10 will-change-transform"
        aria-hidden="true"
      >
        <img
          src={`${import.meta.env.BASE_URL}img/ponto-avenida.webp`}
          alt=""
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
      </div>
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-tinta/85 via-tinta/75 to-tinta"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1400px] px-6 pb-24 pt-24 lg:px-12 lg:pb-36 lg:pt-32">
        <p className="surge font-display text-xs uppercase tracking-[0.3em] text-azul">
          Mídia exterior · {cliente.cidade}/{cliente.uf}
        </p>

        <h1
          className="surge mt-6 max-w-4xl font-display text-[2.6rem] font-600 uppercase leading-[0.95] text-white sm:text-6xl lg:text-7xl"
          style={{ animationDelay: '0.1s' }}
        >
          Nós levamos sua marca
          <br />
          <span className="text-azul">para onde tudo acontece</span>
        </h1>

        <p
          className="surge mt-8 max-w-2xl text-lg leading-relaxed text-white/75"
          style={{ animationDelay: '0.2s' }}
        >
          Anúncio em rede social some quando a pessoa rola a tela. O painel na avenida
          continua lá — no mesmo trajeto, todo dia, para todo mundo que passa. É essa
          a mídia que a {cliente.nome} opera em {cliente.cidade}.
        </p>

        <div
          className="surge mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          style={{ animationDelay: '0.3s' }}
        >
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-azul px-8 py-4 font-display text-sm uppercase tracking-[0.18em] text-white transition hover:bg-azul-claro hover:shadow-[0_0_40px_-8px] hover:shadow-azul focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-tinta"
          >
            Pedir orçamento
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#formatos"
            className="inline-flex items-center justify-center rounded-full border border-white/25 px-8 py-4 font-display text-sm uppercase tracking-[0.18em] text-white/85 transition hover:border-azul hover:text-azul"
          >
            Ver os formatos
          </a>
        </div>

        <p
          className="surge mt-12 font-accent text-lg italic text-white/55"
          style={{ animationDelay: '0.4s' }}
        >
          “{cliente.tagline}”
        </p>
      </div>

      <div className="border-t border-white/10 bg-tinta/70 backdrop-blur-sm">
        <dl className="mx-auto grid max-w-[1400px] grid-cols-1 divide-y divide-white/10 px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-12">
          {[
            ['Alta visibilidade', 'Formato grande em ponto de fluxo — não dá pra fechar, pular ou bloquear.'],
            ['Pontos estratégicos', 'Painéis nos corredores que o seu cliente já percorre todo dia.'],
            ['Resultados que aparecem', 'Você recebe a foto do seu anúncio instalado, com data e local.'],
          ].map(([titulo, texto], i) => (
            <div key={titulo} className="surge py-8 sm:px-8" style={{ animationDelay: `${0.5 + i * 0.1}s` }}>
              <dt className="font-display text-sm uppercase tracking-[0.18em] text-azul">{titulo}</dt>
              <dd className="mt-3 text-sm leading-relaxed text-white/65">{texto}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

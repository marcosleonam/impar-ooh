import { ArrowRight, Mail } from 'lucide-react'
import { cliente, whatsappLink } from '../config'

// lucide-react v1 não traz mais ícones de marca — Instagram vai inline.
function IconeInstagram(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
         strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export default function Contato() {
  return (
    <section id="contato" className="relative isolate overflow-hidden bg-navy py-24 lg:py-32">
      {/* Imagem em vez de background-image: assim o navegador respeita o
          loading="lazy" e não baixa 69 kB de enfeite na primeira dobra. */}
      <img
        src={`${import.meta.env.BASE_URL}img/ponto-calhau.webp`}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 -z-10 bg-navy/85" aria-hidden="true" />

      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <h2 className="surge max-w-3xl font-display text-4xl uppercase leading-[1.02] text-white lg:text-6xl">
          Sua marca em destaque
          <br />
          <span className="text-azul">onde todo mundo vê.</span>
        </h2>
        <p className="surge mt-6 max-w-xl leading-relaxed text-white/75">
          Conte o que você precisa vender e em que região está o seu cliente. A gente
          responde com o formato, o ponto e o valor — sem enrolação.
        </p>

        <div className="surge mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-azul px-8 py-4 font-display text-sm uppercase tracking-[0.18em] text-white transition hover:bg-azul-claro hover:shadow-[0_0_40px_-8px] hover:shadow-azul focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
          >
            Falar no WhatsApp
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={`mailto:${cliente.email}`}
            className="inline-flex items-center justify-center gap-3 rounded-full border border-white/25 px-8 py-4 font-display text-sm uppercase tracking-[0.18em] text-white/85 transition hover:border-azul hover:text-azul"
          >
            <Mail size={18} />
            {cliente.email}
          </a>
        </div>

        <div className="surge mt-14 grid gap-8 border-t border-white/15 pt-10 sm:grid-cols-3">
          <div>
            <p className="font-display text-xs uppercase tracking-[0.24em] text-azul">
              Atendimento
            </p>
            <p className="mt-3 text-white/80">{cliente.decisor}</p>
            <p className="text-sm text-white/50">{cliente.decisorCargo}</p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex min-h-11 items-center text-sm text-white/60 transition hover:text-azul"
            >
              {cliente.telefoneExibicao}
            </a>
          </div>
          <div>
            <p className="font-display text-xs uppercase tracking-[0.24em] text-azul">Praça</p>
            <p className="mt-3 text-white/80">
              {cliente.cidade}/{cliente.uf}
            </p>
            <p className="text-sm text-white/50">e região metropolitana</p>
          </div>
          <div>
            <p className="font-display text-xs uppercase tracking-[0.24em] text-azul">
              Acompanhe
            </p>
            <a
              href={cliente.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex min-h-11 items-center gap-2 text-white/80 transition hover:text-azul"
            >
              <IconeInstagram width="18" height="18" />@{cliente.instagram}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

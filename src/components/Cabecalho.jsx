import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cliente, whatsappLink } from '../config'

const LINKS = [
  { href: '#formatos', rotulo: 'Formatos' },
  { href: '#pontos', rotulo: 'Pontos' },
  { href: '#como-funciona', rotulo: 'Como funciona' },
  { href: '#a-marca', rotulo: 'A marca' },
  { href: '#contato', rotulo: 'Contato' },
]

export default function Cabecalho() {
  const [aberto, setAberto] = useState(false)
  const [rolou, setRolou] = useState(false)

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 24)
    aoRolar()
    window.addEventListener('scroll', aoRolar, { passive: true })
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${
        rolou
          ? 'border-navy/10 bg-papel/90 backdrop-blur-md'
          : 'border-transparent bg-papel'
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center gap-6 px-6 py-4 lg:px-12">
        <a href="#topo" className="shrink-0" aria-label={`${cliente.nomeCompleto} — início`}>
          <img
            src={`${import.meta.env.BASE_URL}img/logo.png`}
            alt={cliente.nomeCompleto}
            className="h-9 w-auto md:h-11"
            width="520"
            height="301"
          />
        </a>

        <nav className="hidden flex-1 justify-center gap-10 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-display text-sm uppercase tracking-[0.18em] text-navy/70 transition-colors hover:text-azul"
            >
              {l.rotulo}
            </a>
          ))}
        </nav>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto hidden rounded-full bg-azul px-6 py-3 font-display text-xs uppercase tracking-[0.18em] text-white transition hover:bg-navy focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 md:inline-block"
        >
          Pedir orçamento
        </a>

        <button
          type="button"
          onClick={() => setAberto((v) => !v)}
          className="-mr-2 ml-auto flex h-11 w-11 items-center justify-center text-navy md:hidden"
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={aberto}
        >
          {aberto ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {aberto && (
        <nav className="border-t border-navy/10 bg-papel px-6 pb-6 md:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setAberto(false)}
              className="block border-b border-navy/5 py-4 font-display text-sm uppercase tracking-[0.18em] text-navy/80"
            >
              {l.rotulo}
            </a>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 block rounded-full bg-azul px-6 py-4 text-center font-display text-xs uppercase tracking-[0.18em] text-white"
          >
            Pedir orçamento
          </a>
        </nav>
      )}
    </header>
  )
}

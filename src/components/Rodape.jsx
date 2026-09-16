import { cliente } from '../config'

export default function Rodape() {
  return (
    <footer className="border-t-4 border-azul bg-tinta px-6 pb-10 pt-16 lg:px-12">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <picture>
            <source srcSet={`${import.meta.env.BASE_URL}img/logo.webp`} type="image/webp" />
            <img
              src={`${import.meta.env.BASE_URL}img/logo.png`}
              alt={cliente.nomeCompleto}
              className="h-12 w-auto brightness-0 invert"
              width="276"
              height="160"
            />
          </picture>
          <p className="mt-5 max-w-sm font-accent text-lg italic text-white/45">
            “{cliente.tagline}”
          </p>
        </div>

        <div className="text-sm text-white/50 md:text-right">
          <p>
            {cliente.cidade}/{cliente.uf} · {cliente.telefoneExibicao}
          </p>
          <p className="mt-1">{cliente.email}</p>
          <p className="mt-2">
            <a
              href={cliente.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center transition hover:text-azul md:justify-end"
            >
              @{cliente.instagram}
            </a>
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-[1400px] border-t border-white/10 pt-6">
        <p className="text-xs text-white/35">
          © {new Date().getFullYear()} {cliente.nomeCompleto}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}

import { cliente, marca } from '../config'

export default function AMarca() {
  return (
    <section id="a-marca" className="bg-papel py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-24">
          <div>
            <p className="surge font-display text-xs uppercase tracking-[0.3em] text-azul">
              A marca
            </p>
            <h2 className="surge mt-5 font-display text-4xl uppercase leading-[1.02] text-navy lg:text-6xl">
              Você já viu
              <br />
              nossos painéis.
              <br />
              <span className="text-navy/40">Com outro nome.</span>
            </h2>

            <div className="surge mt-8 space-y-5 leading-relaxed text-navy/75">
              {marca.texto.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>

            <p className="surge mt-8 font-accent text-xl italic text-azul">
              “{cliente.tagline}”
            </p>
          </div>

          <div className="surge">
            <p className="font-display text-xs uppercase tracking-[0.24em] text-navy/45">
              O que mudou junto com o nome
            </p>
            <ul className="mt-6 space-y-px overflow-hidden rounded-2xl bg-navy/10">
              {marca.mudancas.map((m) => (
                <li key={m.titulo} className="bg-papel-claro p-6 lg:p-7">
                  <h3 className="font-display text-base uppercase tracking-wide text-navy">
                    {m.titulo}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/70">{m.texto}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

import { etapas } from '../config'

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="bg-papel-claro py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div>
            <p className="surge font-display text-xs uppercase tracking-[0.3em] text-azul">
              Como funciona
            </p>
            <h2 className="surge mt-5 font-display text-4xl uppercase leading-[1.02] text-navy lg:text-6xl">
              Você aprova
              <br />
              a arte.
              <br />
              <span className="text-navy/40">O resto é com a gente.</span>
            </h2>
            <p className="surge mt-6 max-w-md leading-relaxed text-navy/70">
              Mídia exterior tem fama de ser complicada: autorização, impressão, guindaste,
              equipe. Nada disso é problema seu. Da escolha do ponto à foto do painel
              instalado, quem carrega é a ímpar.
            </p>
          </div>

          <ol className="space-y-px overflow-hidden rounded-2xl bg-navy/10">
            {etapas.map((e, i) => (
              <li
                key={e.n}
                className="surge bg-papel-claro p-8 transition-colors hover:bg-white lg:p-10"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="flex gap-6">
                  <span className="font-display text-3xl leading-none text-azul/40">{e.n}</span>
                  <div>
                    <h3 className="font-display text-xl uppercase leading-tight text-navy">
                      {e.titulo}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-navy/70">{e.texto}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

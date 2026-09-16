import { formatos } from '../config'

export default function Formatos() {
  return (
    <section id="formatos" className="bg-papel py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <p className="surge font-display text-xs uppercase tracking-[0.3em] text-azul">
          O que a ímpar opera
        </p>
        <h2 className="surge mt-5 max-w-3xl font-display text-4xl uppercase leading-[1.02] text-navy lg:text-6xl">
          Sete formatos.
          <br />
          <span className="text-navy/45">Um critério só: onde o seu público passa.</span>
        </h2>
        <p className="surge mt-6 max-w-2xl leading-relaxed text-navy/70">
          Cada formato resolve um problema diferente. Outdoor constrói memória, LED muda a
          mensagem no mesmo dia, backbus persegue o público em vez de esperar por ele. A
          escolha certa depende do que você precisa vender — e é essa conversa que a gente
          tem antes de falar de preço.
        </p>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-navy/10 sm:grid-cols-2 lg:grid-cols-3">
          {formatos.map((f, i) => (
            <article
              key={f.id}
              className="surge group flex flex-col bg-papel-claro p-8 transition-colors hover:bg-white lg:p-10"
              style={{ animationDelay: `${Math.min(i, 5) * 0.07}s` }}
            >
              <span className="font-display text-xs uppercase tracking-[0.28em] text-azul">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-5 font-display text-2xl uppercase leading-tight text-navy">
                {f.nome}
              </h3>
              <p className="mt-2 font-accent text-lg italic text-navy/55">{f.resumo}</p>
              <p className="mt-5 text-sm leading-relaxed text-navy/70">{f.texto}</p>
              <span
                className="mt-8 block h-px w-12 bg-azul transition-all duration-500 group-hover:w-full"
                aria-hidden="true"
              />
            </article>
          ))}

          <article className="surge flex flex-col justify-center bg-navy p-8 lg:p-10">
            <h3 className="font-display text-2xl uppercase leading-tight text-white">
              Não sabe qual
              <br />
              <span className="text-azul">é o seu?</span>
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-white/70">
              Descreve o que você precisa vender e em que bairro está o seu cliente. A gente
              indica o formato e o ponto — sem compromisso.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

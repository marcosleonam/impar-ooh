import { pontos } from '../config'

export default function Pontos() {
  return (
    <section id="pontos" className="bg-tinta py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <p className="surge font-display text-xs uppercase tracking-[0.3em] text-azul">
          Pontos em São Luís
        </p>
        <h2 className="surge mt-5 max-w-3xl font-display text-4xl uppercase leading-[1.02] text-white lg:text-6xl">
          Não é maquete.
          <br />
          <span className="text-white/40">É a nossa mídia, na rua, agora.</span>
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {pontos.map((p, i) => (
            <figure
              key={p.img}
              className={`surge group relative overflow-hidden rounded-2xl bg-navy ${
                i === 0 ? 'md:col-span-2' : ''
              }`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <img
                src={`${import.meta.env.BASE_URL}img/${p.img}`}
                alt={p.legenda}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] ${
                  i === 0 ? 'h-[300px] md:h-[460px]' : 'h-[260px] md:h-[340px]'
                }`}
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-tinta via-tinta/70 to-transparent px-6 pb-6 pt-16">
                <span className="font-display text-sm uppercase tracking-[0.16em] text-white">
                  {p.legenda}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="surge mt-10 max-w-2xl text-sm leading-relaxed text-white/55">
          Fotos de pontos reais operados pela ímpar. A disponibilidade muda a cada bissemana —
          fale com a gente para receber o mapa dos pontos livres na data da sua campanha.
        </p>
      </div>
    </section>
  )
}

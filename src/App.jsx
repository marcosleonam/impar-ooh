import { useEffect } from 'react'
import Cabecalho from './components/Cabecalho'
import Heroi from './components/Heroi'
import Formatos from './components/Formatos'
import Pontos from './components/Pontos'
import ComoFunciona from './components/ComoFunciona'
import AMarca from './components/AMarca'
import Contato from './components/Contato'
import Rodape from './components/Rodape'
import BotaoWhatsApp from './components/BotaoWhatsApp'
import { iniciarReveal } from './reveal'

export default function App() {
  useEffect(() => iniciarReveal(), [])

  return (
    <>
      <Cabecalho />
      <main>
        <Heroi />
        <Formatos />
        <Pontos />
        <ComoFunciona />
        <AMarca />
        <Contato />
      </main>
      <Rodape />
      <BotaoWhatsApp />
    </>
  )
}

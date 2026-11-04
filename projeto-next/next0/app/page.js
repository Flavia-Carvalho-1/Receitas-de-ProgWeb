import Link from 'next/link'

// Funções exportadas SEM default (Exercício 2).
// Podem ser importadas por outros arquivos com: import { Menu, Rodape } from '../page'

export function Menu() {
    return (
        <nav className="menu">
            <Link href="/">Início</Link>
            <Link href="/rota1">Rota 1</Link>
            <Link href="/rota2">Rota 2</Link>
        </nav>
    )
}

export function Rodape() {
    return (
        <footer className="rodape">
            <hr />
            <small>Receita 13 - Next JS</small>
        </footer>
    )
}

// Esta é a página da rota "/" (exportada por default)
export default function Home() {
    return (
        <div>
            <Menu />
            <main className="cartao">
                <div className="subtitulo">Menu principal</div>
                <h1>
                    Viva Santana!
                </h1>
            </main>
            <Rodape />
        </div>
    )
}

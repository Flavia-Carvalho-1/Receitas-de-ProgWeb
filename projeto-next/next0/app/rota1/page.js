import { Menu, Rodape } from '../page'

// Página da rota "/rota1"
export default function Rota1() {
    return (
        <div>
            <Menu />
            <main className="cartao">
                <h1>Rota 1</h1>
                <p>Esta página fica em <code>app/rota1/page.js</code></p>
            </main>
            <Rodape />
        </div>
    )
}

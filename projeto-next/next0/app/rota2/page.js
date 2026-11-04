import { Menu, Rodape } from '../page'

// Página da rota "/rota2"
export default function Rota2() {
    return (
        <div>
            <Menu />
            <main className="cartao">
                <h1>Rota 2</h1>
                <p>Esta página fica em <code>app/rota2/page.js</code></p>
            </main>
            <Rodape />
        </div>
    )
}

import './globals.css'

export const metadata = {
  title: 'Receita 13 - Next JS',
  description: 'Rotas com Next JS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}

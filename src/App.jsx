import './App.css'
import VTuberCat from './components/VTuberCat'

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>🐦‍⬛ 조선 까마귀 버튜버 🏯</h1>
        <p>한양에서 온 지혜로운 까마귀가 전하는 이야기! 까악까악! 📜✨</p>
      </header>

      <main className="main">
        <div id="vtuber-container">
          <VTuberCat />
        </div>
      </main>

      <footer className="footer">
        <p>© 2024 고양이 버튜버. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App

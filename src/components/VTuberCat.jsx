import catVtuberSvg from '../assets/images/cat-vtuber.svg'
import '../styles/vtuber-animations.css'
import { useAnimation } from '../hooks/useAnimation'

const VTuberCat = () => {
  const {
    isActive,
    animationSpeed,
    currentMessage,
    toggleAnimation,
    nextMessage,
    prevMessage,
    changeSpeed,
    currentMessageIndex,
    totalMessages
  } = useAnimation()

  const handleSpeedChange = (event) => {
    changeSpeed(parseFloat(event.target.value))
  }

  return (
    <div className="vtuber-container">
      <div className="speech-bubble">
        <p>{currentMessage}</p>
        <div className="message-counter">
          {currentMessageIndex + 1} / {totalMessages}
        </div>
      </div>

      <div
        className={`cat-vtuber ${isActive ? 'dancing' : 'idle'}`}
        onClick={toggleAnimation}
        style={{
          animationDuration: isActive ? `${2 / animationSpeed}s` : '3s'
        }}
      >
        <img
          src={catVtuberSvg}
          alt="귀여운 고양이 버튜버"
          draggable="false"
        />
      </div>

      <div className="controls">
        <button
          className="control-btn prev"
          onClick={prevMessage}
          aria-label="이전 메시지"
        >
          ⏮️
        </button>

        <button
          className={`control-btn ${isActive ? 'stop' : 'play'}`}
          onClick={toggleAnimation}
          aria-label={isActive ? "애니메이션 정지" : "애니메이션 시작"}
        >
          {isActive ? "⏸️" : "▶️"}
        </button>

        <button
          className="control-btn next"
          onClick={nextMessage}
          aria-label="다음 메시지"
        >
          ⏭️
        </button>
      </div>

      <div className="speed-control">
        <label htmlFor="speed-slider">속도: {animationSpeed}x</label>
        <input
          id="speed-slider"
          type="range"
          min="0.5"
          max="3"
          step="0.5"
          value={animationSpeed}
          onChange={handleSpeedChange}
          className="speed-slider"
        />
      </div>

      <div className="status-indicator">
        <div className={`status-dot ${isActive ? 'active' : 'inactive'}`}></div>
        <span>{isActive ? "Live" : "Offline"}</span>
      </div>

      <div className="keyboard-help">
        <p>키보드 단축키: Space(재생/정지), ←→(메시지), ↑↓(속도)</p>
      </div>
    </div>
  )
}

export default VTuberCat
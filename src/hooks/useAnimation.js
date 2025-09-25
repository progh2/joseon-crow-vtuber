import { useState, useEffect, useCallback } from 'react'

export const useAnimation = () => {
  const [isActive, setIsActive] = useState(true)
  const [animationSpeed, setAnimationSpeed] = useState(1)
  const [currentMessage, setCurrentMessage] = useState(0)

  const messages = [
    "까악! 조선에서 온 까마귀다! 🐦‍⬛",
    "한양 궁궐의 소식을 전해주마! 🏯",
    "까악까악! 오늘 날씨 참 좋구나~ ☀️",
    "충신들이여! 구독을 부탁한다! 📜",
    "매화꽃이 피었구나~ 🌸",
    "훈민정음을 아는가? ㄱㄴㄷㄹ! 📝",
    "대동강 물이 맑다는구나! 🌊",
    "까악! 다시 만나자꾸나! 👋"
  ]

  const toggleAnimation = useCallback(() => {
    setIsActive(prev => !prev)
  }, [])

  const nextMessage = useCallback(() => {
    setCurrentMessage(prev => (prev + 1) % messages.length)
  }, [messages.length])

  const prevMessage = useCallback(() => {
    setCurrentMessage(prev => (prev - 1 + messages.length) % messages.length)
  }, [messages.length])

  const changeSpeed = useCallback((speed) => {
    setAnimationSpeed(Math.max(0.5, Math.min(3, speed)))
  }, [])

  useEffect(() => {
    if (!isActive) return

    const messageInterval = setInterval(() => {
      nextMessage()
    }, 3000 / animationSpeed)

    return () => clearInterval(messageInterval)
  }, [isActive, animationSpeed, nextMessage])

  useEffect(() => {
    const handleKeyboard = (event) => {
      switch (event.key) {
        case ' ':
          event.preventDefault()
          toggleAnimation()
          break
        case 'ArrowLeft':
          event.preventDefault()
          prevMessage()
          break
        case 'ArrowRight':
          event.preventDefault()
          nextMessage()
          break
        case 'ArrowUp':
          event.preventDefault()
          changeSpeed(animationSpeed + 0.5)
          break
        case 'ArrowDown':
          event.preventDefault()
          changeSpeed(animationSpeed - 0.5)
          break
        default:
          break
      }
    }

    window.addEventListener('keydown', handleKeyboard)
    return () => window.removeEventListener('keydown', handleKeyboard)
  }, [toggleAnimation, nextMessage, prevMessage, changeSpeed, animationSpeed])

  return {
    isActive,
    animationSpeed,
    currentMessage: messages[currentMessage],
    toggleAnimation,
    nextMessage,
    prevMessage,
    changeSpeed,
    totalMessages: messages.length,
    currentMessageIndex: currentMessage
  }
}
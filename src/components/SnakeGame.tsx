import { useState, useEffect, useRef } from 'react'
import { Button } from './ui/button'
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react'

const CELL_SIZE = 20
const GRID_SIZE = {
    SMALL: 15,
    MEDIUM: 20,
    LARGE: 25,
}

const INITIAL_SNAKE = [{ x: 10, y: 10 }]
const INITIAL_FOOD = { x: 5, y: 5 }
const INITIAL_DIRECTION = { x: 1, y: 0 }

export default function SnakeGame() {
    const [snake, setSnake] = useState(INITIAL_SNAKE)
    const [food, setFood] = useState(INITIAL_FOOD)
    const [direction, setDirection] = useState(INITIAL_DIRECTION)
    const [gameOver, setGameOver] = useState(false)
    const [score, setScore] = useState(0)
    const [gridSize, setGridSize] = useState(GRID_SIZE.MEDIUM)
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setGridSize(GRID_SIZE.SMALL)
            } else if (window.innerWidth < 1024) {
                setGridSize(GRID_SIZE.MEDIUM)
            } else {
                setGridSize(GRID_SIZE.LARGE)
            }
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            switch (e.key) {
                case 'ArrowUp':
                    setDirection({ x: 0, y: -1 })
                    break
                case 'ArrowDown':
                    setDirection({ x: 0, y: 1 })
                    break
                case 'ArrowLeft':
                    setDirection({ x: -1, y: 0 })
                    break
                case 'ArrowRight':
                    setDirection({ x: 1, y: 0 })
                    break
            }
        }

        window.addEventListener('keydown', handleKeyPress)
        return () => window.removeEventListener('keydown', handleKeyPress)
    }, [])

    useEffect(() => {
        if (gameOver) return

        const moveSnake = () => {
            const newSnake = [...snake]
            const head = { ...newSnake[0] }

            head.x += direction.x
            head.y += direction.y

            if (head.x < 0 || head.x >= gridSize || head.y < 0 || head.y >= gridSize) {
                setGameOver(true)
                return
            }

            if (newSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
                setGameOver(true)
                return
            }

            newSnake.unshift(head)

            if (head.x === food.x && head.y === food.y) {
                setScore(prevScore => prevScore + 1)
                setFood({
                    x: Math.floor(Math.random() * gridSize),
                    y: Math.floor(Math.random() * gridSize),
                })
            } else {
                newSnake.pop()
            }

            setSnake(newSnake)
        }

        const gameLoop = setInterval(moveSnake, 100)
        return () => clearInterval(gameLoop)
    }, [snake, direction, food, gameOver, gridSize])

    useEffect(() => {
        if (!canvasRef.current) return

        const ctx = canvasRef.current.getContext('2d')
        if (!ctx) return

        ctx.clearRect(0, 0, gridSize * CELL_SIZE, gridSize * CELL_SIZE)

        // Draw snake
        ctx.fillStyle = '#4CAF50'
        snake.forEach(segment => {
            ctx.fillRect(segment.x * CELL_SIZE, segment.y * CELL_SIZE, CELL_SIZE, CELL_SIZE)
        })

        // Draw food
        ctx.fillStyle = '#FF5722'
        ctx.fillRect(food.x * CELL_SIZE, food.y * CELL_SIZE, CELL_SIZE, CELL_SIZE)
    }, [snake, food, gridSize])

    const resetGame = () => {
        setSnake(INITIAL_SNAKE)
        setFood(INITIAL_FOOD)
        setDirection(INITIAL_DIRECTION)
        setGameOver(false)
        setScore(0)
    }

    const handleJoystickClick = (newDirection: { x: number; y: number }) => {
        setDirection(newDirection)
    }

    return (
        <div className="flex flex-col items-center space-y-4">
            {gameOver && (
                <div className="flex flex-col items-center space-y-2">
                    <div className="text-xl font-bold text-red-500">Game Over!</div>
                </div>
            )}
            <canvas
                ref={canvasRef}
                width={gridSize * CELL_SIZE}
                height={gridSize * CELL_SIZE}
                className="border border-gray-300 max-w-full"
            />
            { gameOver && (
                <Button onClick={resetGame}>Start</Button>
            )}
            <div className="text-lg font-semibold">Score: {score}</div>
            <div className="grid grid-cols-3 gap-2 mt-4">
                <div></div>
                <Button size="icon" onClick={() => handleJoystickClick({ x: 0, y: -1 })}>
                    <ArrowUp className="h-4 w-4" />
                </Button>
                <div></div>
                <Button size="icon" onClick={() => handleJoystickClick({ x: -1, y: 0 })}>
                    <ArrowLeft className="h-4 w-4" />
                </Button>
                <div></div>
                <Button size="icon" onClick={() => handleJoystickClick({ x: 1, y: 0 })}>
                    <ArrowRight className="h-4 w-4" />
                </Button>
                <div></div>
                <Button size="icon" onClick={() => handleJoystickClick({ x: 0, y: 1 })}>
                    <ArrowDown className="h-4 w-4" />
                </Button>
                <div></div>
            </div>
        </div>
    )
}
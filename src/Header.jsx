export default function Header({ score, bestScore }) {
    return (
        <>
            <header>
                <h1>Memory Card Game</h1>
                <ul className="score-board">
                    <li>
                        <span>Score:</span>
                        <span>{score}</span>
                    </li>
                    <li>
                        <span>Best Score:</span>
                        <span>{bestScore}</span>
                    </li>
                </ul>
            </header>
            <p>Get points by clicking am image which is not already clicked</p>
        </>
    )
}
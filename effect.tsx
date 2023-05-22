import React, { useState, useEffect } from "react"

function Page() {
    const initialLetters = ["T", "E", "S", "T"] // input text herre
    const [letters, setLetters] = useState(initialLetters)

    useEffect(() => {
        const newLetters = [...letters]
        newLetters.forEach((letter, index) => {
            if (Math.random() < 0.2) {
                newLetters[index] = Math.round(Math.random()).toString()
            }
        })
        setLetters(newLetters)

        const timerIds = letters.map((letter, i) => {
            return setInterval(() => {
                setLetters((prevLetters) => {
                    const newLetters = [...prevLetters]
                    if (newLetters[i] === letter) {
                        newLetters[i] = Math.round(Math.random()).toString()
                    } else {
                        newLetters[i] = letter
                    }
                    return newLetters
                })
            }, Math.floor(Math.random() * 5000) + 3000)
        })

        return () => {
            timerIds.forEach((id) => clearInterval(id))
        }
    }, [])

    return (
        <div
            style={{
                color: "white",
                textAlign: "left",
                fontFamily: "monospace",
                display: "flex",
                justifyContent: "center",
                fontSize: "2em",
                letterSpacing: "10px",
                fontWeight: "bold",
            }}
        >
            {letters.map((letter, index) => (
                <div key={index}>{letter}</div>
            ))}
        </div>
    )
}

export default Page

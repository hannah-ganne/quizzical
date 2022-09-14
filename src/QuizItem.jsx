import Chip from './Chip'

export default function QuizItem({ question, options }) {
    return (
        <>
            <h3>{question}</h3>
            <Chip></Chip>
        </>
    )
}
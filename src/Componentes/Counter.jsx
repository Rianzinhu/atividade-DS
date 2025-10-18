import { Button } from "./Button"

export const Counter = ({onIncrement, onDecrement}) => {
    return (
        <div>
            <Button onClick={onDecrement}data-testid ="decrement-button">-</Button>
            <Button onClick={onIncrement}data-testid ="increment-button">+</Button>
        </div>
    )
}

import  Card from "./Components/Card"

export default function App(){
    return (
        <>
        <h1>
            Yash
        </h1>
        <Card>
        <Card.Heading>A</Card.Heading>
        <Card.Button>Click</Card.Button>
        </Card>

        <Card>
        <Card.Heading>B</Card.Heading>
        <Card.Button>Click</Card.Button>
        </Card>

        <Card>
        <Card.Heading>C</Card.Heading>
        <Card.Button>Click</Card.Button>
        </Card>

        <Card>
        <Card.Heading>D</Card.Heading>
        <Card.Button>Click</Card.Button>
        </Card>
        </>
    )
}
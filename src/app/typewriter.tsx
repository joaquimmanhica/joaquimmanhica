
import Typewriter from 'react-ts-typewriter';

export default function MyTypeWriterAnim({myText}) {
    return (
        <h1>
            <Typewriter text={myText} loop={true} speed={240}/>
        </h1>
    )
}
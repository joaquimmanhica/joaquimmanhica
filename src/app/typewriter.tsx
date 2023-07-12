
import Typewriter from 'react-ts-typewriter';

type MyTypeWriterAnimProps = {
    myText: string;
  };

  export default function MyTypeWriterAnim({ myText }: MyTypeWriterAnimProps) {
    return (
      <h1>
        <Typewriter text={myText} loop={true} speed={240} />
      </h1>
    );
  }
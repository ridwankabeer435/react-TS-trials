import * as React from 'react';
import './style.css';

// let's have a component build using TS

// p.s: we can also pass objects as props
// functions can also be passed as props (because functions are first class objects in JS)

type Props = {
  who: string;
  message?: string;
};


const Hello: React.FC<Props> = ({ who, message }) => (
  <div>
    <p>Hi there {who}</p>
    {message && <p>{message}</p>}
  </div>
);
Hello.defaultProps = {
  who: 'Hi',
  message: 'Glad to see you here',
};

function Hello2({ who = 'User', message = 'WWelcome!' }: Props) {
  return (
    <p>
      Hi there {who}. {message}
    </p>
  );
}
export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Hello who="rid" message="welcome!" />
      <Hello who="X" />

      <Hello2 who="kay" />
    </div>
  );
}

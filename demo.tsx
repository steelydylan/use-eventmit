import * as React from 'react';
import { useEmitter, useSubscriber } from './src'
import { render } from 'react-dom'

const Child = () => {
  useSubscriber<string>((event) => {
    console.log(event)
  })
  return (<div>child</div>)
}

const Parent = () => {
  const [emit, Provider] = useEmitter<string>();
  
  return (<Provider>
    <button onClick={() => {
      emit('hoge');
    }}></button>
    <Child />
  </Provider>)
}

render(<Parent />
, document.getElementById('main'));
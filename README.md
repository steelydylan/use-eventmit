# use-eventmit

A simple event emitter hooks using [eventmit](https://github.com/azu/eventmit)

## install

```sh
$ npm install use-eventmit --save
```

## usage

```tsx
import * as React from 'react';
import { useEmitter, useSubscriber } from './src'
import { render } from 'react-dom'

const Child = () => {
  const [count, setCount] = React.useState(0)
  useSubscriber<string>((event) => {
    setCount(count => count + 1)
  })
  return (<div>child {count} </div>)
}

const Parent = () => {
  const [emit, Provider] = useEmitter<string>();
  
  return (<Provider>
    <button onClick={() => {
      emit('hoge');
    }}>Emit!!</button>
    <Child />
  </Provider>)
}

render(<Parent />
, document.getElementById('main'));
```
// testing custom hooks
// http://localhost:3000/counter-hook

import useCounter from '../../components/use-counter'
import {renderHook, act} from '@testing-library/react-hooks'

// 🐨 create a simple function component that uses the useCounter hook
// and then exposes some UI that our test can interact with to test the
// capabilities of this hook
// 💰 here's how to use the hook:
function setup({initialCount = 0, step = 1} = {}) {
  const {result} = renderHook(useCounter, {initialProps: {initialCount, step}})
  return {
    ...result.current,
    get count() {
      return result.current.count
    },
  }
}

test('exposes the count and increment/decrement functions', () => {
  // 🐨 render the component
  const result = setup()
  const {increment, decrement} = result
  // 🐨 get the elements you need using screen
  // 🐨 assert on the initial state of the hook
  expect(result.count).toBe(0)
  // 🐨 interact with the UI using userEvent and assert on the changes in the UI
  act(() => increment())
  expect(result.count).toBe(1)
  act(() => decrement())
  expect(result.count).toBe(0)
})

it('allows customization of the initial count', () => {
  const initialCount = 2
  const result = setup({initialCount})
  expect(result.count).toBe(initialCount)
})

it('allows customization of the step', () => {
  const step = 2
  const initialCount = 0
  const result = setup({step, initialCount})
  const {increment, decrement} = result
  expect(result.count).toBe(initialCount)
  act(() => increment())
  expect(result.count).toBe(step)
  act(() => decrement())
  expect(result.count).toBe(initialCount)
})
/* eslint no-unused-vars:0 */

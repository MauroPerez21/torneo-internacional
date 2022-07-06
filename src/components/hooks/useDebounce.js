import R from 'react'
import useTimeout from './useTimeout'
export default function useDebounce(callback, delay, dependencies){
    const {reset, clear} = useTimeout(callback, delay)
    R.useEffect(reset, [...dependencies, reset])
    R.useEffect(clear, [])
}

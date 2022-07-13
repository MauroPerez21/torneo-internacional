import R from 'react'
export default function useAsync(callback, dependencies = [] )
{
    const [loading, setLoading] = R.useState(true)
    const [error, setError] = R.useState()
    const [value, setValue] = R.useState()

    const callbackMemoized = R.useCallback(()=>{
        setLoading(true)
        setError(undefined)
        setValue(undefined)
        callback()
            .then(setValue)
            .catch(setError)
            .finally(()=>setLoading(false))

    }, dependencies)
    R.useEffect(()=>{
        callbackMemoized()
    }, [callbackMemoized])
    return {loading, error, value}
}
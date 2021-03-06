import React from 'react'

export default function useArray(defaultValue){
    const [array, setArray] = React.useState(defaultValue)

    function filterSome(id){
        const filtered = defaultValue.filter((some)=> some.category === id )
        setArray(filtered)
        return array
    }
    function filterAll(all){
        const filtered = defaultValue.filter((some)=> some.category !== all )
        setArray(filtered)
        return array
    }
    return { filterSome, filterAll }
}

import { useEffect, useState } from 'react'

export const useFetch = (url, method = 'get') => {
    const [resp, setResp] = useState({
        data: null,
        loading: true
    })

    useEffect(function() {
        fetch(url, { method })
            .then(resp => resp.json())
            .then(json => setResp({
                data: json,
                loading: false
            }))
    }, [url, method])

    return resp
}
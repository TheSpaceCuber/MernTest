import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useHappeningsSearch(query, pageNumber, limit) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [posts, setPosts] = useState([])
    const [hasMore, setHasMore] = useState(false)

    useEffect(() => {
        setPosts([])
    }, [query])
    
    useEffect(() => {
        setLoading(true)
        setError(false)
        let cancel
        axios({
            method: 'GET',
            url: `/happenings`,
            params: { search: query, page: pageNumber, limit: limit },
            cancelToken: new axios.CancelToken( c => cancel = c)
        }).then( res => {
            console.log(res.data)
            setPosts(posts.concat(res.data.happenings))
            setHasMore(res.data.hasMore)
            setLoading(false)
        }).catch(e => {
            if (axios.isCancel(e)) return
            else {
            setError(true)
            console.log('Error retrieving data into React.');
            alert('Error retrieving data into React');
            }
        })
    return () => cancel()
    }, [query, pageNumber])
    return {loading, error, posts, hasMore}
}
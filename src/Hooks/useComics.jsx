import React, { useEffect, useState } from 'react';

const useComics = () => {
    const [comic, setComics] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://comic-task-server.vercel.app/ComicData')
            .then(res => res.json())
            .then(data => {
                setComics(data)
                setLoading(false)

            })
    }, [])
    return [comic, loading]
};

export default useComics;
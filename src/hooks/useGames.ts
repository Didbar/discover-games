import { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import { CanceledError } from 'axios'
import localData from '../../data/localData.json'

export interface Game {
  id: number
  name: string
  background_image: string
}

interface FetchGamesResponse {
  count: number
  results: Game[]
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState('')
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    // const controller = new AbortController()
    // setLoading(true)
    // apiClient
    //   .get<FetchGamesResponse>('/games', { signal: controller.signal })
    //   .then((res) => setGames(res.data.results))
    //   .catch((err) => {
    //     if (err instanceof CanceledError) return
    //     setError(err.message)
    //   })
    //   .finally(() => setLoading(false))

    // return () => controller.abort()
    setGames(localData.results)
  }, [])

  return { games, error, isLoading }
}

export default useGames

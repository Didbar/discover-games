import { useQuery } from '@tanstack/react-query'
import genres from '../data/genres'
import APIClient from '../services/api-client'
export interface Genre {
  id: number
  name: string
  image_background: string
}

const apiClient = new APIClient<Genre>('/genres')

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: 30 * 24 * 60 * 60 * 1000, //30 days
    initialData: genres
  })

export default useGenres

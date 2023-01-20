import { Movie } from '../model'

export interface LoadWatchList {
  load(params: LoadWatchList.Params): Promise<LoadWatchList.Model>
}

export namespace LoadWatchList {
  export type Model = {
    results: Array<Movie.Model>
    page: number
    total_pages: number
    total_results: number
  }

  export type Params = {
    session_id: string
    sort_by?: string
    page?: number
  }
}

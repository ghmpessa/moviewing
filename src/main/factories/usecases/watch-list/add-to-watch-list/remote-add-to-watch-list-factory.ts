import { makeApiUrl, makeAxiosHttpClient } from '@/main/factories/http'
import { RemoteAddToWatchList } from '@/data/usecases/watch-list'
import { AddToWatchList } from '@/domain/usecases'

export const makeRemoteAddToWatchList = (id: string): AddToWatchList =>
  new RemoteAddToWatchList(
    makeApiUrl(`/account/${id}/watchlist`),
    makeAxiosHttpClient()
  )
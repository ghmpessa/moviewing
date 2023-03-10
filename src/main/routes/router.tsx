import React from 'react'

import {
  makeRemoteCreateSession,
  makeRemoteDeleteSession,
  makeRemoteLoadAccountDetails,
  makeRemoteRequestToken,
} from '@/main/factories/usecases'

import {
  MakeMovies,
  MakeWatchList,
  MakeMoviePage,
  MakeUpcoming,
  MakeOnTheaters,
  MakePopular,
  MakeTopRated,
  MakeSearchPage,
} from '@/main/factories/pages'

import {
  Footer,
  Header,
  MainContainer,
  MoviesHeader,
} from '@/presentation/components'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

const Router: React.FC = () => {
  return (
    <BrowserRouter basename=''>
      <Header
        requestToken={makeRemoteRequestToken()}
        createSession={makeRemoteCreateSession()}
        deleteSession={makeRemoteDeleteSession()}
        loadAccountDetails={makeRemoteLoadAccountDetails()}
      />
      <MainContainer>
        <Routes>
          <Route path='/:movieId' element={<MakeMoviePage />} />
          <Route path='/:id/watchlist' element={<MakeWatchList />} />
          <Route path='/' element={<MoviesHeader />}>
            <Route index element={<MakeMovies />} />
            <Route path='upcoming' element={<MakeUpcoming />} />
            <Route path='search/:query' element={<MakeSearchPage />} />
            <Route path='on_theaters' element={<MakeOnTheaters />} />
            <Route path='popular' element={<MakePopular />} />
            <Route path='top_rated' element={<MakeTopRated />} />
          </Route>
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </MainContainer>
      <Footer />
    </BrowserRouter>
  )
}

export default Router

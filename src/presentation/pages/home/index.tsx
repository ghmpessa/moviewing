import React, { useEffect, useState, useCallback } from 'react'
import { HomePageStyles as Styled } from './styles'

import { Error, Fab, Loading, MovieList } from '@/presentation/components'
import { LoadMovies } from '@/domain/usecases'

import KeyboardDoubleArrowUpRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowUpRounded'
import { useScrollToTop } from '@/presentation/hooks'

type Props = {
  loadMovies: LoadMovies
}

const HomePage: React.FC<Props> = ({ loadMovies }) => {
  const [isVisible, scrollToTop] = useScrollToTop()
  const [data, setData] = useState<LoadMovies.Model>({
    results: [],
    page: 1,
    total_pages: 0,
    total_results: 0,
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const fetchMovies = useCallback(
    async (page = 1) => {
      console.log('pagina', page)
      try {
        if (loading) return

        const response = await loadMovies.load({ page })

        setData({
          ...response,
          results: [...data.results, ...response.results],
        })
      } catch (error) {
        setError(true)
      } finally {
        setLoading(false)
      }
    },
    [data]
  )

  useEffect(() => {
    let isMounted = true

    if (isMounted) fetchMovies()

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <Styled.Container>
      {loading && (
        <Styled.LoadingContainer>
          <Loading />
        </Styled.LoadingContainer>
      )}
      {!loading && !error && <MovieList movies={data ? data.results : []} />}
      {!loading && error && <Error />}
      <Fab isVisible={isVisible} handleScrollToTop={scrollToTop}>
        <KeyboardDoubleArrowUpRoundedIcon />
      </Fab>
      {!loading && (
        <Styled.LoadMore
          variant='contained'
          color='primary'
          onClick={() => fetchMovies(data.page + 1)}
        >
          Load more
        </Styled.LoadMore>
      )}
    </Styled.Container>
  )
}

export default HomePage

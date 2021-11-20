export type Movie = {
  id: string,
  name: string,
  poster: {
    id: string,
    url: string
  },
  review: string,
  rating: number,
  watch_date: string
}
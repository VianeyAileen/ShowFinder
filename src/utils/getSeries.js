import axios from 'axios'

const baseUrl = 'https://api.tvmaze.com/search/shows'
const mainInformation = 'https://api.tvmaze.com/shows'

export const getSeries = async (query = 'the+100') => {
  return await axios.get(`${baseUrl}?q=${query}`)
}

export const getSingleSerie = async (id = '6') => {
  return await axios.get(`${mainInformation}/${id}`)
}

export const getCast = async (id = '6') => {
  return await axios.get(`${mainInformation}/${id}/cast`)
}

export const getEpisodes = async (id = '6') => {
  return await axios.get(`${mainInformation}/${id}/episodes`)
}

export const getSeasons = async (id = '6') => {
  return await axios.get(`${mainInformation}/${id}/seasons`)
}

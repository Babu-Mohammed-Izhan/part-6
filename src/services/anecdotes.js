import axios from 'axios'
const getId = () => (100000 * Math.random()).toFixed(0)

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const createNew = async (newanecdote) => {
    const anecdote = {
        content: newanecdote,
        id: getId(),
        votes: 0
    }
    console.log(anecdote)
    const response = await axios.post(baseUrl, anecdote)
    return response
}

const increment = async (id) => {
    const state = await axios.get(baseUrl)
    const anecdoteToChange = state.data.find(a => a.id === id)
    const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes += 1
    }
    const updatedAnecdotes = axios.put(`${baseUrl}/${id}`, changedAnecdote)
    return updatedAnecdotes
}

export default { getAll, createNew, increment }
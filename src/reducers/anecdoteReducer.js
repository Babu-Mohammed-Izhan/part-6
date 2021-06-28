
import anecdoteService from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {

    case 'INCREMENT':
      const changedAnecdote = action.data
      const id = action.id
      return state.map(anecdote => anecdote.id !== id ? anecdote : changedAnecdote)

    case 'NEW_ANECDOTE':
      return state.concat(action.data)
    case 'INIT_ANECDOTES':
      return state.concat(action.data)
    default:
      return state
  }
}

export const increment = (id) => {
  return async dispatch => {
    const updatedAnecdotes = await anecdoteService.increment(id)
    console.log(updatedAnecdotes)
    dispatch({
      type: "INCREMENT",
      data: updatedAnecdotes.data,
      id: { id }
    })
  }
}

export const newAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: "NEW_ANECDOTE",
      data: newAnecdote.data,
    })
  }
}

export const initializeAnedotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: "INIT_ANECDOTES",
      data: anecdotes
    })

  }
}

export default anecdoteReducer
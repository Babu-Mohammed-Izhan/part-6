import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../reducers/anecdoteReducer'
import { notification } from '../reducers/notificationReducer'



const AnecdoteList = () => {
    const dispatch = useDispatch()

    const anecdotes = useSelector(state => state.anecdotes)
    console.log(anecdotes)
    anecdotes.sort((a, b) => { return b.votes - a.votes })

    const filter = useSelector(state => state.filter)
    const filteredAnecdotes = anecdotes.filter((anecdote) => { return anecdote.content.toLowerCase().includes(filter.toLowerCase()) })

    const vote = async (anecdote) => {
        dispatch(increment(anecdote.id))
        dispatch(notification(`you voted ${anecdote.content}`, 10))
    }
    return (
        <div>
            {filteredAnecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AnecdoteList

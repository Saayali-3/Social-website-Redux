import React from 'react'
import { reactionAdded } from './postsSlice'
import { useDispatch } from 'react-redux'

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕'
}


function ReactionButtons({post}) {

    const dispatch = useDispatch()
    console.info(Object.entries(reactionEmoji))
    const reactionButtons = Object.entries(reactionEmoji).map(([name,emoji]) =>{
        return (
            <button
                key={name}
                type='button'
                className='reactionBUtton'
                onClick={()=>
                    dispatch(reactionAdded({postId: post.id, reaction:name}))
                }
            >
                {emoji} {post.reactions[name]}
            </button>
        )
    })

  return (
    <div>
      {reactionButtons}
    </div>
  )
}

export default ReactionButtons

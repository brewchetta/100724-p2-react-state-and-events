// Exercise:
// 1. add state (likes, setLikes) to CandyBar
// 2. default state is 0 (starts at 0)
// 3. make a new like button
// 4. increase the number of likes (state) by 1 when clicked
// 5. show your likes wherever you'd like (on the button or its own element)

import { useState } from 'react'

function CandyBar({ candy, index }) {
    
    const [likes, setLikes] = useState(0)

    function handleLike() {
        setLikes(likes + 1)
    }

    return (
        <div>
            <h2>{candy}</h2>

            <h3>Index: {index}</h3>

            <button onClick={handleLike}>{likes} Likes</button>
        </div>
    )

}

export default CandyBar
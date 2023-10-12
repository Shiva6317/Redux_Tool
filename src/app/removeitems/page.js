
import React from 'react'
import { useSelector } from 'react-redux'

const page = () => {

    const userdata=useSelector()
    return (
        <div>
            <h1>this is remove page</h1>
        </div>
    )
}

export default page

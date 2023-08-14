import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs';

import "./Card.css"
function Card({ setUser }) {
    const [input, setinput] = useState("")
    const fetchData = (value) => {
        fetch("https://randomuser.me/api/?nat=us&results=18&page=1")
            .then((response) => {
                return response.json();
            }).then((data) => {
                let gagan = data.results.filter((res) => {
                    return (
                        value && res && res.name.first && res.name.first.toLowerCase().includes(value)
                    )
                })
                console.log(gagan);
                setUser(gagan)
            })
    }
    // useEffect(() => {
    //     fetchData();
    // }, [])
    const handleChange = (value) => {
        setinput(value)
        fetchData(value)
    }
    return (
        <div className="clearfix">
            <div className="input-wrapper">
                <input placeholder='Enter the name' onChange={(e) => {
                    handleChange(e.target.value)
                }}
                    value={input} />
                <BsSearch />
            </div>

        </div>
    )
}

export default Card
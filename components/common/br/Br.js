import React from 'react'

const Br = ({numbers}) => {
    if (numbers) {
        let br = "";
        for (let i = 0; i < numbers; i++) {
            br = br + "\n"
        }
        return <>{br}</>
    }
    return "\n"
};

export default Br
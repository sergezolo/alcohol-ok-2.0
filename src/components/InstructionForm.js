import React from 'react'

const InstructionForm = ({ instructions, handleChange }) => {
    return (
        instructions.map((value, index) => {
            return (
                <div key={index}>
                    <input className="input" type="text" name={`instruction-${index}`} placeholder="Instruction" value={value} onChange={(event) => handleChange(index, event.target.value)}/> 
                </div>
            )
        })
    )
}

export default InstructionForm;
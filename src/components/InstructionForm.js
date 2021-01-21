import React from 'react'

const InstructionForm = ({ instructions, handleChange }) => {
    return (
        <div>
            <input className="input" type="text" id="instructionId" placeholder="Instruction"></input> 
        </div>
    )
}

export default InstructionForm;
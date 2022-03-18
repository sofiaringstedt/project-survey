import React from "react";

const occupationGroups = ["Artist", "Curator", "Gallerist", "Art lover"];

export const RadioInput = ({ occupationGroup, onOccupationGroupInputChange }) => {

  return (
    <form className="occupation-form" onSubmit={event => event.preventDefault()}>
      <h3>Which of the following describes you best?</h3>
      {occupationGroups.map(group => (
        <label htmlFor="occuationGroup" key={group}>
          <input
            type="radio"
            value={group}
            onChange={onOccupationGroupInputChange}
            checked={occupationGroup === group}
          />
          {group}
        </label>
      ))}
    </form>
  )
}
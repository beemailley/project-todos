/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faSquareCheck, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { ButtonStyles } from 'components/buttons/Buttons.styles';
import { Timestamp } from './Timestamp';
import { DeleteTaskStyles, EachTaskStyles, TaskContentStyles, ToggleButtonStyles } from './EachTask.styles';

export const EachTask = ({ singleTask }) => {
  const dispatch = useDispatch();
  return (
    <EachTaskStyles>
      <ToggleButtonStyles>
        {!singleTask.complete && (<ButtonStyles type="button" onClick={() => dispatch(tasks.actions.toggleComplete(singleTask))} buttonWidth="30px" buttonText="black" buttonColor="white" buttonBorder="none"><FontAwesomeIcon icon={faSquare} /></ButtonStyles>)}
        {singleTask.complete && (<ButtonStyles type="button" onClick={() => dispatch(tasks.actions.toggleComplete(singleTask))} buttonWidth="30px" buttonText="black" buttonColor="white" buttonBorder="none"><FontAwesomeIcon icon={faSquareCheck} /></ButtonStyles>)}
      </ToggleButtonStyles>
      <TaskContentStyles>
        <p>{singleTask.task}<span> ({singleTask.category})</span></p>
        {/* <p>Scheduled: <Timestamp timeToConvert={singleTask.id} /></p> */}
        <Timestamp timeToConvert={singleTask.due} />
        {/* <p>Completed: {singleTask.complete.toString()}</p> */}
      </TaskContentStyles>
      <DeleteTaskStyles>
        <ButtonStyles type="button" onClick={() => dispatch(tasks.actions.deleteTask(singleTask))} buttonWidth="30px" buttonText="black" buttonColor="white" buttonBorder="none"><FontAwesomeIcon icon={faTrashCan} /></ButtonStyles>
      </DeleteTaskStyles>
    </EachTaskStyles>
  )
}
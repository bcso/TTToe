import React from "react";
import { Form, Row } from "react-bootstrap";
import { TodoProps } from "../types";
import styles from "../css/TodoItem.module.css";

function TodoItem({id, todoString, isComplete, onCompleteToggle} : TodoProps)
{
    return (
        <Form.Check 
            id={id} type="checkbox" 
            checked={isComplete} 
            label={todoString}
            className={styles.itemCompleteTrue}
            onChange={() => onCompleteToggle(id)}
        />
    )
}

export default TodoItem;
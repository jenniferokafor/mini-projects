import './styles.css'
import { Todo } from './model'
import React, { useState } from 'react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'

type Props = {
    todo: Todo
    todos: Todo[]
    id: number
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({ todo, id, todos, setTodos }: Props) => {
    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string>('')

    const handleDone = (id: number) => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
            ),
        )
    }

    const handleDelete = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return (
        <form className="todos__single">
            {todo.isDone ? (
                <s className="todos__single--text">{todo.todo}</s>
            ) : (
                <span className="todos__single--text">{todo.todo}</span>
            )}

            <div>
                <span className="icon">
                    <AiFillEdit />
                </span>
                <span className="icon" onClick={() => handleDelete(todo.id)}>
                    <AiFillDelete />
                </span>
                <span className="icon" onClick={() => handleDone(todo.id)}>
                    <MdDone />
                </span>
            </div>
        </form>
    )
}

export default SingleTodo

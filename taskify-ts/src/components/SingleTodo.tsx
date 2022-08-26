import './styles.css'
import { Todo } from './model'
import React from "react"

type Props = {
  todo: Todo
  todos: Todo[]
  id: number
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({ todo, id, todos, setTodos }: Props) => {
  return <div>to do</div>
}

export default SingleTodo
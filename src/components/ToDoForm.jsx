import React from 'react'

export default function ToDoForm(props) {
    return (
        <form className="my-3">
            <div className="form-group">
                <input type="text" name="task" className="form-control" placeholder="Enter New To-Do" />
                <input type="submit" className="btn btn-danger w-100 mt-3" value="Add To-Do" />
            </div>
        </form>
    )
}

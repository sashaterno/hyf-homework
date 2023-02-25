import React from 'react';
import Item from './Item';

const todos = [
    { id: 1, description: 'Get out of bed', deadline: 'Wed Sep 13 2017' },
    { id: 2, description: 'Brush teeth', deadline: 'Thu Sep 14 2017' },
    { id: 3, description: 'Eat breakfast', deadline: 'Fri Sep 15 2017' }
]

const todoList = () => {
    return (
        <div>
            {todos.map((item) => (
                <Item
                    key={item.id}
                    description={item.description}
                    deadline={item.deadline}
                />
            ))}
        </div>
    )
}

export default todoList;
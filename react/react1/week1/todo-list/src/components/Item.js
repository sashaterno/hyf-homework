import React from 'react';

const Item = ({ description, deadline }) => {
    return (
        <p>
            {description} - {deadline}
        </p>
    )
}

export default Item;
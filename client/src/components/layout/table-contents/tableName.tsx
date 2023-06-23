import React from 'react'
import { TableOfContentsB} from '../../utils/buttons/buttons';

const  TableName: React.FC = ({ title, action }) => {
    return (
        <TableOfContentsB click={() => action(title)} text={title} />
    )
}

export default TableName;
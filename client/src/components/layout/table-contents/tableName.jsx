import { TableOfContentsB} from '../../utils/buttons/buttons';

const  TableName = ({ title, action }) => {
    return (
        <TableOfContentsB click={() => action(title)} text={title} />
    )
}

export default TableName;
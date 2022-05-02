import { useState } from 'react';
import Content from "./content";
import TableName from './tableName';

const TableOfContents = ({ options: {  tableLabel, sections } }) => {

const [contents, setContents ] = useState([ ...sections ]);

const filterContent = (value) => { 
    const results = sections.filter(({ title }) => title == value );
    setContents(results);    
}

const mapTableOfContents = () => sections.map(({ id, title }) => <TableName key={id} title={title} action={filterContent} />);

const mapContents = () => contents.map(({ id, title, content: { list, details, lists } }) => <Content key={id} title={title} list={list} lists={lists} details={details} />)


    return(
        <div className="xln-table-of-contents">
            <div className="topics">
                <div className="name-list-container">
                     <h3 onClick={() => setContents(sections)}>
                       {tableLabel}
                    </h3>
                    { mapTableOfContents() }
                </div>
                
            </div>
            <div className="main">
                { mapContents() }
            </div>
        </div>
    )
}

export default TableOfContents;
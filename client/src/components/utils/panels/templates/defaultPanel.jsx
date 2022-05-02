import DialoguePanel from "./dialoguePanel"


const DefaultPanel = ({ userChecks  }) => {
const renderUserChecks = () => userChecks.map(({ avatar, to, show, action, path, type, select, error, id}, index) => <DialoguePanel key={id} to={to} show={show} action={action} avatar={avatar} path={path} type={type} select={select} error={error} />)

    return (
        <div className="default-panel-container">
            { renderUserChecks() }
        </div>
    )
}

export default DefaultPanel;

import '../../../../css/panels/Panels.scss';
import DialoguePanel from "./templates/dialoguePanel"
import DefaultPanel from "./templates/defaultPanel"

const Panels = ({ type, userChecks }) => {

return (
 <div>
    {
    {
     'dialogue-panel': <DialoguePanel />,
     'default-panel': <DefaultPanel userChecks={userChecks} />
    }[type]
}
</div>
)
}

export default Panels;
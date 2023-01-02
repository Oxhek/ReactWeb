export default function Button(props)
{
    if(!props.onClick === 'function') return Error("OnClick must be a function")
    return (
        <button {...props} onClick={props.onClick}>{props.name}</button>
    )
}
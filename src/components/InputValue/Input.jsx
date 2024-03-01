export default function Input({lableName,onchange,name})
{
    return (
        <>
        <label>
            {lableName}
            <input key="1" type="number" min="0" onChange={onchange} name={name}/>
        </label>
        </>
    )
}
import { useRef } from 'react';
function InputFocus()
{
    const inputRef = useRef()

    const handleClick = () =>
    {
        inputRef.current.focus();
    };

    return(
        <>
        <input ref={inputRef} placeholder='Type here' />
        <button onClick={handleClick}> Focus Input </button>
        </>
    );
}
export default InputFocus
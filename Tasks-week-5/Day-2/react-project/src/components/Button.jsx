// Use of Props in React 
export const Button = (props) => {
    console.log("Hello, It is a Button");
    console.log(props);
    return (
        <div style={{backgroundColor: props.bgColor, color: props.textColor}} > 
        {`${props.value}`} </div>
    )
};
import './Textbox.css'

function TextBox(props) {
    return (
        <textarea name="editor" id="editor" className='code' onChange={props.onChange} value={props.initialText}></textarea>
    )
}

export default TextBox;
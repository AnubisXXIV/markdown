import './Markdown.css'
import Markdown from 'marked-react';

function MarkdownText(props) {

    return (
        <div id='preview' className='preview'>
            <Markdown>{props.text}</Markdown>
        </div>
    )
}

export default MarkdownText;
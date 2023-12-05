export default function FancyText({title,text}:{title:boolean|string,text:string|boolean}):JSX.Element{
    return title
    ? <h1 className='fancy title'>{text}</h1>
    : <h3 className='fancy cursive'>{text}</h3>
}
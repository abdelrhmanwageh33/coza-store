import "./Header.css"
export default function Header({header}:{header:string}) {
  return (
    <div className="header flex flex-col items-center justify-center">
<h2 className="text-center text-2xl text-white" >{header}</h2>        
        </div>
  )
}

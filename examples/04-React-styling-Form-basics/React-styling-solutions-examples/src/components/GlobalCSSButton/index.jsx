import './style.css'; // questo é il css importato dalla cartella GlobalCSSButton...
// eslint-disable-next-line react/prop-types
export default function GlobalCSSButton({ children }) {
  return (
    <button className="button">{ children }</button>
  )
}


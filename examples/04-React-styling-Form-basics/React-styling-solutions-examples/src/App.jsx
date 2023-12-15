import CenterLayout from './layouts/CenterLayout';
import Separatore from './components/Separatore';
import GlobalCSSButton from './components/GlobalCSSButton/index';
import InlineStyleButton from './components/InlineStyleButton/index';
import CSSModuleButton from './components/CSSModuleButton/index';
import MUIButton from './components/MUIButton/MUIButton';

function App() {
  return (
    <CenterLayout>
      <button>Bottone senza stile</button>
      <Separatore />
      <GlobalCSSButton>Bottone con stile globale</GlobalCSSButton>
      <Separatore />
      <InlineStyleButton>Bottone con stile inline</InlineStyleButton>
      <Separatore />
      <CSSModuleButton>Bottone con module css</CSSModuleButton>
      <Separatore />
      <MUIButton>Bottone con Material UI</MUIButton>
    </CenterLayout>
  )
}

export default App

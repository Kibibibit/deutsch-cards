import NounPage from './app/components/noun-page';
import useSheetLoader from './utils/use-sheet-loader';

function App() {
  
  useSheetLoader()

  return (
    <div>
      <NounPage/>
    </div>
  );
}

export default App;

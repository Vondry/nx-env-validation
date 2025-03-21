import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <NxWelcome title={import.meta.env.VITE_API_ORIGIN} />
    </div>
  );
}

export default App;

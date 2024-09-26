import { TextInput } from "@mantine/core";

const App: React.FC = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <TextInput label="Enter your name" description="Your first name" />
    </>
  );
};

export default App;

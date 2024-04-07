import "./App.css";
import "./global.css";
import { Button } from "@/components/ui/button";
import Alert from "./Comp/AlertDialog";
import Dropdown from "./Comp/Dropdown";
import Navbar from "./Comp/Navbar";
import TableComp from "./Comp/TableComp";
import Chat from "./Comp/Chat";
import { Slider } from "./Comp/Slider";
import Drawer from './Comp/Drawer';
import MenubarDemo from './Comp/MenubarDemo';

function App() {
  return (
    <>
      <div className="h-full w-full border-2 border-solid border-gray-200 display flex flex-col items-center justify-center">
        <Slider />
        <Button>Button</Button>
        <Alert/>
        <Dropdown/>
        <TableComp/>
        <Chat/>
        <Drawer/>
        <MenubarDemo/>
      </div>
    </>
  );
}

export default App;

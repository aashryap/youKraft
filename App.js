import {UserProvider} from "./context/userDetails.context";
import Navigator from "./components/Navigator";


export default function App() {
  return (
    <UserProvider>
      <Navigator />
    </UserProvider> 
  );
}

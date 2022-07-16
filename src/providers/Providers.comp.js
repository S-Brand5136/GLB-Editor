import MeshProvider from "./MeshProvider";
import OptionsProvider from "./OptionsProvider";

export default function Providers({ children }) {
  return (
    <MeshProvider>
      <OptionsProvider>{children}</OptionsProvider>
    </MeshProvider>
  );
}

import { Button, Radio, Checkbox } from "antd";
import { AppLayout } from "@/components";

export default function Home() {
  return (
    <AppLayout>
      <Button>Click Me!</Button>
      <Radio>Radio</Radio>
      <Checkbox>Checkbox</Checkbox>
    </AppLayout>
  );
}

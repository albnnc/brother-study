import { Button, Radio, Checkbox } from "antd";
import { AppLayout } from "@/components";

export default function Page() {
  return (
    <AppLayout>
      <Button>Click Me!</Button>
      <Radio>Radio</Radio>
      <Checkbox>Checkbox</Checkbox>
    </AppLayout>
  );
}

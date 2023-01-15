import { Layout, LayoutProps, Menu } from "antd";
import { useRouter } from "next/router";
import { IoMdImages } from "react-icons/io";

export const AppLayout = ({ children, ...rest }: LayoutProps) => {
  const router = useRouter();
  return (
    <Layout
      sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      {...rest}
    >
      <Layout.Header
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
        }}
      >
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["home"]}
          items={[
            {
              key: "home",
              icon: <IoMdImages size="1.65rem" sx={{ my: "-0.4rem" }} />,
              label: "Screens",
              onClick: () => {
                router.push("/");
              },
            },
            {
              key: "library",
              label: "Library",
              onClick: () => {
                router.push("/library");
              },
            },
            {
              key: "upload",
              label: "Upload",
              onClick: () => {
                router.push("/upload");
              },
            },
          ]}
        />
      </Layout.Header>
      <Layout.Content
        sx={{ px: "50px", py: "25px", display: "block", flex: "1 1 auto" }}
      >
        {children}
      </Layout.Content>
      <Layout.Footer sx={{ display: "flex", justifyContent: "space-between" }}>
        <div>Screens</div>
        <div>Ⓒ 2023</div>
      </Layout.Footer>
    </Layout>
  );
};

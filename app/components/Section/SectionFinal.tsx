import { Box, Space, Text } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { ReactiveSpace } from "../ReactiveSpace";

export default function SectionFinal() {
  const { width } = useViewportSize();
  return (
    <Box
      sx={(theme) => ({
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        minHeight: "700px",
        background: "#00054e",
      })}
    >
      <Box
        sx={(theme) => ({
          width: "calc(100% - 200px)",
          [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            width: "calc(100% - 60px)",
          },
        })}
      >
        <ReactiveSpace height={165} />
        <Box
          sx={(theme) => ({
            alignItems: "center",
            [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
              justifyContent: "center",
            },
          })}
        >
          <ReactiveSpace height={100} mdHeight={45} smHeight={30} />
          <Text
            weight={700}
            color={"white"}
            size={width > 500 ? 60 : 30}
            align={width > 500 ? "left" : "center"}
          >
            To be continued
          </Text>
          <Text
            weight={700}
            color={"white"}
            size={width > 500 ? 30 : 20}
            align={width > 500 ? "left" : "center"}
          >
            김태정의 도전은 계속됩니다
          </Text>
        </Box>
        <ReactiveSpace height={200} mdHeight={170} smHeight={100} />
        <Box
          sx={(theme) => ({
            display: "flex",
            justifyContent: "space-between",
            [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
              flexDirection: "column"
            },
          })}
        >
          <Text weight={400} color={"cyan"} size={24} align={width > 500 ? "left" : "center"}>
            2023 Portfolio
          </Text>
          <Space h={30} />
          <a
            href="https://github.com/taejung1205"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
            }}
          >
            <Text color={"white"} weight={700} size={25} align={width > 500 ? "left" : "center"}>
              {"Visit My Github! >"}
            </Text>
          </a>
        </Box>
      </Box>
    </Box>
  );
}

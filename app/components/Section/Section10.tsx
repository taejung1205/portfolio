import {
  Box,
  Center,
  Image,
  Space,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { ReactiveSpace } from "../ReactiveSpace";

export default function Section10() {
  const { width, height } = useViewportSize();
  const theme = useMantineTheme();
  return (
    <Box
      sx={(theme) => ({
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "105vh",
        minHeight: "700px",
        background: "#ebebeb",
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
          minHeight: "1300px",
        },
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
        <Text
          weight={700}
          color={"black"}
          size={width > 500 ? 60 : 30}
          sx={{
            [`@media (max-width: ${theme.breakpoints.md}px)`]: {
              textAlign: "center",
            },
          }}
        >
          써치라이트
        </Text>
        <Text
          color={"#black"}
          size={24}
          sx={{
            [`@media (max-width: ${theme.breakpoints.md}px)`]: {
              textAlign: "center",
            },
          }}
        >
          전시회 및 출품 작가를 소개하기 위한 웹사이트 개발
        </Text>
        <Space h={30} />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            [`@media (max-width: ${theme.breakpoints.md}px)`]: {
              flexDirection: "column",
            },
            [`@media (max-width: ${theme.breakpoints.sm}px)`]: {},
          }}
        >
          <Box
            sx={{
              justifyContent: "center",
            }}
          >
            <Image
              src="/images/searchlight1.png"
              sx={{
                position: "relative",
                width: "40%",
                minWidth: "400px",
                [`@media (max-width: ${theme.breakpoints.md}px)`]: {
                  width: "80%",
                },
              }}
            />
            <a
              href="https://searchlight.kr/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
              }}
            >
              <Text color={"black"} weight={700} size={25} align={"center"}>
                웹페이지 바로가기
              </Text>
            </a>
          </Box>
          <Space w={50} h={50} />
          <Box
            sx={{
              marginRight: "130px",
              [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                marginRight: 0,
              },
            }}
          >
            <Text size={20} weight={700}>
              ABOUT
            </Text>
            <Space h={10} />
            <Text size={14} color={"black"}>
              '써치라이트'는 신진 작가를 소개하기 위해 로파서울에서 기획한 전시회이며, 해당 전시회에 출품한 작가를 소개하기 위한 웹사이트를 개발하였습니다. 기존에 본인이 진행한 웹 프로젝트와 다르게 Next.js 프레임워크와 Vercel 호스팅을 활용하였습니다. 총 35명의 작가들과 200점 이상의 예술품이 사이트에 등록되어 있습니다. 
            </Text>
            <Space h={20} />
            <Text size={20} weight={700}>
              작업 기간
            </Text>
            <Space h={10} />
            <Text size={16}>2023.10.</Text>
            <Space h={20} />
            <Text size={20} weight={700}>
              기술 스택
            </Text>
            <Space h={10} />
            <Text size={16}>
              React.js, Next.js, Vercel, Git
            </Text>
            
            <Space h={30} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

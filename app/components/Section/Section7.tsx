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

export default function Section7() {
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
        background: "#e1d4ff",
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
          color={"#35023b"}
          size={60}
          sx={{
            [`@media (max-width: ${theme.breakpoints.md}px)`]: {
              textAlign: "center",
            },
          }}
        >
          NewBid
        </Text>
        <Text
          color={"#35023b"}
          size={24}
          sx={{
            [`@media (max-width: ${theme.breakpoints.md}px)`]: {
              textAlign: "center",
            },
          }}
        >
          공예품 경매 서비스 웹페이지 개발
        </Text>
        <Space h={50} />
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
            <Box
              sx={{
                display: "flex",
                height: width < 1200 && width > 760 ? "40vh" : "50vh",
              }}
            >
              <img src="/images/newbid1.jpg" />
              <Space w={10} />
              {width > 1400 ? <img src="/images/newbid2.jpg" /> : <></>}
              <Space w={10} />
              {width > 500 ? <img src="/images/newbid3.jpg" /> : <></>}
            </Box>
            <Space h={20} />
            <a
              href="https://newbid.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
              }}
            >
              <Text color={"#35023b"} weight={700} size={25} align={"center"}>
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
            <Text size={12} color={"black"}>
              '뉴비드'는 공예품 전문매장 '로파서울'((주)따바프레스)에서 기획한
              온라인 예술품 경매 서비스입니다. Remix 프레임워크와 Netlify
              호스팅, 그리고 Firebase를 활용해 별도의 서버 구축 없이 웹서비스를
              배포하였습니다. 해당 사이트에서 10월 중순에 진행된 '크래프트서울'
              전시회에서 선보인 예술품 14점을 대상으로 경매를 진행하였습니다.
              온라인 상에서 약 60%의 제품이 입찰되었으며, 추후 프로젝트 확장을
              위해 지속적으로 따바프레스와 협업 중입니다.
            </Text>
            <Space h={20} />
            <Text size={20} weight={700}>
              작업 기간
            </Text>
            <Space h={10} />
            <Text size={16}>2022.09. ~ 2022.10.</Text>
            <Space h={20} />
            <Text size={20} weight={700}>
              기술 스택
            </Text>
            <Space h={10} />
            <Text size={16}>React.js, Remix, Firebase, Netlify, Kakao API, Git</Text>
            <Space h={20} />
            <Text size={20} weight={700}>
              주요 구현
            </Text>
            <Space h={10} />
            <Text size={14}>
              · 폰트업체 '산돌'의 협찬을 받아 Sandoll 그레타샌즈 웹폰트를 적용
              <br />
              · 경매 입찰시 고객에게 메세지를 주기 위한 알림톡 API 적용 <br />
              · 카카오톡 API를 통한 로그인 시스템 및 플러스친구 기능<br />
              · Firebase를 통해 관리되는 경매 시스템<br />
            </Text>
            <Space h={30} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

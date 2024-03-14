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

export default function Section8() {
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
          height: "auto",
          padding: "30px"
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
          로파 파트너사이트
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
          물류 전산 관리 웹페이지 개발
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
              src="/images/lofapartner1.png"
              sx={{
                position: "relative",
                width: "40%",
                minWidth: "400px",
                [`@media (max-width: ${theme.breakpoints.md}px)`]: {
                  width: "80%",
                },
              }}
            />
            <Image
              src="/images/lofapartner2.png"
              sx={{
                position: "relative",
                width: "40%",
                minWidth: "400px",
                [`@media (max-width: ${theme.breakpoints.md}px)`]: {
                  width: "80%",
                },
              }}
            />
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
              로파서울의 물류 처리를 위한 사무 웹사이트를 개발하였습니다. 이전
              뉴비드 프로젝트와 마찬가지로, Remix 프레임워크와 Netlify 호스팅,
              그리고 Firebase의 데이터베이스와 인증시스템을 통해 별도의 서버
              구현 없이 사이트를 구현하였습니다. 사이트의 주요 기능은 엑셀 파일
              인식을 바탕으로 한 정산 및 주문서, 운송장 처리이며, 일부 기능
              사용시 관리자 또는 고객사에게 알림 문자가 발송됩니다. (알리고 API
              사용)
            </Text>
            <Space h={20} />
            <Text size={20} weight={700}>
              작업 기간
            </Text>
            <Space h={10} />
            <Text size={16}>2023.01. ~ 2023.02., 이후 지속 관리 중</Text>
            <Space h={20} />
            <Text size={20} weight={700}>
              기술 스택
            </Text>
            <Space h={10} />
            <Text size={16}>
              React.js, Remix, Firebase, Netlify, Aligo API, Git
            </Text>
            <Space h={20} />
            <Text size={20} weight={700}>
              주요 구현
            </Text>
            <Space h={10} />
            <Text size={14}>
              · Firebase Auth를 활용하여 개발자 없이 사용자가 직접 관리할 수 있는 회원 시스템
              <br />
              · 고객사 전용 페이지와 다른 기능 및 UI를 지닌 관리자 페이지 
              <br />
              · 업로드한 엑셀 파일을 읽어 정산내역 또는 운송장 기록을 생성하고 관리할 수 있는 시스템
              <br />
              · Firestore를 통해 관리되는 고객사 정보와 물류 정보
              <br />
              · 정산내역 공유 등 업무 발생시 사용자에게 문자 메세지를 주기 위한 알림톡 API 적용 <br />
              <br />
            </Text>
            <Space h={30} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

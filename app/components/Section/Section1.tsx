import { Box, Text } from "@mantine/core";
import { ReactiveSpace } from "../ReactiveSpace";

export default function Section1() {
    return <Box
    sx={(theme) => ({
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100vh',
      minHeight: '700px',
      background: '#00054e',
    })}
  >
    <Box
      sx={(theme) => ({
        width: 'calc(100% - 200px)',
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            width: 'calc(100% - 60px)',
        },
      })}
    >
      <ReactiveSpace height={165} mdHeight={110} />
      <Box
        sx={(theme) => ({
          display: 'flex',
          alignItems: 'center',
        })}
      >
        <Box
          sx={(theme) => ({
          })}
        >
          
          <ReactiveSpace height={100} mdHeight={45} smHeight={30} />
          <Text weight={700} color={"white"} size={60}>
            김태정
          </Text>
          <Text weight={700} color={"white"} size={30}>
            항상 도전하는 프론트엔드 개발자
          </Text>
        </Box>
      </Box>
      <ReactiveSpace height={200} mdHeight={170} smHeight={100} />
      <Text weight={400} color={"cyan"} size={24}>
            2024 Portfolio
        </Text>
    </Box>
  </Box>
}
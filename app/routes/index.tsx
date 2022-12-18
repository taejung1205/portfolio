import { ThemeContext } from "@emotion/react";
import { useMantineTheme } from "@mantine/core";
import { useScrollIntoView, useViewportSize, useWindowScroll } from "@mantine/hooks";
import { ScrollAffix } from "~/components/ScrollAffix";
import Section1 from "~/components/Section/Section1"
import Section2 from "~/components/Section/Section2";
import Section3 from "~/components/Section/Section3";
import Section4 from "~/components/Section/Section4";
import Section5 from "~/components/Section/Section5";
import Section6 from "~/components/Section/Section6";
import Section7 from "~/components/Section/Section7";
import SectionFinal from "~/components/Section/SectionFinal";

export default function Index() {
  const [scroll] = useWindowScroll();
  const { width } = useViewportSize();
  const theme = useMantineTheme();
  const scrollView0 = useScrollIntoView<HTMLDivElement>({offset: 0});
  const scrollView1 = useScrollIntoView<HTMLDivElement>({offset: 0});
  const scrollView2 = useScrollIntoView<HTMLDivElement>({offset: 0});
  const scrollView3 = useScrollIntoView<HTMLDivElement>({offset: 0});
  const scrollView4 = useScrollIntoView<HTMLDivElement>({offset: 0});
  const scrollView5 = useScrollIntoView<HTMLDivElement>({offset: 0});
  const scrollView6 = useScrollIntoView<HTMLDivElement>({offset: 0});
  const scrollView7 = useScrollIntoView<HTMLDivElement>({offset: 0});
  
  return (
    <>
    <div ref={scrollView0.targetRef} />
      <Section1 />
      <div ref={scrollView1.targetRef} />
      <Section2 />
      <div ref={scrollView2.targetRef} />
      <Section3 />
      <div ref={scrollView3.targetRef} />
      <Section4 />
      <div ref={scrollView4.targetRef} />
      <Section5 />
      <div ref={scrollView5.targetRef} />
      <Section6 />
      <div ref={scrollView6.targetRef} />
      <Section7 />
      <div ref={scrollView7.targetRef} />
      <SectionFinal />
      <ScrollAffix 
      scrollIntoFuncs={[
        scrollView0.scrollIntoView,
        scrollView1.scrollIntoView,
        scrollView2.scrollIntoView,
        scrollView3.scrollIntoView,
        scrollView4.scrollIntoView,
        scrollView5.scrollIntoView,
        scrollView6.scrollIntoView,
        scrollView7.scrollIntoView,
      ]}
        screenWidth={width}
        isVisible={width > theme.breakpoints.sm}
        position={{
          top: 120,
          right: 60
        }}
      />
    </>
  );
}

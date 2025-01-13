import type { Config } from "@measured/puck";
import type { TextProps } from "@components/Text";
import { textConfig } from "@components/Text";
import { heroConfig } from "@components/Hero";
import type { HeroProps } from "@components/Hero";
import { sectionBreakConfig, SectionBreakProps } from "@components/SectionBreak";

type Props = {
    Text: TextProps;
    Hero: HeroProps;
    SectionBreak: SectionBreakProps;
};

export const config: Config<Props> = {
    components: {
        Text: textConfig,
        Hero: heroConfig,
        SectionBreak: sectionBreakConfig,
    },
};

export default config;

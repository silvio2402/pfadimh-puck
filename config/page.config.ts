import type { Config } from "@measured/puck";
import { textConfig } from "@components/Text";
import type { TextProps } from "@components/Text";
import { heroConfig } from "@components/Hero";
import type { HeroProps } from "@components/Hero";
import { verticalSpaceConfig } from "@components/VerticalSpace";
import type { VerticalSpaceProps } from "@components/VerticalSpace";
import { sectionBreakConfig, SectionBreakProps } from "@components/SectionBreak";

type Props = {
    Text: TextProps;
    Hero: HeroProps;
    SectionBreak: SectionBreakProps;
    VerticalSpace: VerticalSpaceProps;
};

export const config: Config<Props> = {
    components: {
        Text: textConfig,
        Hero: heroConfig,
        SectionBreak: sectionBreakConfig,
        VerticalSpace: verticalSpaceConfig,
    },
};

export default config;

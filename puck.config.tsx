import type { Config } from "@measured/puck";
import type { TextProps } from "./components/Text";
import Text from "./components/Text";

type Props = {
  Text: TextProps;
};

export const config: Config<Props> = {
  components: {
    Text: {
      render: Text,
      fields: {
        text: {
          type: "textarea",
        },
      },
    },
  },
};

export default config;

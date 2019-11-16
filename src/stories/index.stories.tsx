import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from '@storybook/addon-knobs/react';
import ColorButton from "../components/Button/ColorButton"



storiesOf("ColorButton", module)
    .addDecorator(withKnobs)
    .add("red",
         () => <ColorButton color="red" />
    )
    .add("blue",
        () => <ColorButton color="blue" />
    )

    
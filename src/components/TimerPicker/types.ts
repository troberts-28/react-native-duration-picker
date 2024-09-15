import type { MutableRefObject } from "react";

import type { View } from "react-native";

import type {
    LinearGradientProps,
    SoundAssetType,
    LimitType,
    CustomFlatList,
} from "../DurationScroll/types";

import type { CustomTimerPickerStyles } from "./styles";

export interface TimerPickerRef {
    latestDuration: {
        hours: MutableRefObject<number> | undefined;
        minutes: MutableRefObject<number> | undefined;
        seconds: MutableRefObject<number> | undefined;
    };
    reset: (options?: { animated?: boolean }) => void;
    setValue: (
        value: {
            hours: number;
            minutes: number;
            seconds: number;
        },
        options?: { animated?: boolean }
    ) => void;
}

export interface TimerPickerProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Audio?: any;
    FlatList?: CustomFlatList;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Haptics?: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    LinearGradient?: any;
    aggressivelyGetLatestDuration?: boolean;
    allowFontScaling?: boolean;
    amLabel?: string;
    bottomPickerGradientOverlayProps?: Partial<LinearGradientProps>;
    clickSoundAsset?: SoundAssetType;
    disableInfiniteScroll?: boolean;
    hideHours?: boolean;
    hideMinutes?: boolean;
    hideSeconds?: boolean;
    hourLabel?: string | React.ReactElement;
    hourLimit?: LimitType;
    hoursPickerIsDisabled?: boolean;
    initialValue?: {
        hours?: number;
        minutes?: number;
        seconds?: number;
    };
    minuteLabel?: string | React.ReactElement;
    minuteLimit?: LimitType;
    minutesPickerIsDisabled?: boolean;
    onDurationChange?: (duration: {
        hours: number;
        minutes: number;
        seconds: number;
    }) => void;
    padHoursWithZero?: boolean;
    padMinutesWithZero?: boolean;
    padSecondsWithZero?: boolean;
    padWithNItems?: number;
    pickerContainerProps?: React.ComponentProps<typeof View>;
    pickerGradientOverlayProps?: Partial<LinearGradientProps>;
    pmLabel?: string;
    repeatHourNumbersNTimes?: number;
    repeatMinuteNumbersNTimes?: number;
    repeatSecondNumbersNTimes?: number;
    secondLabel?: string | React.ReactElement;
    secondLimit?: LimitType;
    secondsPickerIsDisabled?: boolean;
    styles?: CustomTimerPickerStyles;
    topPickerGradientOverlayProps?: Partial<LinearGradientProps>;
    use12HourPicker?: boolean;
    hoursGap?: number //if you want the minutes to have a gap for example: 0,15,30,35,60 ....
    minutesGap?: number //if you want the minutes to have a gap for example: 0,15,30,35,60 ....
    secondsGap?: number //if you want the minutes to have a gap for example: 0,15,30,35,60 ....
}

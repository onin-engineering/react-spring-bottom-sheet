import React from 'react';
import type { RefHandles, SpringEvent } from './types';
export type { RefHandles as BottomSheetRef, Props as BottomSheetProps, } from './types';
export declare const BottomSheet: React.ForwardRefExoticComponent<{
    children: React.ReactNode;
    sibling?: React.ReactNode;
    onSpringStart?: (event: SpringEvent) => void;
    onSpringCancel?: (event: SpringEvent) => void;
    onSpringEnd?: (event: SpringEvent) => void;
    open: boolean;
    className?: string;
    footer?: React.ReactNode;
    header?: React.ReactNode;
    initialFocusRef?: React.RefObject<HTMLElement>;
    onDismiss?: () => void;
    blocking?: boolean;
    maxHeight?: number;
    scrollLocking?: boolean;
    snapPoints?: import("./types").snapPoints;
    defaultSnap?: number | ((props: import("./types").defaultSnapProps) => number);
    reserveScrollBarGap?: boolean;
    skipInitialTransition?: boolean;
    disableDrag?: boolean;
    onDrag?: (state: import("react-use-gesture/dist/types").Handler<"drag", React.PointerEvent<Element> | PointerEvent>) => void;
    tapToClose?: boolean;
} & Omit<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>>, "children"> & React.RefAttributes<RefHandles>>;
/**
 * WARNING: Before modifying this file, run the following command:
 *
 * $ npx keycloakify own --path 'shared/keycloak-ui-shared/controls/keycloak-text-area/KeycloakTextArea.tsx'
 *
 * This file is provided by @keycloakify/keycloak-ui-shared version 260007.0.5.
 * It was copied into your repository by the postinstall script: `keycloakify sync-extensions`.
 */

/* eslint-disable */

// @ts-nocheck

// TODO: Remove code once the following issue has been fixed:
// https://github.com/patternfly/patternfly-react/issues/10192
import { TextArea } from "../../../@patternfly/react-core";
import {
    ComponentProps,
    HTMLProps,
    type ForwardRefExoticComponent,
    type RefAttributes
} from "react";

// PatternFly changes the signature of the 'onFocus' and 'onBlur' handlers for textarea elements.
// This causes issues with React Hook Form as it expects the default signature for a textarea element.
// So we have to create this wrapper component that takes care of converting these signatures for us.

export type KeycloakTextAreaProps = Omit<
    ComponentProps<typeof TextArea>,
    "onFocus" | "onBlur"
> &
    Pick<HTMLProps<HTMLTextAreaElement>, "onFocus" | "onBlur">;

export const KeycloakTextArea = TextArea as ForwardRefExoticComponent<
    KeycloakTextAreaProps & RefAttributes<HTMLTextAreaElement>
>;

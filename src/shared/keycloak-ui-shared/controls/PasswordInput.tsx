/**
 * WARNING: Before modifying this file, run the following command:
 *
 * $ npx keycloakify own --path 'shared/keycloak-ui-shared/controls/PasswordInput.tsx'
 *
 * This file is provided by @keycloakify/keycloak-ui-shared version 260007.0.5.
 * It was copied into your repository by the postinstall script: `keycloakify sync-extensions`.
 */

/* eslint-disable */

// @ts-nocheck

import {
    Button,
    InputGroup,
    InputGroupItem,
    TextInput,
    type TextInputProps
} from "../../@patternfly/react-core";
import { EyeIcon, EyeSlashIcon } from "../../@patternfly/react-icons";
import { MutableRefObject, Ref, forwardRef, useState } from "react";
import { useTranslation } from "react-i18next";

export type PasswordInputProps = TextInputProps & {
    hasReveal?: boolean;
};

const PasswordInputBase = ({
    hasReveal = true,
    innerRef,
    ...rest
}: PasswordInputProps) => {
    const { t } = useTranslation();
    const [hidePassword, setHidePassword] = useState(true);
    return (
        <InputGroup>
            <InputGroupItem isFill>
                <TextInput
                    {...rest}
                    type={hidePassword ? "password" : "text"}
                    ref={innerRef}
                />
            </InputGroupItem>
            {hasReveal && (
                <Button
                    variant="control"
                    aria-label={t("showPassword")}
                    onClick={() => setHidePassword(!hidePassword)}
                >
                    {hidePassword ? <EyeIcon /> : <EyeSlashIcon />}
                </Button>
            )}
        </InputGroup>
    );
};

export const PasswordInput = forwardRef(
    (props: PasswordInputProps, ref: Ref<HTMLInputElement>) => (
        <PasswordInputBase {...props} innerRef={ref as MutableRefObject<any>} />
    )
);
PasswordInput.displayName = "PasswordInput";

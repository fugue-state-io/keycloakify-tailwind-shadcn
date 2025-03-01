/**
 * WARNING: Before modifying this file, run the following command:
 *
 * $ npx keycloakify own --path 'shared/keycloak-ui-shared/user-profile/LocaleSelector.tsx'
 *
 * This file is provided by @keycloakify/keycloak-ui-shared version 260007.0.5.
 * It was copied into your repository by the postinstall script: `keycloakify sync-extensions`.
 */

/* eslint-disable */

// @ts-nocheck

import { useMemo } from "react";
import { FormProvider } from "react-hook-form";
import { SelectControl } from "../controls/select-control/SelectControl";
import { UserProfileFieldProps } from "./UserProfileFields";

const localeToDisplayName = (locale: string) => {
    try {
        return new Intl.DisplayNames([locale], { type: "language" }).of(locale);
    } catch {
        return locale;
    }
};

type LocaleSelectorProps = Omit<UserProfileFieldProps, "inputType"> & {
    supportedLocales: string[];
    currentLocale: string;
};

export const LocaleSelector = ({
    t,
    form,
    supportedLocales,
    currentLocale
}: LocaleSelectorProps) => {
    const locales = useMemo(
        () =>
            supportedLocales
                .map(locale => ({
                    key: locale,
                    value: t(`locale_${locale}`, localeToDisplayName(locale) ?? locale)
                }))
                .sort((a, b) => a.value.localeCompare(b.value, currentLocale)),
        [supportedLocales, currentLocale, t]
    );

    if (!locales.length) {
        return null;
    }
    return (
        <FormProvider {...form}>
            <SelectControl
                data-testid="locale-select"
                name="attributes.locale"
                label={t("selectALocale")}
                controller={{ defaultValue: "" }}
                options={locales}
                variant={locales.length >= 10 ? "typeahead" : "single"}
            />
        </FormProvider>
    );
};

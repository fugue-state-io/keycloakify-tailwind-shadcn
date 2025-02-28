/**
 * WARNING: Before modifying this file, run the following command:
 *
 * $ npx keycloakify own --path 'account/utils/formatDate.ts'
 *
 * This file is provided by @keycloakify/keycloak-account-ui version 260007.0.3.
 * It was copied into your repository by the postinstall script: `keycloakify sync-extensions`.
 */

/* eslint-disable */

// @ts-nocheck

import { i18n } from "../i18n";

export const FORMAT_DATE_ONLY: Intl.DateTimeFormatOptions = {
    dateStyle: "long"
};

export const FORMAT_TIME_ONLY: Intl.DateTimeFormatOptions = {
    timeStyle: "short"
};

export const FORMAT_DATE_AND_TIME: Intl.DateTimeFormatOptions = {
    ...FORMAT_DATE_ONLY,
    ...FORMAT_TIME_ONLY
};

export function formatDate(date: Date, options = FORMAT_DATE_AND_TIME) {
    return date.toLocaleString(i18n.languages, options);
}

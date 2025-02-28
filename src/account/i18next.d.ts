/**
 * WARNING: Before modifying this file, run the following command:
 *
 * $ npx keycloakify own --path 'account/i18next.d.ts'
 *
 * This file is provided by @keycloakify/keycloak-account-ui version 260007.0.3.
 * It was copied into your repository by the postinstall script: `keycloakify sync-extensions`.
 */

/* eslint-disable */

// @ts-nocheck

// https://www.i18next.com/overview/typescript
import "i18next";

declare module "i18next" {
    interface CustomTypeOptions {
        // TODO: This flag should be removed and code that errors out should be made functional.
        // This will have to be done incrementally as the amount of errors the defaults produce is just too much.
        allowObjectInHTMLChildren: true;
    }
}

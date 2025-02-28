/**
 * WARNING: Before modifying this file, run the following command:
 *
 * $ npx keycloakify own --path 'account/KcContext.ts'
 *
 * This file is provided by @keycloakify/keycloak-account-ui version 260007.0.3.
 * It was copied into your repository by the postinstall script: `keycloakify sync-extensions`.
 */

import type { KcContextLike } from "@keycloakify/keycloak-account-ui";
import type { KcEnvName } from "../kc.gen";

export type KcContext = KcContextLike & {
    themeType: "account";
    themeName: string;
    properties: Record<KcEnvName, string>;
};

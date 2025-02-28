/**
 * WARNING: Before modifying this file, run the following command:
 *
 * $ npx keycloakify own --path 'account/KcAccountUi.tsx'
 *
 * This file is provided by @keycloakify/keycloak-account-ui version 260007.0.3.
 * It was copied into your repository by the postinstall script: `keycloakify sync-extensions`.
 */

import "../index.css";

import { useEffect, useReducer } from "react";
import { initializeDarkMode } from "../shared/keycloak-ui-shared";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { i18n } from "./i18n";
import { routes } from "./routes";

initializeDarkMode();

const prI18nInitialized = i18n.init();

const router = createBrowserRouter(routes);

export default function KcAccountUi() {
    const [isI18nInitialized, setI18nInitialized] = useReducer(() => true, false);

    useEffect(() => {
        prI18nInitialized.then(() => setI18nInitialized());
    }, []);

    if (!isI18nInitialized) {
        return null;
    }

    return <RouterProvider router={router} />;
}

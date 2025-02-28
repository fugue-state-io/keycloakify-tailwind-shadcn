/**
 * WARNING: Before modifying this file, run the following command:
 *
 * $ npx keycloakify own --path 'account/root/Root.tsx'
 *
 * This file is provided by @keycloakify/keycloak-account-ui version 260007.0.3.
 * It was copied into your repository by the postinstall script: `keycloakify sync-extensions`.
 */

/* eslint-disable */

// @ts-nocheck

import { KeycloakProvider } from "../../shared/keycloak-ui-shared";
import { Page, Spinner } from "../../shared/@patternfly/react-core";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { environment } from "../environment";
import { Header } from "./Header";
import { PageNav } from "./PageNav";
import { AppSidebar } from "../../components/app-sidebar";
import { SidebarProvider } from "../../components/ui/sidebar";

import "../../index.css";
import "../../styles/global.css";

export const Root = () => {
    return (
        <KeycloakProvider environment={environment}>
            <SidebarProvider>
                <Page sidebar={<AppSidebar side="left" variant="sidebar" collapsible="icon" onStateChange={() => { console.log("changed")}} />} isManagedSidebar>
                    <Suspense fallback={<Spinner />}>
                        <Outlet />
                    </Suspense>
                </Page>
            </SidebarProvider>
        </KeycloakProvider>
    );
};

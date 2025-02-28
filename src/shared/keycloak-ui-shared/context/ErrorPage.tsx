/**
 * WARNING: Before modifying this file, run the following command:
 *
 * $ npx keycloakify own --path 'shared/keycloak-ui-shared/context/ErrorPage.tsx'
 *
 * This file is provided by @keycloakify/keycloak-ui-shared version 260007.0.5.
 * It was copied into your repository by the postinstall script: `keycloakify sync-extensions`.
 */

/* eslint-disable */

// @ts-nocheck

import {
    Button,
    Modal,
    ModalVariant,
    Page,
    Text,
    TextContent,
    TextVariants
} from "../../@patternfly/react-core";
import { useTranslation } from "react-i18next";

type ErrorPageProps = {
    error?: unknown;
};

export const ErrorPage = (props: ErrorPageProps) => {
    const { t } = useTranslation();
    const error = props.error;
    const errorMessage = getErrorMessage(error);

    function onRetry() {
        location.href = location.origin + location.pathname;
    }

    return (
        <Page>
            <Modal
                variant={ModalVariant.small}
                title={t("somethingWentWrong")}
                titleIconVariant="danger"
                showClose={false}
                isOpen
                actions={[
                    <Button key="tryAgain" variant="primary" onClick={onRetry}>
                        {t("tryAgain")}
                    </Button>
                ]}
            >
                <TextContent>
                    <Text>{t("somethingWentWrongDescription")}</Text>
                    {errorMessage && (
                        <Text component={TextVariants.small}>{errorMessage}</Text>
                    )}
                </TextContent>
            </Modal>
        </Page>
    );
};

function getErrorMessage(error: unknown): string | null {
    if (typeof error === "string") {
        return error;
    }

    if (error instanceof Error) {
        return error.message;
    }

    return null;
}

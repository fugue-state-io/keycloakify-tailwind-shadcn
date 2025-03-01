/**
 * WARNING: Before modifying this file, run the following command:
 *
 * $ npx keycloakify own --path 'shared/keycloak-ui-shared/utils/ErrorBoundary.tsx'
 *
 * This file is provided by @keycloakify/keycloak-ui-shared version 260007.0.5.
 * It was copied into your repository by the postinstall script: `keycloakify sync-extensions`.
 */

/* eslint-disable */

// @ts-nocheck

import {
    Component,
    type ComponentType,
    type FunctionComponent,
    type GetDerivedStateFromError,
    type ReactNode
} from "react";
import { createNamedContext } from "./createNamedContext";
import { useRequiredContext } from "./useRequiredContext";

export interface ErrorBoundaryContextValue {
    error?: Error;
    showBoundary: (error?: Error) => void;
}

const ErrorBoundaryContext = createNamedContext<ErrorBoundaryContextValue | undefined>(
    "ErrorBoundaryContext",
    undefined
);

export const useErrorBoundary = () => useRequiredContext(ErrorBoundaryContext);

export interface ErrorBoundaryProviderProps {
    children: ReactNode;
}

export interface ErrorBoundaryProviderState {
    error?: Error;
}

export class ErrorBoundaryProvider extends Component<
    ErrorBoundaryProviderProps,
    ErrorBoundaryProviderState
> {
    state: ErrorBoundaryProviderState = {};

    static getDerivedStateFromError: GetDerivedStateFromError<
        ErrorBoundaryProviderProps,
        ErrorBoundaryProviderState
    > = error => {
        return { error };
    };

    showBoundary = (error?: Error) => {
        this.setState({ error });
    };

    render() {
        return (
            <ErrorBoundaryContext.Provider
                value={{ error: this.state.error, showBoundary: this.showBoundary }}
            >
                {this.props.children}
            </ErrorBoundaryContext.Provider>
        );
    }
}

export interface FallbackProps {
    error: Error;
}

export interface ErrorBoundaryFallbackProps {
    fallback: ComponentType<FallbackProps>;
    children: ReactNode;
}

export const ErrorBoundaryFallback: FunctionComponent<ErrorBoundaryFallbackProps> = ({
    children,
    fallback: FallbackComponent
}) => {
    const { error } = useErrorBoundary();

    if (error) {
        return <FallbackComponent error={error} />;
    }

    return children;
};

/**
 * WARNING: Before modifying this file, run the following command:
 *
 * $ npx keycloakify own --path 'shared/keycloak-ui-shared/utils/useSetTimeout.ts'
 *
 * This file is provided by @keycloakify/keycloak-ui-shared version 260007.0.5.
 * It was copied into your repository by the postinstall script: `keycloakify sync-extensions`.
 */

/* eslint-disable */

// @ts-nocheck

import { useEffect, useRef, useCallback } from "react";

export function useSetTimeout() {
    const didUnmountRef = useRef(false);
    const scheduledTimersRef = useRef(new Set<number>());

    useEffect(() => {
        didUnmountRef.current = false;

        return () => {
            didUnmountRef.current = true;
            clearAll();
        };
    }, []);

    function clearAll() {
        scheduledTimersRef.current.forEach(timer => clearTimeout(timer));
        scheduledTimersRef.current.clear();
    }

    return useCallback((callback: () => void, delay: number) => {
        if (didUnmountRef.current) {
            throw new Error("Can't schedule a timeout on an unmounted component.");
        }

        const timer = Number(setTimeout(handleCallback, delay));

        scheduledTimersRef.current.add(timer);

        function handleCallback() {
            scheduledTimersRef.current.delete(timer);
            callback();
        }

        return function cancelTimeout() {
            clearTimeout(timer);
            scheduledTimersRef.current.delete(timer);
        };
    }, []);
}

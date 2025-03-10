/**
 * WARNING: Before modifying this file, run the following command:
 *
 * $ npx keycloakify own --path 'shared/keycloak-ui-shared/icons/IconMapper.tsx'
 *
 * This file is provided by @keycloakify/keycloak-ui-shared version 260007.0.5.
 * It was copied into your repository by the postinstall script: `keycloakify sync-extensions`.
 */

/* eslint-disable */

// @ts-nocheck

import { Icon } from "../../@patternfly/react-core";
import {
    BitbucketIcon,
    CubeIcon,
    FacebookSquareIcon,
    GithubIcon,
    GitlabIcon,
    GoogleIcon,
    InstagramIcon,
    LinkedinIcon,
    MicrosoftIcon,
    OpenshiftIcon,
    PaypalIcon,
    StackOverflowIcon,
    TwitterIcon
} from "../../@patternfly/react-icons";

type IconMapperProps = {
    icon: string;
};

export const IconMapper = ({ icon }: IconMapperProps) => {
    const SpecificIcon = getIcon(icon);
    return (
        <Icon size="lg">
            <SpecificIcon alt={icon} />
        </Icon>
    );
};

function getIcon(icon: string) {
    switch (icon) {
        case "github":
            return GithubIcon;
        case "facebook":
            return FacebookSquareIcon;
        case "gitlab":
            return GitlabIcon;
        case "google":
            return GoogleIcon;
        case "linkedin":
        case "linkedin-openid-connect":
            return LinkedinIcon;

        case "openshift-v3":
        case "openshift-v4":
            return OpenshiftIcon;
        case "stackoverflow":
            return StackOverflowIcon;
        case "twitter":
            return TwitterIcon;
        case "microsoft":
            return MicrosoftIcon;
        case "bitbucket":
            return BitbucketIcon;
        case "instagram":
            return InstagramIcon;
        case "paypal":
            return PaypalIcon;
        default:
            return CubeIcon;
    }
}

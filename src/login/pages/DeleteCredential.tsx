import { getKcClsx } from "keycloakify/login/lib/kcClsx";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { buttonVariants } from "../../components/ui/button";
export default function DeleteCredential(props: PageProps<Extract<KcContext, { pageId: "delete-credential.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

    const { msgStr, msg } = i18n;

    const { kcClsx } = getKcClsx({
        doUseDefaultCss,
        classes
    });

    const { url, credentialLabel } = kcContext;

    return (
        <Template
            kcContext={kcContext}
            i18n={i18n}
            doUseDefaultCss={doUseDefaultCss}
            classes={classes}
            displayMessage={false}
            headerNode={msg("deleteCredentialTitle", credentialLabel)}
        >
            <div id="kc-delete-text" className="mb-5">
                {msg("deleteCredentialMessage", credentialLabel)}
            </div>
            <form className="form-actions" action={url.loginAction} method="POST">
                <div className="space-x-2 ">
                    <input
                        className={buttonVariants({ variant: "default" })}
                        name="accept"
                        id="kc-accept"
                        type="submit"
                        value={msgStr("doConfirmDelete")}
                    />
                    <input
                        className={buttonVariants({ variant: "secondary" })}
                        name="cancel-aia"
                        value={msgStr("doCancel")}
                        id="kc-decline"
                        type="submit"
                    />
                </div>
            </form>
            <div className="clearfix" />
        </Template>
    );
}

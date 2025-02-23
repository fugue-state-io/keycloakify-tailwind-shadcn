import { i18nBuilder } from "keycloakify/login";
import type { ThemeName } from "../kc.gen";


const { useI18n, ofTypeI18n } = i18nBuilder
    .withThemeName<ThemeName>()
    .withCustomTranslations({
        en: {
          backToLogin: "⏪ Back to <strong>Login page</strong>",
          myCustomKey: "My custom message",
        },
        fr: {
          backToLogin: "⏪ Retour à la <strong>page de Login</strong>",
          myCustomKey: "Mon message personalisé",
        },
     })
    .build()
      
type I18n = typeof ofTypeI18n;

export { useI18n, type I18n };
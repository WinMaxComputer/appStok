import { createI18n } from 'vue-i18n';

const localeFiles = import.meta.glob('./locales/*.json', { eager: true });

function loadLocaleMessages() {
    const messages = {};

    Object.entries(localeFiles).forEach(([path, module]) => {
        const matched = path.match(/\.\/locales\/([A-Za-z0-9-_]+)\.json$/i);
        if (matched && matched.length > 1) {
            const locale = matched[1];
            messages[locale] = module.default || module;
        }
    });

    return messages;
}

export default createI18n({
    allowComposition: true,
    locale: 'en',
    fallbackLocale: 'en',
    messages: loadLocaleMessages(),
});

<template>
    <transition name="install-prompt-fade">
        <div v-if="shouldShow" class="install-prompt">
            <div class="install-prompt__content">
                <div class="install-prompt__title">Pasang Aplikasi</div>
                <div class="install-prompt__text">
                    <template v-if="isIos">
                        Untuk memasang di iPhone/iPad, buka menu Share lalu pilih Add to Home Screen.
                    </template>
                    <template v-else>
                        Pasang aplikasi ini ke layar utama agar lebih cepat dibuka seperti aplikasi mobile.
                    </template>
                </div>
            </div>
            <div class="install-prompt__actions">
                <button v-if="canPromptInstall" type="button" class="install-prompt__button install-prompt__button--primary" @click="installApp">
                    Install
                </button>
                <button v-else-if="isIos" type="button" class="install-prompt__button install-prompt__button--primary" @click="showIosGuide = !showIosGuide">
                    Lihat Cara
                </button>
                <button type="button" class="install-prompt__button install-prompt__button--ghost" @click="dismissPrompt">
                    Nanti
                </button>
            </div>
            <div v-if="isIos && showIosGuide" class="install-prompt__guide">
                1. Tekan tombol Share di Safari.
                2. Pilih Add to Home Screen.
                3. Tekan Add.
            </div>
        </div>
    </transition>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';

const DISMISS_KEY = 'pwa-install-dismissed';
const deferredPrompt = ref(null);
const dismissed = ref(false);
const isStandalone = ref(false);
const showIosGuide = ref(false);
const isIos = /iphone|ipad|ipod/i.test(window.navigator.userAgent);
const isSafari = /^((?!chrome|android).)*safari/i.test(window.navigator.userAgent);

const updateStandaloneState = () => {
    isStandalone.value = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
};

const canPromptInstall = computed(() => !isIos && !!deferredPrompt.value);
const shouldShow = computed(() => {
    if (dismissed.value || isStandalone.value) {
        return false;
    }

    if (canPromptInstall.value) {
        return true;
    }

    return isIos && isSafari;
});

const dismissPrompt = () => {
    dismissed.value = true;
    localStorage.setItem(DISMISS_KEY, '1');
};

const installApp = async () => {
    if (!deferredPrompt.value) {
        return;
    }

    deferredPrompt.value.prompt();
    const choice = await deferredPrompt.value.userChoice;
    if (choice?.outcome === 'accepted') {
        dismissPrompt();
    }
    deferredPrompt.value = null;
};

const handleBeforeInstallPrompt = (event) => {
    event.preventDefault();
    deferredPrompt.value = event;
};

const handleAppInstalled = () => {
    dismissPrompt();
    deferredPrompt.value = null;
    updateStandaloneState();
};

onMounted(() => {
    dismissed.value = localStorage.getItem(DISMISS_KEY) === '1';
    updateStandaloneState();
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);
});

onUnmounted(() => {
    window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.removeEventListener('appinstalled', handleAppInstalled);
});
</script>

<style scoped>
.install-prompt {
    position: fixed;
    right: 16px;
    bottom: 16px;
    z-index: 1200;
    width: min(360px, calc(100vw - 32px));
    border-radius: 16px;
    padding: 14px;
    background: linear-gradient(180deg, #ffffff 0%, #eefaf7 100%);
    box-shadow: 0 16px 40px rgba(15, 23, 42, 0.16);
    border: 1px solid rgba(15, 118, 110, 0.16);
}

.install-prompt__content {
    margin-bottom: 10px;
}

.install-prompt__title {
    font-size: 14px;
    font-weight: 700;
    color: #0f172a;
    margin-bottom: 4px;
}

.install-prompt__text {
    font-size: 12px;
    line-height: 1.45;
    color: #475569;
}

.install-prompt__actions {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
}

.install-prompt__button {
    border: 0;
    border-radius: 999px;
    padding: 8px 12px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
}

.install-prompt__button--primary {
    background: #0f766e;
    color: #ffffff;
}

.install-prompt__button--ghost {
    background: #dff4ef;
    color: #0f766e;
}

.install-prompt__guide {
    margin-top: 10px;
    font-size: 12px;
    line-height: 1.5;
    color: #334155;
}

.install-prompt-fade-enter-active,
.install-prompt-fade-leave-active {
    transition: opacity 0.2s ease, transform 0.2s ease;
}

.install-prompt-fade-enter-from,
.install-prompt-fade-leave-to {
    opacity: 0;
    transform: translateY(8px);
}

@media (max-width: 767px) {
    .install-prompt {
        right: 12px;
        bottom: 12px;
        width: calc(100vw - 24px);
    }
}
</style>

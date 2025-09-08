<script setup lang="ts">
import type { Chat } from '~~/layers/chat/app/types';

const appConfig = useAppConfig();

const route = useRoute();

const { chat: chatFromChats, messages, sendMessage } = useChat(route.params.id as string);

if (!chatFromChats.value) {
  await navigateTo('/', { replace: true });
}

const chat = computed(() => chatFromChats.value as Chat);

const title = computed(() =>
  chat.value?.title
    ? `${chat.value.title} - ${appConfig.title}`
    : `${appConfig.title}`,
);

const typing = ref(false);

async function handleSendMessage(message: string) {
  typing.value = true;
  await sendMessage(message);
  typing.value = false;
}

useHead({
  title,
});
</script>

<template>
  <ChatWindow :chat :messages :typing @send-message="handleSendMessage" />
</template>

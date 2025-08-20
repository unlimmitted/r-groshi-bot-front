<template>
	<div class="contacts-container">
		<div
			v-for="contact in contacts"
			class="contact-frame"
		>
			<div class="contact-data-container">
				<div class="contact-username">
					{{ contact.telegramUser }}
				</div>
				<div class="contact-name">
					{{ contact.telegramLastName }}
					{{ contact.telegramFirstName }}
				</div>
			</div>
			<div class="contact-action-container">
				<button class="contact-action-btn">
					<ClipboardClock/>
				</button>
				<button
					class="contact-action-btn contact-remove-btn"
				>
					<Trash/>
				</button>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {ClipboardClock} from 'lucide-vue-next';
import {Trash2} from 'lucide-vue-next';

export default defineComponent({
	name: "Contacts",
	components: {ClipboardClock, Trash: Trash2},
	data: () => ({
		contacts: [
			{
				telegramUser: "@test_user",
				telegramFirstName: "Тест",
				telegramLastName: "Тест"
			},
			{
				telegramUser: "@test_user",
				telegramFirstName: "Тест",
				telegramLastName: "Тест"
			},
			{
				telegramUser: "@test_user",
				telegramFirstName: "Тест",
				telegramLastName: "Тест"
			},
			{
				telegramUser: "@test_user",
				telegramFirstName: "Тест",
				telegramLastName: "Тест"
			}
		]
	})
})
</script>

<style scoped>
.contact-username {
	color: #7f7fff;
	font-weight: bold;
}
.contact-remove-btn {
	background-color: #ff4f4f;
}

.contact-remove-btn:hover {
	background-color: #f00;
}

.contact-action-btn {
	cursor: pointer;
	width: 50px;
	height: 50px;
	border-radius: 8px;
	border-style: unset;
}

.contact-data-container {
	display: flex;
	flex-direction: column;
	gap: 3px;
}

.contact-action-container {
	display: flex;
	flex-direction: row;
	gap: 3px;
}

.contact-frame {
	display: flex;
	flex-direction: row;
	min-width: 270px;
	border-style: solid;
	border-width: 1px;
	padding: 10px;
	border-radius: 10px;
	border-color: #a8a4a4;
	justify-content: space-between;
}

.contacts-container {
	display: flex;
	flex-direction: column;
	gap: 5px;
}
</style>
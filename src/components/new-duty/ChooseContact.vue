<template>
  <div class="new-duty-container">
    <div class="page-title-container">
      Новый долг
    </div>
    <div class="choose-contact">
      <label
          for="contact-select"
          class="label"
      >
        Контакт
      </label>
      <select
          id="contact-select"
          class="contact-select"
          v-model="selectedContact"
      >
        <option value="">Выберите контакт</option>
        <option
            class="contact-option"
            v-for="contact in contacts"
            :value="contact"
        >
          {{ contact.telegramUser }} - {{ contact.telegramLastName }} {{ contact.telegramFirstName }}
        </option>
      </select>
    </div>
    <div v-if="showNextStep" class="new-duty-inputs">
      <label
          class="label"
          for="sum"
      >
        Сумма
      </label>
      <input
          v-model="sum"
          id="sum"
      >
      <label
          class="label"
          for="comment"
      >
        Комментарий
      </label>
      <textarea
          v-model="comment"
          id="comment"
      />
    </div>
    <button
        v-if="inputFilled"
        class="add-new-duty"
    >
      Отправить запрос
    </button>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "ChooseContact",
  data: () => ({
    contacts: [
      {
        telegramUser: "@test_user1",
        telegramFirstName: "Тест",
        telegramLastName: "Тест"
      },
      {
        telegramUser: "@test_user2",
        telegramFirstName: "Тест",
        telegramLastName: "Тест"
      },
      {
        telegramUser: "@test_user3",
        telegramFirstName: "Тест",
        telegramLastName: "Тест"
      },
      {
        telegramUser: "@test_user4",
        telegramFirstName: "Тест",
        telegramLastName: "Тест"
      }
    ],
    selectedContact: "",
    showNextStep: false,
    comment: "",
    sum: ""
  }),
  computed: {
    inputFilled() {
      return this.selectedContact !== "" && this.sum !== ""
    }
  },
  watch: {
    selectedContact(newVal) {
      if (newVal !== "" || newVal !== null) {
        this.showNextStep = true
      }
    }
  }
})
</script>

<style scoped>
.add-new-duty {
  background-color: #81ff7c;
  border-style: unset;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  margin-top: 10px;
}

.add-new-duty:hover {
  background-color: #50ff47;
}

.page-title-container {
  margin-bottom: 10px;
}

.new-duty-inputs {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.new-duty-container {
  display: flex;
  flex-direction: column;
  gap: 5px;
  max-height: 500px;
  overflow-y: scroll;
}

.contact-select {
  font-size: 12px;
  width: 100%;
  height: 26px;
}

.contact-option {
  font-size: 12px;
}

.label {
  font-size: 14px;
}

select {
  padding: 5px;
  font-size: 14px !important;
  height: 30px;
  color: #7f7fff;
}

input {
  padding: 5px;
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  border-color: gray;
  font-size: 14px;
}

textarea {
  padding: 5px;
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  border-color: gray;
  font-size: 14px;
}
</style>
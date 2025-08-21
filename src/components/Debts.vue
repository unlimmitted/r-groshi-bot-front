<template>
  <div class="debts-container">
    <div class="page-title-container">
      Долги
    </div>
    <div class="debts-list">
      <div v-for="debt in debts" class="debts">
        <div class="debt">
          <div class="contact-data">
            <div class="contact-username">
              {{ debt.contact.telegramUser }}
            </div>
            <div class="contact-name">
              {{ debt.contact.telegramLastName }}
              {{ debt.contact.telegramFirstName }}
            </div>
          </div>
          <div class="debt-data">
            <div class="debt-sum">
              {{ debt.sum }} Руб.
            </div>
            <div class="debt-date">
              {{ debt.date }}
            </div>
          </div>
        </div>
        <div class="debt-comment-block">
          {{ debt.comment }}
        </div>
        <div class="debt-action">
          <button class="debt-action-btn success-btn">
            Возвращен
          </button>
          <button class="debt-action-btn cancel-btn">
            Отменить
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Debts",
  data: () => ({
    debts: [
      {
        contact: {
          telegramUser: "@test_user",
          telegramFirstName: "Тест",
          telegramLastName: "Тест"
        },
        sum: 350,
        comment: "Шаурма",
        date: "18.08.2025"
      },
      {
        contact: {
          telegramUser: "@test_user",
          telegramFirstName: "Тест",
          telegramLastName: "Тест"
        },
        sum: 350,
        comment: "Шаурма с начинкой из владивостокских героинщиков",
        date: "18.08.2025"
      },
      {
        contact: {
          telegramUser: "@test_user",
          telegramFirstName: "Тест",
          telegramLastName: "Тест"
        },
        sum: 350,
        comment: "Шаурма с начинкой из владивостокских героинщиков",
        date: "18.08.2025"
      },
      {
        contact: {
          telegramUser: "@test_user",
          telegramFirstName: "Тест",
          telegramLastName: "Тест"
        },
        sum: 350,
        comment: "Шаурма с начинкой из владивостокских героинщиков",
        date: "18.08.2025"
      },
      {
        contact: {
          telegramUser: "@test_user",
          telegramFirstName: "Тест",
          telegramLastName: "Тест"
        },
        sum: 350,
        comment: "Шаурма с начинкой из владивостокских героинщиков",
        date: "18.08.2025"
      }
    ]
  })
})
</script>

<style scoped>
.cancel-btn {
  background-color: #d3d3d3;
}

.cancel-btn:hover {
  background-color: #b3b3b3;
}

.success-btn {
  background-color: #81ff7c;
}

.success-btn:hover {
  background-color: #50ff47;
}
.debt-action-btn {
  width: 100%;
  font-size: 12px;
  border-style: unset;
  border-radius: 8px;
  cursor: pointer;
}

.debt-action {
  display: flex;
  flex-direction: row;
  gap: 5px;
}

.page-title-container {
  position: sticky;
  top: 0;
  background-color: white;
}

.debts-list {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.debts {
  display: flex;
  flex-direction: column;
  min-width: 270px;
  border-style: solid;
  border-width: 1px;
  padding: 10px;
  border-radius: 10px;
  border-color: #a8a4a4;
  gap: 5px;
}

.debt-comment-block {
  border-radius: 10px;
  background-color: #f3f3f3;
  padding: 5px;
  word-break: normal;
  word-wrap: break-word;
}

.debt {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.contact-data {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.debts-container {
  display: flex;
  flex-direction: column;
  gap: 5px;
  max-height: 500px;
  overflow-y: scroll;
}

.contact-username {
  color: #7f7fff;
  font-weight: bold;
}
</style>
<template>
  <v-container class="d-flex align-center">
    <v-row class="text-center justify-center">
      <v-col cols="12" >
        <v-card class="rounded-xl mx-auto card-container" elevation="7" v-if="agenda">
          <v-row class="ma-0">
            <v-col cols="12" sm="5" class="pa-0">
              <v-card-text
                class="text-left pa-6 pb-0"
                :class="{
                  'd-flex flex-column align-center': $vuetify.breakpoint.xs,
                }"
              >
                <p class="text-h4 font-weight-black">{{ agenda.title }}</p>
                <div class="mb-4">
                  <span
                    class="py-1 px-2 rounded date font-weight-bold text-uppercase"
                  >
                    {{ fromatDate(agenda.begin_at) }} -
                    {{ fromatDate(agenda.end_at) }}
                  </span>
                </div>
                <div class="font-weight-bold pb-6 text-justify">
                  {{ agenda.description }}
                </div>
                <div class="d-flex flex-column">
                  <div>
                    <v-icon class="mr-2" color="var(--primary-color)">
                      mdi-map-marker-outline
                    </v-icon>
                    <span class="text--secondary">{{
                      agenda._embedded.address.venue +
                      ', ' +
                      agenda._embedded.address.city
                    }}</span>
                  </div>
                  <div v-if="agenda.is_webinar">
                    <v-icon class="mr-2" color="var(--primary-color)">
                      mdi-video-outline
                    </v-icon>
                    <span class="text--secondary">Conférence en ligne</span>
                  </div>
                </div>
              </v-card-text>
              <v-card-actions
                class="pa-6"
                :class="{
                  'd-flex flex-column align-center': $vuetify.breakpoint.xs,
                }"
              >
                <v-btn
                  :href="agenda.web_url"
                  target="_blank"
                  rounded
                  color="var(--primary-color)"
                  class="white--text px-3 action-btn"
                  elevation="0"
                >
                  En savoir plus
                </v-btn>
              </v-card-actions>
            </v-col>
            <v-col
              cols="12"
              sm="7"
              class="pa-0 img right-radius"
              :style="{
                'background-image':
                  'url(https://cdn.vuetifyjs.com/images/cards/cooking.png)',
              }"
              :class="{'bottom-radius': $vuetify.breakpoint.xs,}"
            >
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import agendaService from '@/services/agenda.service';
import moment from 'moment';

export default {
  name: 'HomeComponent',

  data() {
    return {
      loading: true,
      agenda: undefined,
      userLang: navigator.language || navigator.userLanguage,
    };
  },

  mounted() {
    moment.locale(this.userLang);
    agendaService
      .getAgenda()
      .then((res) => {
        this.agenda = res.data;
      })
      .catch((error) => console.log(error.response))
      .finally(() => (this.loading = false));
  },

  methods: {
    fromatDate(value) {
      if (value) {
        return moment(String(value)).format('ll');
      }
    },
  },
};
</script>

<style scoped>
.container {
  height: 100%;
}
.img {
  background-size: cover;
  min-height: 300px;
}
.action-btn {
  text-transform: inherit;
}
.date {
  color: var(--primary-color);
  background-color: var(--secondary-color);
}
.right-radius {
  border-radius: 0 24px 24px 0;
}
.bottom-radius {
  border-radius: 0 0 24px 24px;
}
.card-container{
  max-width: 1161px;
}
</style>

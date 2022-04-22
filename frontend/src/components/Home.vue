<template>
  <v-container class="d-flex align-center">
    <v-row class="text-center justify-center">
      <v-col cols="12">
        <v-card
          class="rounded-xl mx-auto card-container"
          elevation="7"
          v-if="agenda"
        >
          <v-row class="ma-0">
            <v-col cols="12" md="5" class="pa-0">
              <v-card-text
                class="text-left pa-6 pb-0"
                :class="{
                  'd-flex flex-column align-center':
                    $vuetify.breakpoint.xs || $vuetify.breakpoint.sm,
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
                <div
                  class="font-weight-bold pb-6"
                  :class="{
                    'text-center':
                      $vuetify.breakpoint.sm || $vuetify.breakpoint.xs,
                    'text-justify': $vuetify.breakpoint.md,
                  }"
                >
                  {{ agenda.description }}
                </div>
                <div class="d-flex flex-column">
                  <div>
                    <v-icon dense class="mr-1" color="var(--primary-color)">
                      mdi-map-marker-outline
                    </v-icon>
                    <span class="text--secondary">{{
                      agenda._embedded.address.venue +
                      ', ' +
                      agenda._embedded.address.city
                    }}</span>
                  </div>
                  <div v-if="agenda.is_webinar">
                    <v-icon dense class="mr-1" color="var(--primary-color)">
                      mdi-video-outline
                    </v-icon>
                    <span class="text--secondary">Conférence en ligne</span>
                  </div>
                </div>
              </v-card-text>
              <v-card-actions
                class="pa-6"
                :class="{
                  'd-flex flex-column align-center':
                    $vuetify.breakpoint.xs || $vuetify.breakpoint.sm,
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
            <v-col cols="12" md="7" class="pa-0 img right-radius">
              <v-card-text class="pa-0 fill-height">
                <v-row class="ma-0 col_1">
                  <v-col class="pa-0 p-relative" cols="4">
                    <img
                      class="image"
                      src="../assets/hec1.png"
                      alt=""
                      srcset=""
                    />
                  </v-col>
                  <v-col class="pa-0 p-relative" cols="8">
                    <img
                      class="image object-center"
                      src="../assets/hec2.png"
                      alt=""
                      srcset=""
                      :class="{
                        'top-right-radius':
                          !$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm,
                      }"
                    />
                  </v-col>
                </v-row>
                <v-row class="ma-0 col_2">
                  <v-col
                    class="pa-0 d-flex align-center justify-space-around"
                    cols="12"
                  >
                    <img
                      :width="$vuetify.breakpoint.sm ? 75 : 100"
                      src="../assets/bfinance.jpeg"
                      alt="logo"
                      srcset=""
                    />
                    <img
                      :width="$vuetify.breakpoint.sm ? 75 : 100"
                      src="../assets/commet.jpeg"
                      alt="logo"
                      srcset=""
                    />
                    <img
                      :width="$vuetify.breakpoint.sm ? 75 : 100"
                      src="../assets/HEC-Logo.png"
                      alt="logo"
                      srcset=""
                    />
                    <img
                      :width="$vuetify.breakpoint.sm ? 75 : 100"
                      src="../assets/mokacare.jpeg"
                      alt="logo"
                      srcset=""
                    />
                  </v-col>
                </v-row>
              </v-card-text>
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
  --primary-color: #9c2fae;
  --secondary-color: #e9d6ec;
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
.card-container {
  max-width: 1161px;
}
.col_1 {
  height: 82%;
}
.col_2 {
  height: 18%;
}
.top-right-radius {
  border-radius: 0 24px 0 0;
}
.image {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  object-fit: cover;
  object-position: top;
}
.p-relative {
  position: relative;
}
.object-center{
  object-position: center;
}
</style>

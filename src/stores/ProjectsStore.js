import { defineStore } from 'pinia';

export const useProjectsStore = defineStore('projects', {
  state: () => {
    return {
      projects: [
        {
          id: 1,
          title: 'Zoonder',
          picture: "/zoonder/zoonder1.jpg",
          description: "Mon premier projet complet en Vue.js. L'objectif de cette application est de donner à votre animal préféré la chance de trouver l'âme-soeur, sur le principe de Tinder. Connectez-vous, swipez et allez voir dans le récap avec qui vous avez matché !",
          technologies:"Vue.js"
        },
        {
          id: 2,
          title: 'VueFlix',
          picture: "/vueflix/vueflix1.jpg",
          description: "VueFlix est un catalogue de films. Prenez connaissance des derniers films en salle, et allez consulter leurs descriptions et leurs bande-annonces. Si vous êtes connecté vous pourrez même ajouter des films à votre panier.",
          technologies:"Vue.js / SASS"
        }
      ]
    }
  },
  getters: {
    getProjects: (state) => state.projects
  }
});

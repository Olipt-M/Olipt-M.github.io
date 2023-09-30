import { defineStore } from 'pinia';

export const useProjectsStore = defineStore('projects', {
  state: () => {
    return {
      projects: [
        {
          id: 1,
          title: 'Zoonder',
          pictures: [
            "/zoonder/zoonder1.jpg",
            "/zoonder/zoonder2.jpg",
            "/zoonder/zoonder3.jpg",
            "/zoonder/zoonder4.jpg",
            "/zoonder/zoonder5.jpg"
          ],
          description: "Mon premier projet complet en Vue.js. Le but de cette application est de donner à votre animal préféré la chance de trouver l'âme-soeur, sur le principe de Tinder. Connectez-vous, swipez et allez voir dans le récap avec qui vous avez matché !",
          technologies: [
            {
              name: "Vue",
              logo: "/logos/logoVuejs.svg"
            }
          ],
          githubPage: "https://github.com/Olipt-M/Zoonder",
          webPage: ""
        },
        {
          id: 2,
          title: 'VueFlix',
          pictures: [
            "/vueflix/vueflix1.jpg",
            "/vueflix/vueflix2.jpg",
            "/vueflix/vueflix3.jpg",
            "/vueflix/vueflix4.jpg",
            "/vueflix/vueflix5.jpg",
            "/vueflix/vueflix6.jpg"
          ],
          description: "VueFlix est un catalogue de films. Prenez connaissance des derniers films en salle, et allez consulter leurs descriptions et leurs bande-annonces. Si vous êtes connecté vous pourrez même ajouter des films à votre panier.",
          technologies: [
            {
              name: "Vue",
              logo: "/logos/logoVuejs.svg"
            },
            {
              name: "Sass",
              logo: "/logos/logoSass.svg"
            }
          ],
          githubPage: "https://github.com/Olipt-M/Vueflix",
          webPage: ""
        },
        {
          id: 3,
          title: 'MyPHPmovies',
          pictures: [
            "/myphpmovies/myphpmovies1.jpg"
          ],
          description: "Avec MyPHPmovies, vous pouvez consulter un catalogue de films en naviguant dans les différentes pages de résultats, aller voir la description de chaque film et sa bande-annonce, et rechercher des films grâce à une barre de recherche.",
          technologies: [
            {
              name: "PHP",
              logo: "/logos/logoPHP.svg"
            },
            {
              name: "Sass",
              logo: "/logos/logoSass.svg"
            }
          ],
          githubPage: "https://github.com/Olipt-M/MyPHPmovies",
          webPage: ""
        },
        {
          id: 4,
          title: 'Mass PHP Effect',
          pictures: [
            "/massphpeffect/massphpeffect1.JPG"
          ],
          description: "A la bagarre ! Mass PHP Effect est un jeu de combat de cartes sur le thème de la franchise Mass Effect. Sélectionnez votre personnage et affrontez une IA aléatoire. Si vous choissez les bonnes attaques, à vous la victoire !",
          technologies: [
            {
              name: "PHP",
              logo: "/logos/logoPHP.svg"
            },
            {
              name: "Sass",
              logo: "/logos/logoSass.svg"
            }
          ],
          githubPage: "https://github.com/Olipt-M/MassPHPEffect",
          webPage: ""
        }
      ]
    }
  },
  getters: {
    getProjects: (state) => state.projects
  }
});

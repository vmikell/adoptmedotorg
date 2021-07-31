const app = Vue.createApp({
  data() {
    return {
      url: [],
      isHidden: false,
    }
  },
  template:
    /*html*/
    `<iframe style="width:inherit;" :src="url" title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen v-if="isHidden">
              </iframe>
              <h4 class="text-white" v-if="!isHidden">Mangi, my best friend who saved my life</h4>
              <button v-on:click="isHidden = true" aria-label="video play button">
                <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" fill="currentColor"
                  class="bi bi-play-btn-fill" viewBox="0 0 16 16" v-if="!isHidden">
                  <path
                    d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                </svg>
              </button>`,
  methods: {
    fetchData() {
      fetch('http://localhost:8080/videos')
        .then((response) => response.json())
        .then((data) => {
          this.url = data[0].url
          console.log(this.url)
        })
    },
  },
  beforeMount() {
    this.fetchData()
  },
}) 

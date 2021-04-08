var app = new Vue({
    el: '#app',
    
    data:{
        query: '',
        apiKey: 'e007abdb4b5f8eb1e794adb5578a0d8f',
        lang: 'it-IT',
        searched: [],
        availableFlags: ['it', 'en', 'fr', 'ja']
    },

    methods:{
        search(){
            axios
                .get('https://api.themoviedb.org/3/search/movie', {
                    params: {
                        api_key: this.apiKey,
                        query: this.query,
                        language: this.lang
                    }
                })
                .then((result) => {
                    this.searched = result.data.results;
                    console.log(this.searched);
                })
                .catch((error) => alert('Errore!'));

            axios
                .get('https://api.themoviedb.org/3/search/tv', {
                    params: {
                        api_key: this.apiKey,
                        query: this.query,
                        language: this.lang
                    }
                })
                .then((result) => {
                    this.searched =  this.searched.concat(result.data.results);
                })
                .catch((error) => alert('Errore!'));
        },

        getVote(vote){
            return parseInt(vote/2);
        },

        getFlag(lang){
            return `img/${lang}.png`;
        },

        getPoster(poster){
            return `https://image.tmdb.org/t/p/w342/${poster}`;
        }
    }
});
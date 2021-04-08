var app = new Vue({
    el: '#app',
    
    data:{
        query: '',
        apiKey: 'e007abdb4b5f8eb1e794adb5578a0d8f',
        lang: 'it-IT',
        searchMovie: [],
        searchTv: []
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
                    this.searchMovie = result.data.results;
                    console.log(this.searchMovie);
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
                    this.searchTv = result.data.results;
                    console.log(this.searchTv);
                })
                .catch((error) => alert('Errore!'));
        }
    }
});
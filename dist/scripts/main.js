let app = new Vue({
    el: '#root',
    data: {
        xRapidapiKey: 'b9f3e8d36dmsh79f02cf8bc2c270p12627fjsn24bc425bc668',
        xRapidapiHost: 'grammarbot.p.rapidapi.com',
        test: "This are a test sentence",
        resText: "",
        title: "test"
    },
    methods: {
        check() {
            
            const data = "text=Susan%20go%20to%20the%20store%20everyday&language=en-US";

            const xhr = new XMLHttpRequest();
            xhr.withCredentials = true;

            xhr.addEventListener("readystatechange", function () {
                if (this.readyState === this.DONE) {
                    console.log(this.responseText);
                }
            });

            xhr.open("POST", "https://grammarbot.p.rapidapi.com/check");
            xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            xhr.setRequestHeader("x-rapidapi-key", "b9f3e8d36dmsh79f02cf8bc2c270p12627fjsn24bc425bc668");
            xhr.setRequestHeader("x-rapidapi-host", "grammarbot.p.rapidapi.com");

            xhr.send(data);

            console.log(data);
        }
    }
});

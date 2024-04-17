const {createApp} = Vue

createApp({
    
    data() {
        return {
           message: "Hello Vue Js",
           img: "./img/helloVueJs.png",
           imgAlt: "immagine Vue JS",
           alignText:"textcenter"
        }
    }
    
}).mount("#app")
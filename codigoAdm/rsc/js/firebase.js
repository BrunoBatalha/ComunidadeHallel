 var firebaseConfig = {
     apiKey: "AIzaSyCu0SEzl7pXz7eVwS5JD4qP5JIXIPcuc00",
     authDomain: "comunidadehallel-2f0a6.firebaseapp.com",
     databaseURL: "https://comunidadehallel-2f0a6.firebaseio.com",
     projectId: "comunidadehallel-2f0a6",
     storageBucket: "gs://comunidadehallel-2f0a6.appspot.com/",
     messagingSenderId: "1044647773691",
     appId: "1:1044647773691:web:c60d66608737032b72b75e"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 const rootRef = firebase.database().ref();
 const storageRef = firebase.storage().ref();
 const refEventos = rootRef.child("eventos");
 const refNoticias = rootRef.child("noticias");
 const refPedidos = rootRef.child("pedidos");
 const refAssociados = rootRef.child("associados");


 firebase.auth().onAuthStateChanged(function (user) {
     if (user) {
         console.debug('logasdo')
     } else {
         console.debug('deslogado')
         let url = window.location.href
         url = url.substr(url.length - 10, url.length)
         console.debug(url);
         if (url != "index.html") {
             window.location = "../web/index.html"
         }
     }
 });
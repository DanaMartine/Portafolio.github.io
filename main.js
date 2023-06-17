let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Estudiante de ingeniería. Actualmente se encuentra cursando el segundo semestre.')
  .pauseFor(200)
  .deleteChars(10)
  .start();

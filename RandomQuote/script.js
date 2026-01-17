const quotes = [
  "Believe in yourself.",
  "Dream big. Start small.",
  "Progress, not perfection.",
  "Stay focused and never quit.",
  "You are stronger than you think.",
  "One step at a time.",
  "Hustle in silence.",
  "Make today count.",
  "Growth begins outside comfort.",
  "Keep moving forward.",
  "Small steps lead to big wins.",
  "Discipline creates freedom.",
  "Turn pain into power.",
  "Do it scared.",
  "Success loves consistency.",
  "Your effort matters.",
  "Focus. Work. Win.",
  "Don’t wait. Act now.",
  "Be proud of your progress.",
  "Rise. Grind. Repeat.",
  "Hard work beats talent.",
  "Never stop learning.",
  "Stay hungry. Stay humble.",
  "You’ve got this.",
  "Push past your limits.",
  "Failure builds strength.",
  "Believe. Act. Achieve.",
  "Today is your day.",
  "Chase excellence daily.",
  "Become unstoppable."
];

const button = document.addEventListener('click' , (e)=>{
    
    const index = Math.floor((Math.random())*30);
    const newQuote = quotes[index];

    const text = document.getElementById('mainQuote');
    text.textContent = newQuote;

});

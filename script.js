// changing the background
document.getElementById("colorChange").onclick = function () {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === "white" ? "#2d2d2d" : "white";
};
// changing the font size of the paragraph
document.getElementById("slideText").oninput = function(){
    document.getElementById("dynamnicPara").style.fontSize = this.value + "px"
}

// modal
const quotes = [

  "(Don't watch the clock; do what it does. Keep going. - Sam Levenson) Time is constantly moving forward, and so should you. Stay focused on your journey and keep moving towards your goals without getting distracted.",

  "(It's not about how hard you hit; it's about how hard you can get hit and keep moving forward. - Rocky Balboa) Strength is not just about physical power but about the ability to endure and keep pushing forward despite the hits you take.",

  "(Failure is simply the opportunity to begin again, this time more intelligently. - Henry Ford) Failure is not the end but a chance to learn and grow. Each setback teaches us valuable lessons that pave the way for future success. Embrace failure as a stepping stone to greatness.",

  "(Success is not final, failure is not fatal: It is the courage to continue that counts.- Winston Churchill) True success is measured by the resilience to keep going despite obstacles. Every failure is a temporary setback, and the courage to persevere is what ultimately leads to triumph.",

  "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh Believing in yourself and your dreams is the first step towards making the impossible possible. With determination and faith, you can overcome any challenge and achieve greatness.",

  "It does not matter how slowly you go as long as you do not stop. - Confucius Progress may be slow, but as long as you keep moving forward, you are on the right path. Consistency and perseverance will eventually lead you to your goals.",

  "Every setback is a setup for a comeback. - Unknown Setbacks are opportunities to come back stronger and more determined. Use each failure as a catalyst for growth and a chance to prove your resilience.",

  "Believe you can and you're halfway there. - Theodore Roosevelt Self-belief is a powerful motivator. When you trust in your abilities and stay committed to your goals, you are already halfway to achieving them.",

  "The difference between a good day and a bad day lies in your attitude. - Unknown Your attitude shapes your experiences. A positive mindset can turn challenges into opportunities and make every day a good day.",

  "You are never too old to set another goal or to dream a new dream. - C.S. Lewis Age is just a number when it comes to pursuing your dreams. It's never too late to set new goals and chase new aspirations.",
];

document.getElementById("modalBtn").onclick = function(){
    document.getElementById("modal").style.display = 'block';
    document.getElementById("modalBtn").style.display = 'none';
    // generate random index to select a quote
    const randomQuote = Math.floor(Math.random()*quotes.length);
    // display selected quote
    document.getElementById("quote").innerText = quotes[randomQuote];
    // generating a new quote
    document.getElementById("newQuote").onclick = function(){
        const randomQuote = Math.floor(Math.random() * quotes.length);
        // display
        document.getElementById("quote").innerText = quotes[randomQuote];

    }
     // close the model
     document.getElementById("closeModal").onclick = function(){
        document.getElementById("modal").style.display = 'none';
        document.getElementById("modalBtn").style.display = 'block';
    }
}

//form interactivity.

document.getElementById("myForm").onsubmit = function(event){
    event.preventDefault();
    // getting form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // store error messages
    const error = [];
    // check if name has at least three characters
    if (name.length <3){
        error.push("name must be at least 3 characters.")
    }
    if (password.length < 8 || !/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/\d/.test(password)){
        error.push("Password must be at least 8 characters long, contain at least one uppercase and lowercase letter, and one number.");
    }
     // If there are errors, display them in an alert
  if (error.length > 0) {
    alert(error.join("\n"));
  } else {
    // Otherwise, display a success message
    alert("Form submitted successfully!");
  }
};




 


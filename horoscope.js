// Define Data Elements
const zodiac = ["Aquarius","Pisces","Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius","Capricorn"];
const eventList = ["romantic relationships","career choices","friendships","sexual partners","big purchases"];
const negative = ["cautious","diligent","prudent","alert","wary"];
const positive = ["enthusiasm","zeal","passion","haste","tenacity"];


const event1 = eventList[Math.floor(Math.random()*5)];
const event2 = eventList.filter(x => x !== event1)[Math.floor(Math.random()*5)];




console.log(`Your sun sign is ${zodiac[Math.floor(Math.random()*12)]}. Be ${negative[Math.floor(Math.random()*5)]} with any ${event1} in the near future. Pursue new ${event2} with ${positive[Math.floor(Math.random()*5)]}.`) 
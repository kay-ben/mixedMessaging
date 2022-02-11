// Define Data Elements
<<<<<<< HEAD
const horoscope = {
    zodiac: ["Aquarius","Pisces","Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius","Capricorn"],
    eventList: ["romantic relationships","career choices","friendships","sexual partners","big purchases"],
    negative: ["cautious","diligent","prudent","alert","wary"],
    positive: ["enthusiasm","zeal","passion","haste","tenacity"],
    //Choose 2 unique events from event list
    event1: this.eventList[Math.floor(Math.random()*horoscope.eventList.length)],
    event2: this.eventList.filter(x => !== this.event1)[Math.floor(Math.random()*(horoscope.eventList.length-1))],
}

//Random Number Generator
const randomNumberGenerator = (num) => {
    return Math.floor(Math.random()*num)
=======
const horoscopeInfo = {
    const zodiac = ["Aquarius","Pisces","Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius","Capricorn"];
    const eventList = ["romantic relationships","career choices","friendships","sexual partners","big purchases"];
    const negative = ["cautious","diligent","prudent","alert","wary"];
    const positive = ["enthusiasm","zeal","passion","haste","tenacity"];
>>>>>>> 0bbf67af81fa61c7b979c39a4b17d816adce6cbb
}

console.log(event1);
console.log(event2);

<<<<<<< HEAD
//Your sun sign is
//Be ${negative[Math.floor(Math.random()*5)]} with any ${event1} in the near future.
//Pursue new ${event2} with ${positive[Math.floor(Math.random()*5)]}.
=======
console.log(`Your sun sign is ${zodiac[Math.floor(Math.random()*12)]}. Be ${negative[Math.floor(Math.random()*5)]} with any ${event1} in the near future. Pursue new ${event2} with ${positive[Math.floor(Math.random()*5)]}.`) 
>>>>>>> 0bbf67af81fa61c7b979c39a4b17d816adce6cbb

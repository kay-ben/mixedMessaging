// Define Data Elements
const horoscope = {
    zodiac: ["Aquarius","Pisces","Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius","Capricorn"],
    eventList: ["romantic relationships","career choices","friendships","sexual partners","big purchases"],
    outlook: ["cautious","diligent","prudent","alert","wary","enthusiasm","zeal","passion","haste","tenacity"],
}

//Random Number Generator
const randomNumberGenerator = (num) => {
    return Math.floor(Math.random()*num)
}

//Your sun sign is
//Be ${negative[Math.floor(Math.random()*5)]} with any ${event1} in the near future.
//Pursue new ${event2} with ${positive[Math.floor(Math.random()*5)]}.

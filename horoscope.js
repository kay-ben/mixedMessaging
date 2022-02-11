// Define Data Elements
const horoscope = {
    zodiac: ["Aquarius","Pisces","Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius","Capricorn"],
    eventList: ["romantic relationships","career choices","friendships","sexual partners","financial decisions"],
    outlook: ["cautious","diligent","prudent","alert","wary","enthusiastic","zealous","passionate","quick","tenacious"],
};

//Random Number Generator
const randomNumberGenerator = (num) => {
    return Math.floor(Math.random()*num)
};

//Daily Horoscope Function
const dailyHoroscope = () => {
    console.log(`Your sun sign is ${horoscope.zodiac[randomNumberGenerator(horoscope.zodiac.length)]}.`);
    console.log(`Be ${horoscope.outlook[randomNumberGenerator(horoscope.outlook.length)]} with new ${horoscope.eventList[randomNumberGenerator(horoscope.eventList.length)]} in the near future.`);
};

//Generate Daily Horoscope
dailyHoroscope();

const location = "Montevideo,uy"
const api_key = "7b40a381c14bafee46df379cbee5337f" 
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather"
export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}&units=metric`

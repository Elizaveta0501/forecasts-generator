/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */


const forecastBtn = document.querySelector('.forecast-btn');

const currentForecastName = document.querySelector('.current-forecast h1');

const currentForecastResult = document.querySelector('.current-forecast p');

const forecastsCase = document.querySelector('.forecasts');

const forecastModel = document.querySelector('#forecast-item');

function getRandomValue(min, max) {
    return min + Math.floor(Math.random() * (max - min))
}


forecastBtn.addEventListener('click', function() {

    addForecastToList();

    generateNewForecast();
})

function generateForecastText(count) {
    switch (count) {
        case 0:
            return "Немного терпения и желания сбудутся!"
        case 1:
            return "Все будет хорошо!";
        case 2:
            return "Счастье не за горами"
        case 3:
            return "Вас ждут Сейшельские острова!";
        case 4:
            return "Вам к лицу спортивная форма типа Adidas :)"
        case 5:
            return "У Вас появился тайный поклонник";
        case 6:
            return "Будет дома у тебя всегда вкусная еда!"
        case 7:
            return "Будет мир на земле и деликатесы на столе!";
        case 8:
            return "Будут у Вас торты, сладости и прочие мелкие радости!"
        case 9:
            return "Ждет Вас поездка в Европу и удача по гороскопу! :З";
        default:
            return "Доведите до конца начатое, Вас ждет сюрприз!";
    }
}


function generateNewForecast() {

    const randomValue = getRandomValue(0, 10);

    const randomResult = getRandomValue(0, 101);

    currentForecastName.textContent = generateForecastText(randomValue)

    currentForecastResult.textContent = `Вероятность: ${randomResult}%`
}

function addForecastToList() {

    const name = currentForecastName.textContent;

    const result = currentForecastResult.textContent;

    if (!name || !result) {

        return;
    }

    const forecastToAdd = forecastModel.content.cloneNode(true);

    forecastToAdd.querySelector('h3').textContent = name;

    forecastToAdd.querySelector('p').textContent = result;

    forecastsCase.prepend(forecastToAdd);

}